import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <div className='firstTextFooterLeft'>Brunch<span className='firstHeart'><AiFillHeart/></span><span className='secondHeart'><AiFillHeart/></span><span className='thirdHeart'><AiFillHeart/></span></div>
                <div className='secondTextFooterLeft'>1147 Granville Street</div>
                <div className='thirdTextFooterLeft'>Vancouver, BC V6Z 1M1</div>
            </div>
            <div className='footerRight'>
                <span className="footerTextRight">Follow Us ;))  <FaInstagram className="iconFooter"/></span>
            </div>
        </div>
    )
}

export default Footer