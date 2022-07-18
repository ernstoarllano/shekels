import { sumTotal } from 'utils/sumTotal'

const expenses = [40, 20, 60, 150]

const Overview = () => {
  return (
    <section className="mb-5 p-6 bg-gray-100 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-md text-gray-500">Overview</span>
          <span className="text-3xl font-semibold">${sumTotal(expenses)}</span>
        </div>
        <div className="bg-white rounded-md shadow-sm">
          <button className="px-3 py-2 text-sm font-medium">Weekly</button>
          <button className="px-3 py-2 text-sm font-medium text-blue-500">
            Monthly
          </button>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Overview
