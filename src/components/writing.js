import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css"
import { 
    blogTitle,
    readButton
} from "./writing.module.css"

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
            <header className="title">writing</header>

            <div className="container">
                <div id="writing" className="anchor"></div>
                {data.allMdx.nodes.map(node => 
                    <div className="card" key={node.id}>
                            <GatsbyImage 
                                image={getImage(node.frontmatter.hero_image)}
                                alt={node.frontmatter.hero_image_alt}
                                className="card-image"
                            />
                            <div className="card-content">
                                <p className={blogTitle}>{node.frontmatter.title}</p>
                                <a target="_blank" href={node.frontmatter.blog_link} className={readButton}>Read</a>
                            </div>
                </div>)}
            </div>

        </div>
    )
}

export default Writing;