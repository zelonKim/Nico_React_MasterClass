/* import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
    <header>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
        </ul>
    </header>
    )
}
export default Header */

/////////////////////


import React from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {

const navigate = useNavigate()

const onAboutClick = () => {
    navigate("/about")
}

    return (
    <header>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
               <button onClick={onAboutClick}>About</button>
            </li>
        </ul>
    </header>
    )
}
export default Header 