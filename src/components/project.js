import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// query the projects 
// map to styled cards/divs 

const Project = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
                nodes {
                    childMdx {
                        id
                        frontmatter {
                            title
                            slug
                            hero_image_alt
                            hero_image {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        body
                    }
                }
            }
        }
    `);

    const projectData = data.allFile.nodes.filter(node => node.childMdx);

    return (
        <div>
            <p>Projects!</p>
            {projectData.map(node => 
                <div key={node.childMdx.id}> 
                    <p>This will be a card</p>
                    <p>{node.childMdx.frontmatter.title}</p>

                    {node.childMdx.body}
                    
                </div>
            
            )}
        </div>
    )
}

// export const query = graphql`
//     query {
//         allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
//             nodes {
//                 childMdx {
//                     id
//                     frontmatter {
//                         title
//                         slug
//                         hero_image_alt
//                         hero_image {
//                             childImageSharp {
//                                 gatsbyImageData
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

export default Project;