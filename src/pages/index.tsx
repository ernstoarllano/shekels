import Header from 'components/Header'
import Layout from 'components/Layout'
import MoneyFlow from 'components/MoneyFlow'
import Overview from 'components/Overview'
import Transactions from 'components/Transactions'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Overview />
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <Transactions />
        <MoneyFlow />
      </div>
    </Layout>
  )
}

export default Home
