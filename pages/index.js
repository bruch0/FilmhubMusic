import Head from 'next/head'
import { useState } from 'react'

import GlobalStyles from '../components/GlobalStyles'

import TopSection from '../components/TopSection'
import RowsContainer from '../components/RowsContainer'

export default function Home() {
  const [filter, setFilter] = useState('');

  return (
    <>
      <Head>
          <title>Filmhub Music</title>
      </Head>
      <GlobalStyles />
      <TopSection filter={filter} setFilter={setFilter} />
      <RowsContainer filter={filter}/>
    </>
  )
}
