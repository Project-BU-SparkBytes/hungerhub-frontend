export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-4 mt-16">
      {/* tital */}
      <h1 className="text-4xl font-bold text-center mb-4">About the Team</h1>
      <div className="border-b-2 border-gray-300 mb-8"></div>

      {/* team members */}
      <div className="space-y-12">
        {/* 1 */}
        <div className="flex items-start">
          <img 
            src="add image path here" //add image paths
            alt="picture"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Member Name</h3>
            <div className="border-b border-gray-200 w-1/4 my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              description text
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start">
          <img 
            src="add image path here"
            alt="picture"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Member Name</h3>
            <div className="border-b border-gray-200 w-1/4 my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              description text
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start">
          <img 
            src="add immage path here"
            alt="picture"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Member Name</h3>
            <div className="border-b border-gray-200 w-1/4 my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              describe text
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex items-start">
          <img 
            src="add image path here"
            alt="picture"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 pl-6">
            <h3 className="text-xl font-semibold">Member Name</h3>
            <div className="border-b border-gray-200 w-1/4 my-3"></div>
            <p className="text-gray-600 leading-relaxed">
              this is some text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}