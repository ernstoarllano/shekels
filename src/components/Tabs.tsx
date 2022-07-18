import Tab from 'components/Tab'

const tabs = [{ title: 'Overview' }, { title: 'Transactions' }]

const Tabs = () => {
  return (
    <>
      {tabs && (
        <div>
          {tabs.map((tab) => (
            <Tab key={tab.title} title={tab.title} />
          ))}
        </div>
      )}
    </>
  )
}

export default Tabs
