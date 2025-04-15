"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  event_name: z.string().min(2, { message: "Must be at least 2 characters." }),
  description: z.string().min(2, { message: "Must be at least 2 characters." }),
  building_location: z.string().min(2, { message: "Must be at least 2 characters." }),
  room: z.string().min(2, { message: "Must be at least 2 characters." }),
  date: z.string().min(2, { message: "Must be at least 2 characters." }),
  time: z.string().min(2, { message: "Must be at least 2 characters." }),
  food_quantity: z.string().min(2, { message: "Must be at least 2 characters." }),
})

export default function CreateEventForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_name: "",
      description: "",
      building_location: "",
      room: "",
      date: "",
      time: "",
      food_quantity: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`/api/create-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(`${errData.error}; Status: ${response.status}`)
      }

      router.push("/events")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 px-6 max-w-3xl text-lg w-full mx-auto"
      >
        {[
          { name: "event_name", label: "Event Name", placeholder: "E.g., Pizza Giveaway" },
          { name: "description", label: "Description", placeholder: "E.g., Free food from student org" },
          { name: "building_location", label: "Building", placeholder: "E.g., CAS, BU" },
          { name: "room", label: "Room", placeholder: "E.g., 313" },
          { name: "date", label: "Date", placeholder: "E.g., 2025-04-08" },
          { name: "time", label: "Time", placeholder: "E.g., 12:30 PM" },
          { name: "food_quantity", label: "Food Quantity", placeholder: "E.g., 5 boxes of pizza" },
        ].map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof z.infer<typeof formSchema>}
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4 w-full relative">
                <FormLabel className="text-base whitespace-nowrap w-1/4">
                  {label}
                </FormLabel>
                <FormControl className="w-3/4">
                  <Input
                    className="bg-[#D9D9D9] rounded-xl text-base"
                    placeholder={placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute bottom-0 translate-y-full" />
              </FormItem>
            )}
          />
        ))}

        <div className="flex justify-start mt-4">
          <Button
            type="submit"
            className="bg-white text-black border border-black rounded-xl px-6 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Create Event
          </Button>
        </div>
      </form>
    </Form>
  )
}