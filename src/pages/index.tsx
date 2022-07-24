import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/hero/Hero'
import BackgroundAnimation from '../components/background_animation/BackgroundAnimation'
import Tech from '../components/tech/Tech'
import Projects from '../components/projects/Projects'
import About from '../components/about/About';

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
      <About/>
      <Tech/>
      <Projects/>
    </Layout>
  )
}

export default Home
