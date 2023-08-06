import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage 
                alt="A headshot of Jess smiling"
                src="../images/jess_avatar.png"
            />
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage