import React from "react";
import card from "./../images/card.jpg"
import { FaEnvelopeOpenText  } from 'react-icons/fa';
import { FaLinkedin  } from 'react-icons/fa';



export default function (){
    return (
        <header>
            <img src={card} alt="card-profile"/>
            <h1>Mohammed Khaled</h1>
            <h4>Frontend Developer</h4>
            <h6>Egypt, ElGharbia</h6>
            <div className="links">
                <button className="email"><a href=""><icon><FaEnvelopeOpenText /></icon></a> Email</button>
                <button className="linkedin"><a><icon><FaLinkedin /></icon></a>Linkedin</button>
            </div>
        </header>
    )
}