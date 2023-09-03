import * as React from 'react'
import Layout from '../components/layout'
import Home from '../components/home'
import Tool from '../components/tool'
import Story from '../components/story'
import Project from '../components/project'
import Seo from '../components/seo'
import Writing from '../components/writing'
import FunFact from '../components/funfact'
import Contact from "../components/contact"
import "../styles/global.css"

const IndexPage = () => {

  return (
    <Layout>
      <Home /> 
      <Tool /> 
      <Story />
      <Project />
      <Writing />
      <FunFact />
      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo />


export default IndexPage