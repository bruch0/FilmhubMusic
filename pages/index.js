import Head from 'next/head'

import GlobalStyles from '../components/GlobalStyles'

import TopSection from '../components/TopSection'
import RowsContainer from '../components/RowsContainer'

export default function Home() {
  return (
    <>
      <Head>
          <title>Filmhub Music</title>
      </Head>
      <GlobalStyles />
      <TopSection />
      <RowsContainer />
    </>
  )
}
