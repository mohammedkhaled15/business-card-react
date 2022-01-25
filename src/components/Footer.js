import React from "react";
import { FaTwitter  } from 'react-icons/fa';
import { FaFacebookF  } from 'react-icons/fa';
import { FaInstagramSquare  } from 'react-icons/fa';
import { FaGithub  } from 'react-icons/fa';

export default function (){
    return (
        <div className="footer">
            <a href="https://twitter.com/M_Kh1590"><icon><FaTwitter  /></icon></a>
            <a href="https://www.facebook.com/Mohammedkhaled1590/"><icon><FaFacebookF  /></icon></a>
            <a href="https://www.instagram.com/mohammedkhaled1590/"><icon><FaInstagramSquare  /></icon></a>
            <a href="https://github.com/mohammedkhaled15"><icon><FaGithub  /></icon></a>
        </div>
    )
}