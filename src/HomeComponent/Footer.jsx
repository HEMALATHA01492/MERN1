import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from "react-icons/fa";
  

function Footer() {
  return (
    <div className='foot-main'>
        <div className='foot-sub'>
            <div className='foot-content'>
                <h3>Need advice on how to improve our flow?</h3>
                <p>Sign Up to join our newsletter and stay up to date.</p>
            </div>
            
            <div className="mt-4 mb-4">
           <div className="foot-input">
            <input
              type="email"
              placeholder="email"
            />
            <button>
              Notify me
            </button>
            </div>
           <p>
            we are concerned about the security of your data. Read <br></br>
            <span className='foot-span'>Privacy Policy</span>
           </p>
        </div>
        <hr className='foot-hr'/>
        </div>

        <div className="foot-icons">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        
    </div>
  )
}

export default Footer;