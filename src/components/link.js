import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { blue } from "./link.module.css"

const Link = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allLinksYaml {
            edges {
                node {
                link
                name
                alt
                id
                }
            }
            }
            allFile(filter: {absolutePath: {regex: "/images/social/"}}) {
            edges {
                node {
                childImageSharp {
                    gatsbyImageData(width: 150)
                }
                name
                }
            }
            }
        }`)

    return (
        <div>
            <header className="title">links</header>
            {data.allLinksYaml.edges.map(edge => 
                <div key={edge.node.id} className={blue}>
                    <p>{edge.node.name}</p>
                    <GatsbyImage image={getImage(data.allFile.edges.filter(file => file.node.name === edge.node.name)[0].node.childImageSharp)} alt={edge.node.alt} />
                </div>
            )}
        </div>
    )
}

export default Link;