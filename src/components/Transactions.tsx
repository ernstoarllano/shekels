import Transaction from 'components/Transaction'

const expenses = [
  { id: 1, vendor: "Trader Joe's", date: 'July 17', amount: 40 },
  { id: 2, vendor: 'Ulta', date: 'July 17', amount: 20 },
  { id: 3, vendor: 'North Park Produce', date: 'July 16', amount: 60 },
  { id: 4, vendor: 'Amazon', date: 'July 13', amount: 150 },
]

const Transactions = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold">Transactions</h3>
        <button className="px-3 py-2 text-sm font-medium text-blue-500 bg-white rounded-md shadow-sm">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <Transaction
            key={expense.id}
            vendor={expense.vendor}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </div>
    </section>
  )
}

export default Transactions
