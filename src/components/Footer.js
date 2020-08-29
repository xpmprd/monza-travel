import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import git from '../images/git1.png'


export default class Footer extends Component {
   
    render() { 
        return ( 
            <>
            <div className="footer">
                <div className="footer-main">
                
                <div className="footer-container1">
                <ul>
                <li>Site Links</li>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#destinations">Destinations</a></li>
                <li><a href="/#aboutus">About Us</a></li>
                <li><Link to="/register">Join Us</Link></li>
                </ul>
                </div>

                <div className="footer-container2">
                <h2>Get in Touch</h2>
                <p id="fftc">Feel free to contact us for any kind of questions,suggestions, sponsorship or partnership!</p>
                <p id="gmf"><FontAwesomeIcon icon={faEnvelope} className="gmail"/>amel.k1@gmail.com</p>
                <p id="flex">
                
               
                <a href="https://www.facebook.com" target="blank" id="t"><FontAwesomeIcon icon={faFacebookF} className="fbinsta1"/></a>

                <a href="https://www.instagram.com" target="blank" id="t1">
                <FontAwesomeIcon icon={faInstagram} className="fbinsta"/></a>


                
                <a href="https://www.twitter.com" target="blank" id="t2"><FontAwesomeIcon icon={faTwitter} className="fbinsta"/></a>

                 
                <a href="https://www.youtube.com" target="blank" id="t2"><FontAwesomeIcon icon={faYoutube} className="fbinsta"/></a>



                </p>
                <p id="loco">Monza Travel</p>
                <p id="loco1"><FontAwesomeIcon icon={faMapMarkerAlt} className="mapmarker1"/>Skopje, Macedonia</p>
                <p id="loco2">(+389) 75-757-529</p>

                </div>

                </div>
                </div>
                <div className="footer-r">
                    <p id="footerp">Made by Monza | 2020</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/xpmprd" id="blank" >
                    <img src={git} alt="/" width="50px" height="50px" id="git"/>
                    </a>
                   
                </div>
                </>
         );
    }
}
 
