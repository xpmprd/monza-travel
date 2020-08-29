import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/ibiza1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';

export default function Room({room}) {
    const {name,slug,images,price,location,topic,utensils} = room;

    return (
        <article className="room">
            
          <div className="hotel-img">
              <img src={images[1] || defaultImg} alt="single room" width="280px" height="190px"/>
             
          </div>
          <div className="hotel-middle">


          <h3 className="hotel-name"><Link to={`/summer2020/${slug}`} className="name1"> {name}</Link></h3>

    <p><FontAwesomeIcon icon={faUtensils} className="Map-Marker"/>{utensils}</p>


    <p><FontAwesomeIcon icon={faGlobeEurope} className="Globe-Europe"/>{topic} </p>
    
    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="Map-Marker"/>{location}</p>
     <p><a href="https://www.google.mk/maps/place/%D0%9A%D0%B0%D0%BD%D0%B0%D1%80%D1%81%D0%BA%D0%B8+%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B8,+%D0%A8%D0%BF%D0%B0%D0%BD%D0%B8%D1%98%D0%B0/@28.4308895,-18.0977034,7z/data=!3m1!4b1!4m5!3m4!1s0xc41aa86ef755363:0x10340f3be4bc8c0!8m2!3d28.2915637!4d-16.6291304" target="blank">Show on map</a></p>             
              </div>
              <div className="hotel-info">
              <p>price per night</p>
              <p id="tax">including taxes and fees</p>
              <h2>{price}<FontAwesomeIcon icon={faEuroSign} className="euro-sign"/></h2>
                  
              <Link to={`/summer2020/${slug}`} className="hotel-link"><p>Details</p></Link>
              
              </div>
        </article>
    )
}


