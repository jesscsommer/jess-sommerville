import * as React from "react";
import "../styles/global.css";
import {
    contactContainer,
    contactText,
    linkContainer,
    linkItem,
    linkIcon
} from "./contact.module.css"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Contact = () => {
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
        <div className={contactContainer}>
            <div id="contact" className="anchor"></div>
            <p className={contactText}>get in touch</p>
            <div className={linkContainer}>
            {data.allLinksYaml.edges.map(edge => 
                <a target="_blank" rel="noreferrer" href={edge.node.link}>
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

export default Contact;