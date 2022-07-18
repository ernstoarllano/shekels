import {
  ReceiptTaxIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <span className="text-sm text-gray-500">July 17th, 2023</span>
        </div>
        <div className="space-x-3">
          <button>
            <SearchIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button>
            <ReceiptTaxIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button>
            <UserCircleIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
