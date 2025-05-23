// src/app/about/page.tsx
import Image from 'next/image'
export default function About() {
  const width = 140
  const height = 140
  return (
    <div className="max-w-2xl mx-auto p-4 mt-16">
      {/* tital */}
      <h1 className="text-4xl font-bold text-center mb-4">About the Team</h1>
      <div className="border-b-2 border-gray-300 mb-8"></div>

      {/* team members */}
      <div className="space-y-12">
        {/* 1 */}
        <div className="flex items-start">
          <Image
            src="/images/Michelle.jpg"
            alt="Michelle"
            width={width}
            height={height}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Michelle Chen</h3>
            <div className="border-b border-gray-200 w-full my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              Michelle is a senior at Boston Unicersity studying computer science. When she is not coding projects you can find her reading, gaming, or spending time with her cat.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start">
          <Image
            width={width}
            height={height}
            src="/images/Ieva.jpg"
            alt="Ieva"
            className="rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Ieva Sagaitis</h3>
            <div className="border-b border-gray-200 w-full my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              Ieva is a senior at Boston University studying computer science and biology. After graduating, she plans to get her M.S. in bioinformatics. Outside of classes, she likes to hike, cook, and visit new cafes.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start">
          <Image
            src="/images/Mensun.png"
            width={width}
            height={height}
            alt="picture"
            className="rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Mensun Wang</h3>
            <div className="border-b border-gray-200 w-full my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              Mensun is deeply passionate about machine learning and full stack, continuously exploring their applications in solving real-world problems, and dedicating himself to gaining expertise in building robust and data-driven applications.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex items-start">
          <Image
            src="/images/Leo.jpg"
            alt="picture"
            width={width}
            height={height}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Leo Ye</h3>
            <div className="border-b border-gray-200 w-1/4 my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              Leo is a student at Boston University studying computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}