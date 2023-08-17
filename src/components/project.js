import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css"
import { image } from "./project.module.css"
import HaikuText from "../../projects/haikuhaven/index.mdx"

const Project = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(filter: {internal: {contentFilePath: {regex: "/projects/"}}}){
                nodes {
                    frontmatter {
                        hero_image {
                        childImageSharp {
                                gatsbyImageData(width: 500)
                            }
                        }
                        hero_image_alt
                        slug
                        title
                    }
                    id
                    body
                }
                edges {
                    node {
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }`)
    
    return (
        <div>
            <header className="title">projects</header>
            <div className="container">

            {data.allMdx.nodes.map(node => 
                <div className="card" key={node.id}>
                    <p>{node.frontmatter.title}</p>
                    <GatsbyImage 
                        image={getImage(node.frontmatter.hero_image)}
                        alt={node.frontmatter.hero_image_alt}
                        className="cardImage"
                    />
                    <p>{node.body}</p>
                    <p className="tag">Test tag</p>
                </div>)}

            </div>
        </div>
    )
}

export default Project;