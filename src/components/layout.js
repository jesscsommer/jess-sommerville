import * as React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import {
    main,
    navLinks,
    navLinkItem,
    navLinkText,
    menu,
    menuBkg
} from './layout.module.css'


const Layout = ({ children }) => {

    const links = ["home", "story", "projects", "writing", "contact"]

    return (
        <div>
            <div id={menuBkg}>
                <nav id={menu}>
                    <ul className={navLinks}>
                        {links.map(link => 
                            <li className={navLinkItem} key={link}>
                                <a href={link === "home" ? "#": "#" + link} className={navLinkText}>{link}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <main className={main}>
                {children}
            </main>
        </div>
    )
}

export default Layout