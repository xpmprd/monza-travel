import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/winter1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';

export default function Room2({room}) {
    const {name,slug,images,price,location,topic} = room;

    return (
        <article className="room">
          <div className="hotel-img">
              <img src={images[1] || defaultImg} alt="single room" width="280px" height="190px"/>
             
          </div>
          <div className="hotel-middle">
          <h3 className="hotel-name"><Link to={`/luxurycruise/${slug}`} className="name1"> {name}</Link></h3>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className="Map-Marker"/>{location}</p>
    <p><FontAwesomeIcon icon={faGlobeEurope} className="Globe-Europe"/>{topic}</p>
                  
              </div>
              <div className="hotel-info">
              <p>Starting From</p>
              <h2>{price}<FontAwesomeIcon icon={faEuroSign} className="euro-sign"/></h2>
                  
              <Link to={`/luxurycruise/${slug}`} className="hotel-link"><p>Details</p></Link>
              
              </div>
        </article>
    )
}


