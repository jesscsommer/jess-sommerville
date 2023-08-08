import * as React from 'react'
import Layout from '../components/layout'
import Home from '../components/home'
import Story from '../components/story'
import Project from '../components/project'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <Home /> 
      <Story />
      <Project />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage