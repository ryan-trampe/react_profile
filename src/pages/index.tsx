import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/hero/Hero'
import BackgroundAnimation from '../components/background_animation/BackgroundAnimation'
import Projects from '../components/projects/Projects'

const Home: NextPage = () => {
  const sectionStyle = {
    display: 'grid',
  };

  return (
    <Layout>
      <section style={sectionStyle} className='GlobalSection'>
        <Hero/>
        <BackgroundAnimation/>
      </section>
      <Projects/>
    </Layout>
  )
}

export default Home
