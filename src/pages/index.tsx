import Intro from '../components/Home'
import { useRef, useEffect } from 'react'
import Head from 'next/head'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

// function useIsInViewport(ref) {
//   const [isIntersecting, setIsIntersecting] = useState(false)

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) =>
//         setIsIntersecting(entry.isIntersecting),
//       ),
//     [],
//   )

//   useEffect(() => {
//     observer.observe(ref.current)

//     return () => {
//       observer.disconnect()
//     }
//   }, [ref, observer])

//   return isIntersecting
// }

export default function Home() {
  const scrollRef = useRef(null)
  // const isInView = useIsInViewport(scrollRef)
  // console.log(isInView, 'bool')

  useEffect(() => {
    console.log('hello')
  }, [])
  return (
    <div className=''>
      <Head>
        <title>Sudeep</title>
      </Head>
      <div ref={scrollRef}>
        <Intro />
      </div>
      <About />
      <Projects />
      <Skills />
    </div>
  )
}
