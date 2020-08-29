import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import profile1 from '../images/profile1.png';
import profile2 from '../images/profile2.png';
import profile3 from '../images/profile3.png';
import profile4 from '../images/profile4.png';
import profile5 from '../images/profile5.png';
export default class Travel extends Component {
  

        render() {
          const settings =  {
            dots: true,
            duration: 100,
            arrows: false,
            duration:50,
            autoplay: false,
            autoplaySpeed:15000,
            pauseOnHover: false,
            
          };
          return (
            <>
            
            <div className="travel">

               

            <h3 id="h5">What Our Clients Say</h3>
        <div className="green"></div>




              <Slider { ...settings } className="each-slide1-container">
              
              <div className="each-slide1">
                <img src={profile1} alt="" width="90px" height="90px"/>
    <p>I've been travelling with Monza Travel for more than fifteen years now. They are very responsive to all of my requests and have fantastic hotels! You can always call them for any kind of help! I highly recommend them!</p>
                
    <h3 id="h6">-James Freeman</h3>   
              </div>
    
    
              <div className="each-slide1">

              <img src={profile2} alt="" width="90px" height="90px"/>

              <p>Travelling with Monza Travel is a pleasure! I always know I will be placed in the perfect hotel. I can easily rely on them regarding security, insurance and all that stuff. Travelling with Monza Travel is hundred precent safe.</p>
              <h3 id="h6">-Sarah Growitzki</h3> 
               
              </div>
    
    
    
              <div className="each-slide1">
                
              <img src={profile3} alt="" width="90px" height="90px"/>

              <p>We have now taken two trips working with Monza and his team. They are hard working, knowledgeable and very service oriented. All accommodations and guides they've settle us in have been first class.</p>
                
            
              <h3 id="h6">-Samuel Jackson</h3> 
    
                
              </div>


              
              <div className="each-slide1">
                
              <img src={profile4} alt="" width="90px" height="90px"/>

              <p>Monza Travel is the best. Great advice, planning, recommendations, scheduling, follow up and thoroughness. They won't let anything go wrong, but clients know very well they are there to solve any problems if the unexpected occurs!</p>
                
            
              <h3 id="h6">-Amy Henderson</h3> 
    
                
              </div>



              
              <div className="each-slide1">
                
              <img src={profile5} alt="" width="90px" height="90px"/>

              <p>It's wonderful to travel with Monza. They planned a top nothc trip for me and everything was first class and without a single issue!.. I couldn't ask for a more helpful and endearing team. What a wonderful lifetime memory!</p>
                
            
              <h3 id="h6">-George Smith</h3> 
    
                
              </div>
              
              </Slider>
            </div>
            </>
          );
        }
      }