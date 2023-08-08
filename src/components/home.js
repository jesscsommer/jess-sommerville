import * as React from "react";
import {
    mainText,
    detailText,
    navLink
} from "./home.module.css"

const Home = () => {
    return (
        <div>
            <p className={detailText}>Hi, I'm Jess Sommerville</p>
            <header className={mainText}>full-stack developer</header>
            <header className={mainText}>& forever tinkerer</header>
            <p className={detailText}>Here is some text about me.</p>
            <p className={navLink}>Read about me</p>
        </div>
    )
}

export default Home;