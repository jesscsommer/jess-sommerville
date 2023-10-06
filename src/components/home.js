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
            <header className={mainText}>software developer</header>
            <header className={mainText}>& forever tinkerer</header>
            <p className={detailText}>I enjoy creating things from scratch,</p>
            <p className={detailText}>working between people and tech,</p>
            <p className={detailText}>and long walks in the Seattle rain</p>
            <a href="#story" className={navLink}>Read about me</a>
        </div>
    )
}

export default Home;