import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex px-8 '>
        <nav className='flex max-w-2xl mx-auto '>
          <a>🧑‍💻</a>
        </nav>
      </div>
      <main className='flex px-8 '>
        <div className='flex mx-auto max-w-2xl '>
          <div>
            <div>
              <span>Hi there!</span><span>👋🏽</span>
            </div>
            <h1>“A Believer in the Future of Web”</h1>
            <h2>problem-solver. developer. writer. </h2>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  )
}

export default Home
