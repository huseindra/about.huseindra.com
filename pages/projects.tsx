import type { NextPage } from 'next'
import { Key, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import ListBlog from '../components/ListBlog'
import { MainLayout } from '../components/MainLayout'
import { getListBlog } from '../lib/blogger'

const Projects: NextPage = () => {

  return (
      <Container>
        <MainLayout title='📂 Projects' subTitle='Selected projects'>
          Coming Soon
        </MainLayout>
      </Container>
  )
}

export default Projects
