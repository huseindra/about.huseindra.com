import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import ListBlog from '../components/ListBlog'
import { getListBlog } from '../lib/blogger'
import { format } from 'timeago.js';
import Loader from './loader'
import { MainLayout } from '../components/MainLayout'


const TechBlog: NextPage = () => {

  const [data, setData] = useState([])
  console.log(data)
  const fetchBlog = async() => {
    const res = await getListBlog()
    setData(res.items)
  }
  useEffect(() => {
    fetchBlog()
  },[])

  return (
    <Fragment>
      <Container>
        <div className='flex flex-col w-full mx-auto max-w-2xl'>
          <MainLayout title='📘 Tech Blog' subTitle='technology & product management blog'>
            <div className=''>
              {data.length ? data.map((item:any) => (
                <ListBlog key={item.id} url={item.url} title={item.title} category={item.labels.map((i:any) => <span key={i} className="mx-2">{i}</span>)} image={item.author.image.url} author={item.author.displayName} published={format(item.published)}/>
              )): <Loader/>}
            </div>
          </MainLayout>
        </div>
        
      </Container>
      
      
    </Fragment>
  )
}

export default TechBlog
