import { CashIcon } from '@heroicons/react/outline'
import Menu from 'components/Menu'
import { LayoutProps } from 'interfaces/Layout'
import Link from 'next/link'

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="lg:grid lg:grid-cols-6 w-full lg:max-w-8xl lg:mx-auto lg:mt-20 bg-white rounded-lg shadow-sm overflow-hidden">
      <aside className="lg:flex lg:flex-col lg:col-span-1 lg:px-8 lg:py-10 bg-gray-100 space-y-16">
        <h1>
          <Link href="/">
            <a className="flex items-center text-xl font-semibold space-x-2">
              <CashIcon className="w-8 h-8 text-blue-500" />
              <span>Shekels</span>
            </a>
          </Link>
        </h1>
        <Menu />
      </aside>
      <div className="lg:col-span-5 lg:p-10">{children}</div>
    </main>
  )
}

export default Layout
