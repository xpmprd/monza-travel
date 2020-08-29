import React from 'react';

import { Slide } from 'react-slideshow-image';
import img1 from '../images/defaultBcg.jpg';
import img2 from '../images/defaultBcg1.png';
import img3 from '../images/SuperYacht_Night_1_1820x1024-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const properties = {
  duration: 8000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        
        <Slide {...properties} className="mmt">
          


          <div className="each-slide">

          <div className="tekst10">
                    <span className="text12">Welcome to Monza Travel</span>
                    
                    <span className="text13"><a href="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></a></span>
                    </div>

        


            <div className="mmt">
              
            <img src={img1} alt="img2" width="100%"></img>
            
            </div>
          </div>
          


          <div className="each-slide">
          <div className="tekst30">
                    <span className="text31">Winter Vacations</span>
                    
                    <span className="text32"><a href="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></a></span>
                    </div>





            <div className="mmt">
            <img src={img2} alt="img" width="100%"/>
            </div>
          </div>



          <div className="each-slide">
            

        


          <div className="tekst14">
                    <span className="text15">Luxury Cruises</span>
                    
                    <span className="text16"><a href="/destinations/"><h1>Start your adventure<FontAwesomeIcon icon={faArrowRight} className="arrow"/></h1></a></span>
                    </div>






            <div className="mmt">
              
            <img src={img3} alt="img2" width="100%"/>
            
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow