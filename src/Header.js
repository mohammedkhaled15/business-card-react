import React from "react"
import logo from "./logo192.png"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h2>ReactFacts</h2>
            </div>
            <h4>React Course-Project 1</h4>
        </header>
    )
};
