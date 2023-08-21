import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    main,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    menu
} from './layout.module.css'
import BurgerMenu from './menu'

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

    const links = ["story", "projects", "writing", "contact"]

    return (
        <div>
            <nav id={menu}>
                <ul className={navLinks}>
                    {links.map(link => 
                        <li className={navLinkItem} key={link}>
                            <a href={"#" + link} className={navLinkText}>{link}</a>
                        </li>
                    )}
                </ul>
            </nav>
            <main className={main}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout