import * as React from 'react'
import { slide as Menu } from "react-burger-menu"
import {
    bmBurgerButton,
    bmBurgerBars,
    bar1,
    bar2,
    bar3
} from "./menu.module.css"
import "./menu.module.css"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            {/* <div className={bmBurgerButton}>
                <span id={bar1} className={bmBurgerBars}></span>
                <span id={bar2} className={bmBurgerBars}></span>
                <span id={bar3} className={bmBurgerBars}></span>
            </div>
            <Menu right className={bmBurgerButton}>
                <a id="story" target="_self" href="#story">my story</a>
            </Menu> */}
        </div>
    )
}

export default BurgerMenu;