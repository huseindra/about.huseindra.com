import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export const Navbar = () => {
    const router = useRouter();
    const classActive = router.pathname;
    const [activated, setActivated] = useState(false);
    const { theme, setTheme } = useTheme();
  
    // to access to the theme
    useEffect(() => setActivated(true), []);

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
        {
          id:4,
          name: 'Tech Blog',
          path:"/tech-blog"
        },
    ]

    return(
      <div className='hidden sm:block flex px-8 '>
        <nav className='flex w-full max-w-2xl mx-auto justify-between m-4'>
          <div className='flex left'>
            <a className='hidden sm:block sm:text-5xl'>🧑‍💻</a>
          </div>
          <div className='flex items-center'>
            <div>
              {menu.map(item => {
                return(
                  <Link key={item.id} href={item.path}>
                    <a className={classActive === item.path ? "mx-1 px-4 py-2 font-bold dark:text-black dark:bg-gray-100 dark:hover:text-black rounded-lg cursor-pointer	hover:bg-gray-100 transition-all" : "mx-1 px-4 py-2 bg-white dark:bg-transparent	dark:hover:text-black rounded-lg cursor-pointer	hover:bg-gray-100 transition-all"}>{item.name}</a>
                  </Link>
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
    )
}


export const MobileNavbar = () => {

  const router = useRouter();
  const classActive = router.pathname;
  const { theme, setTheme } = useTheme();
  const [activated, setActivated] = useState(false);

  // to access to the theme
  useEffect(() => setActivated(true), []);
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
    {
      id:4,
      name: 'Blog',
      path:"/tech-blog"
    }
]

    return(
        <div className='sm:hidden inset-x-0 flex flex-col md:flex-row  items-center  m-4 fixed bottom-0'>
           <nav className='max-w-xl overflow-x-auto flex px-4 py-2 items-center rounded-xl bg-gray-500/50 backdrop-blur-sm justify-between'>
              <div className='flex'>
                <Image src={'/hik.jpeg'} width="40" height="40" alt="Husein Ik" className='rounded-full' priority/>
              </div>
              <div className="overflow-x-auto">
                <div className='flex text-sm'>
                {menu.map(item => {
                  return(
                    <Link key={item.id} href={item.path}>
                      <a key={item.id} className={classActive === item.path ? "mx-1 px-2 py-2 font-md dark:text-black dark:hover:text-black rounded-lg cursor-pointer	hover:bg-gray-100 transition-all" : "mx-1 px-2 py-2 transition-all"}>{item.name}</a>
                    </Link>
                  )
                })}
                </div>
              </div>
              <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
                {activated && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ddd" stroke="currentColor" className="w-5 h-5 text-gray-800 dark:text-gray-900">
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
          </nav>
        </div>
    )
}