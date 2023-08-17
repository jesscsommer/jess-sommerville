import * as React from "react";
import {
    mainText,
    detailText,
    navLink,
    container,
    myName
} from "./home.module.css"

const Home = () => {
    return (
        <div className={container}>
            <p className={myName}>Hi, I'm Jess Sommerville</p>
            <header className={mainText}>full-stack developer</header>
            <header className={mainText}>& forever tinkerer</header>
            <p className={detailText}>Here is some text about me.</p>
            <a href="#story" className={navLink}>Read about me</a>
        </div>
    )
}

export default Home;