import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    main,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    menu,
    menuBkg
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

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
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout