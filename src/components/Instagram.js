import { FaInstagram } from "react-icons/fa";
import React from 'react'


function Instagram() {
  return (
<>
    <div className="instagram"> 
      
      <div classNAme="instaTitle">
      <span className="instagramTitle"> <FaInstagram className="icon"/> Instagram</span>
      </div>

      <div className="instagramWidget" class="elfsight-app-19fda28e-ab20-4ea9-bbc6-d4984d2c5ebe"></div>
      <div className="schedule">We’re open from <div><span className="scheduleTime"> 8:30am</span> to <span className="scheduleTime"> 3:00pm</span></div></div>

    </div>

    <div className="contact">
       <div className="contactInfo">Need some help, send us a message </div>
       <div className="contactNumber">(604) 245-7855</div>
    </div>

</>
  )
}

export default Instagram