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
                <a className="email" href="mailto:mkhaled-farag@outlook.com">
                    <icon><FaEnvelopeOpenText /></icon>
                    <button> Email</button>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/mohammed-khaled-farag/">
                    <icon><FaLinkedin /></icon>
                    <button >Linkedin</button>
                </a>
            </div>
        </header>
    )
}