import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css"
import { blogTitle } from "./writing.module.css"

const Writing = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {order: ASC}}, filter: {internal: {contentFilePath: {regex: "/writings/"}}, frontmatter: {title: {ne: "my story"}}}){
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
                        blog_link
                    }
                    id
                    body
                    excerpt
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
            <header className="title">writings</header>

            <div className="container">
                {data.allMdx.nodes.map(node => 
                    <div className="card" key={node.id}>
                        <a href={node.frontmatter.blog_link} text-decoration="none"> 
                            <GatsbyImage 
                                image={getImage(node.frontmatter.hero_image)}
                                alt={node.frontmatter.hero_image_alt}
                                className="cardImage"
                            />
                            <p className={blogTitle}>{node.frontmatter.title}</p>
                            <p>{node.excerpt}</p>
                        </a>
                </div>)}
            </div>

        </div>
    )
}

export default Writing;