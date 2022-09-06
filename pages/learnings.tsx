import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import NowPlaying from '../components/NowPlaying'
import { Social } from '../components/Social'


const menu = [
  {
    id:1,
    name: 'Home',
    path:"/"
  },
  {
    id:2,
    name: 'Learnings',
    path:"/learnings"
  },
  {
    id:3,
    name: 'Projects',
    path:"/projects"
  },
]

const Learnings: NextPage = () => {
  const router = useRouter();
  const classActive = router.pathname;
  const { theme, setTheme } = useTheme();
  const [activated, setActivated] = useState(false);

  // to access to the theme
  useEffect(() => setActivated(true), []);

  return (
    <Fragment>
      <Container>
        <div className='flex flex-col w-full mx-auto max-w-2xl'>
          <div className='mt-12'>
            <h1 className='text-2xl font-bold'>📚 Learnings</h1>
          </div>
          <div className=''>
            Coming Soon !
          </div>
        </div>
        
      </Container>
      
      
    </Fragment>
  )
}

export default Learnings
