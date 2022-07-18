import { TransactionProps } from 'interfaces/Transaction'

const Transaction = ({ vendor, date, amount }: TransactionProps) => {
  return (
    <article className="p-5 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 p-6 bg-gray-500 rounded-full overflow-hidden"></div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">{vendor}</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
        <div>${amount}</div>
      </div>
    </article>
  )
}

export default Transaction
