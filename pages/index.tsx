import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'


const menu = [
  {
    id:1,
    name: 'Home'
  },
  {
    id:2,
    name: 'Learnings'
  },
  {
    id:3,
    name: 'Projects'
  },
  {
    id:4,
    name: 'Tech Blog'
  },
]

const Home: NextPage = () => {
  const [activated, setActivated] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setActivated(true), []);
    
  return (
    <div className=''>
      <div className='flex px-8 '>
        <nav className='flex w-full max-w-2xl mx-auto justify-between m-4'>
          <div className='flex left'>
            <a className='text-5xl'>🧑‍💻</a>
          </div>
          <div className='flex items-center'>
            <div>
              {menu.map(item => {
                return(
                  <a key={item.id} className="p-4">{item.name}</a>
                )
              })}
            </div>
            
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-9 h-9 bg-gray-400 rounded-lg dark:bg-gray-50 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
             {activated && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-800 dark:text-gray-900">
                {
                  theme === 'dark' ? 
                  (<path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />): 
                  (<path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />)
                }
              </svg>
             )}
              
            </button>
          </div>
          
        </nav>
      </div>
      <main className='flex flex-col px-8 mt-36'>
        <div className='flex w-full mx-auto max-w-2xl items-center justify-between'>
          <div>
            <div className='flex p-1 border bg-gray-200 text-black rounded-3xl text-center justify-center w-24	items-center text-xs'>
              <span >Hi there!</span><span className='say-hi'>👋🏽</span>
            </div>
            <div>
              <h1 className='mt-2 text-3xl font-bold'>“A Believer in the Future of Web”</h1>
              <h2 className='text-sm'>problem-solver. developer. writer. </h2>
              <div className='flex items-center my-4'>
                <Image src={'/spotify.svg'} width="18" height="18" alt="Spotify"/><span className='mx-2 text-sm'>Not playing - Spotify</span>
              </div>
            </div>
          </div>
          <div>
              <Image src={'/hik.jpeg'} width="90" height="90" alt="Husein Ik" className='border border border-gray-200 rounded-full	'/>
          </div>
        </div>
        <div className='flex w-full justify-between mx-auto max-w-2xl my-16'>
          <div className='flex'>
            <h3>Husein Ik</h3>
            <a className='mx-2 p-1 border bg-gray-200 text-black rounded-3xl text-center justify-center w-24	items-center text-xs'>Readmore</a>
          </div>
          <div className='flex items-center'>
            <Image src={'/twitter.svg'} width="18" height="18" alt="Twitter" className='mx-2'/>
            <Image src={'/github.svg'} width="18" height="18" alt="Github" className='mx-2'/>
            <a className='mx-2'>hello.huseindra[at]gmail.com</a>
          </div>
        </div>
        <footer className='w-full justify-between mx-auto max-w-2xl my-32 text-center'>
        Made using Next.js and Tailwind CSS. Hosted on Vercel.
        </footer>
      </main>
    </div>
  )
}

export default Home
