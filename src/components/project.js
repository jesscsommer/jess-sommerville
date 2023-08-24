import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css"
import { 
    githubButton,
    demoButton,
    siteButton,
    description
} from "./project.module.css"


const Project = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {order: ASC}}, filter: {internal: {contentFilePath: {regex: "/projects/"}}}){
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
                        tags
                        demo
                        github
                        website
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
                <div id="projects" className="anchor"></div>
                {data.allMdx.nodes.map(node => 
                    <div className="card" key={node.id}>
                        {/* <p>{node.frontmatter.title}</p> */}
                        <GatsbyImage 
                            image={getImage(node.frontmatter.hero_image)}
                            alt={node.frontmatter.hero_image_alt}
                            className="card-image"
                        />
                        <div className="card-content">
                            <p className={description}>{node.body}</p>
                            <div className="tag-container"> 
                                {node.frontmatter.tags.map(tag => 
                                    <p id={tag} className="tag">{tag}</p>)}
                            </div>
                            <div className="tag-container">
                                <a target="_blank" rel="noreferrer" href={node.frontmatter.github} className={githubButton}>Github</a>
                                <a target="_blank" rel="noreferrer" href={node.frontmatter.demo} className={demoButton}>Demo</a>
                                <a target="_blank" rel="noreferrer" href={node.frontmatter.website} className={siteButton}>Website</a>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Project;