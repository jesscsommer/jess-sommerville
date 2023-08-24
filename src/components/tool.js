import * as React from "react";
import "../styles/global.css";
import { 
    allFacts,
    factPair,
    factQ,
    factA
} from "./tool.module.css"

const TOOLS = ["JavaScript", "React", "Python", "Flask"]

const Tool = () => {
    return (
        <div>
            <header className="title">tools</header>
            <div className={allFacts}>
                {TOOLS.map(TOOL => 
                    <div className={factPair} key={TOOL}>
                        <p className={factQ}>{TOOL}</p>
                        <p className={factQ}>•</p>
                        <p className={factA}>{TOOL}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tool;