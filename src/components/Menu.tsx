import {
  CalculatorIcon,
  CogIcon,
  CreditCardIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const Menu = () => {
  return (
    <nav className="lg:flex lg:flex-col lg:justify-between lg:flex-grow">
      <ul className="text-gray-500 space-y-8">
        <li>
          <Link href="/">
            <a className="flex items-center text-gray-900 space-x-3">
              <HomeIcon className="w-6 h-6" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/transactions">
            <a className="flex items-center space-x-3 hover:text-gray-900">
              <CalculatorIcon className="w-6 h-6" />
              <span>Transactions</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="flex items-center space-x-3 hover:text-gray-900">
              <CreditCardIcon className="w-6 h-6" />
              <span>Accounts</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="text-gray-500">
        <li>
          <Link href="/">
            <a className="flex items-center space-x-3 hover:text-gray-900">
              <CogIcon className="w-6 h-6" />
              <span>Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
