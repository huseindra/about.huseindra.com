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

const Home: NextPage = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => setTheme('light'), []);

  return (
    <Fragment>
      <Container>
        <div className='flex flex-col flex-col-reverse md:mt-36	md:flex-row w-full mx-auto max-w-2xl items-center'>
          <div className='mt-12'>
            <div className='max-w-xl'>
              <span className='text-sm'>Hi, I am Husein!</span><span className='say-hi'>👋🏽</span>
              <h1 className='text-xl sm:text-3xl font-bold'>A Software Engineer - Web</h1>
              <p className='text-sm text-justify md:text-left'>Welcome to my documentation space where I share what I`m learning and deliver products including but not limited to web technology, cloud technology and project management.</p>
              <div className='flex my-4'>
                <a className='p-1 border bg-gray-200 text-black rounded-3xl text-center justify-center w-24	items-center text-xs cursor-pointer'>Readmore</a>
              </div>
             
            </div>
          </div>
          <div className='hidden sm:block '>
              <Image src={'/hik.jpeg'} width="90" height="90" alt="Husein Ik" className='border border border-gray-200 rounded-full	' priority/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between mx-auto max-w-2xl my-12'>
          <div className='flex items-center my-4'>
              <NowPlaying />
           </div>
          <div className='flex items-center cursor-pointer'>
            <Social theme={theme}/>
          </div>
        </div>
        
      </Container>
      
      
    </Fragment>
  )
}

export default Home
