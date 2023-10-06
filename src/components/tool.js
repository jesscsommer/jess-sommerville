import * as React from "react";
import "../styles/global.css";
import { 
    allFacts,
    factPair,
    factQ,
    factA
} from "./tool.module.css"

const Tool = () => {
    return (
        <div>
            <header className="title">skills</header>
            <div className={allFacts}>
                <p className={factA}>
                    JavaScript  •  React  •  HTML  •  CSS  •  Python  •  Flask  •  RESTful APIs  •  SQL  •  Object Oriented Programming  •  PostgreSQL  •  SQLAlchemy  •  Git
                </p>
            </div>
        </div>
    )
}

export default Tool;