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
import { toast } from 'sonner'

const formSchema = z.object({
  // todo: give stricter fields & account for food available & allergies
  event_name: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  building_location: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  room: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  time: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  food_quantity: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
})

export default function CreateEventForm() {

  const router = useRouter()

  // 1. Define your form.
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

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // create the event by calling the api
    try {
      const response = await fetch(`/api/create-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // if response is not okay, then throw error
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(`${errData.error}; Status: ${response.status}`);
      }

      // if response is okay, then route user to the event
      // temp: route back to events list.
      router.push("/events")

    } catch (err) {
      console.log(err)
      toast.error("Something went wrong. Please try again another time.");
    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md mx-auto">
        {[
          { name: "event_name", label: "Event Name", placeholder: "E.g., Pizza Giveaway" },
          { name: "description", label: "Description", placeholder: "E.g., Free food from student org" },
          { name: "building_location", label: "Building Location", placeholder: "E.g., CAS, BU" },
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
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
        >
          Create Event
        </Button>
      </form>
    </Form>
  )
}