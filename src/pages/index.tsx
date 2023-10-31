/* eslint-disable @typescript-eslint/no-explicit-any */
import Intro from '@/components/Home'
import { useRef } from 'react'
import Head from 'next/head'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/api/home')
  const data = await res.json()
  return { props: { homeData: data.response } }
}

export default function Home({ homeData }: Record<string, any>) {
  const scrollRef = useRef(null)

  return (
    <div className=''>
      <Head>
        <title>Sudeep</title>
      </Head>
      <div ref={scrollRef}>
        <Intro data={homeData} />
      </div>
      <About />
      <Projects />
      <Skills />
    </div>
  )
}
