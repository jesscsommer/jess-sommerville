import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/global.css";

const FunFact = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFactsYaml {
            edges {
                node {
                    question
                    answer
                    id
                }
            }
            }
        }
    `)


    return (
        <div>
            <header className="title">get to know me</header>
            {data.allFactsYaml.edges.map(edge => 
                <div key={edge.node.id}>
                    <p>{edge.node.question}</p>
                    <p>{edge.node.answer}</p>
                </div>
            )}
        </div>
    )
}

export default FunFact;