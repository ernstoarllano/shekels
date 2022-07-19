const expenses = [
  {
    id: 1,
    vendor: "Trader Joe's",
    category: 'groceries',
    date: 'July 17',
    amount: 40,
  },
  { id: 2, vendor: 'Ulta', category: 'beauty', date: 'July 17', amount: 20 },
  {
    id: 3,
    vendor: 'North Park Produce',
    category: 'groceries',
    date: 'July 16',
    amount: 60,
  },
  { id: 4, vendor: 'Amazon', category: 'health', date: 'July 13', amount: 150 },
]

const Transactions = () => {
  return (
    <table className="w-full table-auto bg-gray-100 rounded-lg">
      <thead className="text-left">
        <tr>
          <th className="p-8">Vendor</th>
          <th className="p-8">Category</th>
          <th className="p-8">Date</th>
          <th className="p-8">Amount</th>
          <th className="p-8">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className="odd:bg-gray-50">
            <td className="p-8">{expense.vendor}</td>
            <td className="p-8">{expense.category}</td>
            <td className="p-8">{expense.date}</td>
            <td className="p-8">${expense.amount}</td>
            <td className="p-8">
              <div className="space-x-3">
                <button className="text-sm font-medium text-blue-500">
                  Edit
                </button>
                <button className="text-sm font-medium text-red-500">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Transactions
