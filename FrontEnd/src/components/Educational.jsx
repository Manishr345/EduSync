import React from 'react'

const Educational = () => {
  return (
    <div className="min-h-screen bg-black py-12 flex justify-center items-center">
      <div className="sm:w-[500px] p-6 bg-gray-700 rounded-lg shadow-md">
        <div className="flex justify-center items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-white"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Educational Background</h2>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              School name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter school name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              College name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter college name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Grades Obtained in 10th class
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter grades"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Grades Obtained in 12th class
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter grades"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Highest Qualification
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your highest qualification"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Educational
