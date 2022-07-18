import DonutChart from 'components/charts/DonutChart'

const data = [
  {
    value: 40,
    category: 'groceries',
    fill: '#6366F1',
  },
  {
    value: 20,
    category: 'beauty',
    fill: '#D946EF',
  },
  {
    value: 60,
    category: 'groceries',
    fill: '#6366F1',
  },
  {
    value: 150,
    category: 'health',
    fill: '#22C55E',
  },
]

const MoneyFlow = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Money Flow</h3>
        <button className="px-3 py-2 text-sm font-medium text-blue-500 bg-white rounded-md shadow-sm">
          July
        </button>
      </div>
      <DonutChart data={data} />
    </section>
  )
}

export default MoneyFlow
