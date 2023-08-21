import * as React from "react";
import "../styles/global.css";
import Link from "./link";
import {
    contactContainer
} from "./contact.module.css"

const Contact = () => {
    return (
        <div>
            <p id="contact" className="subtitle">contact me</p>
            <div className={contactContainer}>
                <header className="title">jess.c.sommerville@gmail.com</header>
                <Link /> 
            </div>
        </div>
    )
}

export default Contact;