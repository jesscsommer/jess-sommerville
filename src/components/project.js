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

            {data.allMdx.nodes.map(node => 
            <div key={node.id}>
                <p>{node.frontmatter.title}</p>
                <GatsbyImage 
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                />
                <p>{node.body}</p>
            </div>)}

        </div>
    )
}

export default Project;