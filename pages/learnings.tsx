import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { MainLayout } from '../components/MainLayout'
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
  return (
    <Fragment>
      <Container>
          <MainLayout title='📚 Learnings' subTitle='Technical documentation I have learned'>
          <div className=''>
            Coming Soon !
          </div>
          </MainLayout>        
      </Container>
      
      
    </Fragment>
  )
}

export default Learnings
