import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { 
    linkContainer,
    linkItem,
    linkIcon
} from "./link.module.css"

const Link = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allLinksYaml(sort: {name: ASC}) {
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
            <div className={linkContainer}>
                {data.allLinksYaml.edges.map(edge => 
                    <a href={edge.node.link}>
                        <div key={edge.node.id} className={linkItem}>
                            <GatsbyImage 
                                className={linkIcon}
                                image={getImage(data.allFile.edges.filter(file => file.node.name === edge.node.name)[0].node.childImageSharp)} alt={edge.node.alt} />
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Link;