import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/hero/Hero'

const Home: NextPage = () => {
  const sectionStyle = {
    display: 'grid',
  };

  return (
    <Layout>
      <section style={sectionStyle} className='GlobalSection'>
        <Hero/>
      </section>
    </Layout>
  )
}

export default Home
