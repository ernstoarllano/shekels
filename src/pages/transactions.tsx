import Header from 'components/Header'
import Layout from 'components/Layout'
import Transactions from 'components/tables/Transactions'
import type { NextPage } from 'next'

const TransactionsPage: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Transactions />
    </Layout>
  )
}

export default TransactionsPage
