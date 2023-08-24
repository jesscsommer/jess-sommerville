import * as React from "react";
import "../styles/global.css";
import { 
    allFacts,
    factPair,
    factQ,
    factA
} from "./tool.module.css"

const SKILLS = ["JavaScript", "React", "HTML", "CSS", "Python", "Flask", 
                "RESTful APIs", "Object Oriented Programming", "SQL", 
                "PostgreSQL", "SQLAlchemy", "Looker", "Git"]

const Tool = () => {
    return (
        <div>
            <header className="title">skills</header>
            <div className={allFacts}>
                {SKILLS.map(SKILL => 
                    <div className={factPair} key={SKILL}>
                        {/* <p className={factQ}>{SKILL}</p> */}
                        <p className={factA}>{SKILL}</p>
                        {SKILLS[SKILLS.length-1] === SKILL ? null : <p className={factA}>•</p>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tool;