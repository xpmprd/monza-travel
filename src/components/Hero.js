import React from 'react';
import logo from '../images/logo1.png';
import pic1 from '../images/defaultBcg.jpg';
import pic2 from '../images/defaultBcg1.png';
import {Link} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero({children,hero}) {
    return (
    <div className="defaultHero">
        
<div className="tekst5">
                    <span className="text5">Welcome to Monza Travel</span>
                    
                    <span className="text6"><a href="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></a></span>
                    </div>
        
            <div className="slide-images">
                <div className="img-container3">

                    
                <div className="tekst">
                    <span className="text1">Luxury Cruises</span>
                    
                    <span className="text2"><Link to="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></Link></span>
                    </div>
                </div>


                <div className="img-container2">
                <div className="tekst">
                    <span className="text1">Winter Vacations</span>
                    
                    
                    <span className="text2"><Link to="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></Link></span>
                    </div>
                </div>
                <div className="img-container1">
                <div className="tekst">
                    <span className="text1">Welcome to Monza Travel</span>
                    
                    <span className="text2"><Link to="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></Link></span>
                    </div>
                </div>
            </div>
        
    </div>
    )
}

Hero.defaultProps ={
    hero: "defaultHero"
}





