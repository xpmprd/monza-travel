
import React from 'react';

import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import people from '../images/people.png';
import heart from '../images/heart_low.png';
import kufer from '../images/kufer.png';
import plane from '../images/plane.png';
import envelope from '../images/envelope.png';
import outline from '../images/outline.png';
import outline1 from '../images/outline1.png';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const properties = {
  transitionDuration: 1,
  autoplay:false,
  infinite: true,
  indicators: true,
  arrows:false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


const Slideshow = () => {


    return (
     <> <div id="aboutus"></div>
      <div className="slide-container">
        <h3 id="h3">About us</h3>
        <img src={outline1} alt="" id="outline1"/>
        <img src={outline} alt="" id="outline"/>
        <Slide {...properties} className="mmt">
          


         
        <div>
         <h3> <img src={people} alt="" width="30px"/>About Us</h3>
          <p>Tourist agency "Monza Travel" - Skopje, was formed back in 1992 by couple of experienced people with "A" degree in travelling branch given to us by the World Travel Association. By becoming partners with many companies world-wide we are offering our clients the best.</p>
          </div>
          <div>
          <h3> <img src={heart} alt="" width="40px" className="heart"/>We Love What We Do</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consectetur vel! Eum natus temporibus soluta nisi molestiae quas harum doloribus inventore. Quibusdam quis delectus, itaque officiis adipisci aliquid corporis. Laborum.</p>
          </div>
          <div>
          <h3> <img src={kufer} alt="" width="30px" className="kufer"/>Safe Travel</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque, repellat eveniet rerum doloribus facilis accusantium mollitia blanditiis quo nemo. Consectetur, similique iusto. Mollitia aut id aspernatur. Qui recusandae doloremque, laborum eaque repudiandae suscipit sequi velit sint voluptatibus. Doloremque, soluta.</p>
          </div>
          <div>
          <h3> <img src={plane} alt="" width="30px" className="plane"/>Unique Destinations</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, facilis ea distinctio nulla ipsam harum quod ipsum aliquam consectetur! Veniam.</p>
          </div>
          <div id="cntus">


          <h3> <img src={envelope} alt="" width="30px" className="envelope"/>Contact Us</h3>

          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mapmarker1"/>Skopje, Macedonia</p>

          <p id="number"><FontAwesomeIcon icon={faPhone} className="mapmarker1"/>+389 75 757 529</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="gmail"/>monzatravel@gmail.com</p>
          </div>
          <div className="linija">
            
            </div>

        </Slide>
      </div>
      </>
    )
}

 export default Slideshow

