import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/ibiza1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';

export default function Room1({room}) {
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
     <p><a href="https://www.google.mk/maps/place/Antarctica/@-39.4859046,-72.2368354,3z/data=!3m1!4b1!4m5!3m4!1s0xb09dff882a7809e1:0xb08d0a385dc8c7c7!8m2!3d-82.8627519!4d135" target="blank">Show on map</a></p>             
              </div>
              <div className="hotel-info">
              <p>price per night</p>
              <p id="tax">including taxes and fees</p>
              <h2>{price}<FontAwesomeIcon icon={faEuroSign} className="euro-sign"/></h2>
                  
              <Link to={`/wintervacations/${slug}`} className="hotel-link"><p>Details</p></Link>
              
              </div>
        </article>
    )
}


