import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/global.css";
import { 
    allFacts,
    factPair,
    factQ,
    factA
} from "./funfact.module.css"


const FunFact = () => {
    const data = useStaticQuery(graphql`
        query FunFacts {
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
            <div className={allFacts}>
                {data.allFactsYaml.edges.map(edge => 
                    <div className={factPair} key={edge.node.id}>
                        <p className={factQ}>{edge.node.question}</p>
                        <p className={factQ}>•</p>
                        <p className={factA}>{edge.node.answer}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FunFact;