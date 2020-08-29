import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpg';
import { RoomContext } from '../context';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Error from '../pages/Error';
import StyledMero from '../components/StyledMero';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import sponzor1 from '../images/sponzor1.jpg';
import sponzor2 from '../images/sponzor2.jpg';
import sponzor3 from '../images/sponzor3.jpg';
import sponzor4 from '../images/sponzor4.jpg';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faClipboard} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../components/Loading';


export default class SingleRoom extends Component{
    constructor(props) {
        super(props);
        this.state ={
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render () {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <Error></Error>
        }
        const {name,description,Bar,Resturant,Pool,location,price,wifi,images,description1} = room;
        const [mainImg,...defaultImg] = images;
      
    return (
    <>
    <StyledMero img={mainImg || this.state.defaultBcg}>
        
        <Banner title={`${name}`}>
            <Link to='/summer2020' className="btn-primary">
                back to rooms
            </Link>
        </Banner>
    </StyledMero>

  
    <Tabs>
    <div className="sponsors2">
        
            
        <div className="partners2"><h3>Partners & Sponsors</h3></div>
        <img src={sponzor1} alt=""/>
        <img src={sponzor2} alt=""/>
        <img src={sponzor3} alt=""/>
        <img src={sponzor4} alt=""/>
        <div className="sponzori2">

        </div>
    </div>
    <div className="left">
    <div className="tablist">
    <TabList>
      <Tab><FontAwesomeIcon icon={faInfoCircle} className="Info-details"/>Details</Tab>
      <Tab><FontAwesomeIcon icon={faImage} className="Info-image"/>Pictures</Tab>
      <Tab><FontAwesomeIcon icon={faClipboard} className="Info-image"/>Features</Tab>
    </TabList>
    </div>
    <div className="tabkontent">
        
    <TabPanel>
    <div className="tabkontent-naslov">
    
    <h1><FontAwesomeIcon icon={faInfoCircle} className="Info-details1"/>Details</h1>
            </div>
      
            <article className="desc">
               
                <p>{description}</p>
                <p>{description1}</p>
            </article>
           
      
    </TabPanel>







    <TabPanel>
        
    <div className="tabkontent-naslov">
    <h1><FontAwesomeIcon icon={faImage} className="Info-image"/>Pictures</h1>
       
        
            </div>


 <section className="single-room">
    <div className="single-rool-images">
        
        {defaultImg.map((item,index)=>{
            return <img key={index} src={item} alt={name}/>
        })}
        
        
        </div>
        </section>

            
        
    </TabPanel>












    <TabPanel>
    <div className="tabkontent-naslov">
    
    <h1><FontAwesomeIcon icon={faClipboard} className="Info-image"/>Features</h1>
            </div><article className="info">
            <h6>Location: <p id="black">{location}</p></h6>
                <h6>price: <p id="black">${price}</p></h6>
                
                <h6>Wi-Fi:<p>{wifi?<p id="x"><FontAwesomeIcon icon={faCheck} className="Info-image"/></p>:"X"}</p></h6>
                <h6>Bar:<p>{Bar?<p id="x"><FontAwesomeIcon icon={faCheck} className="Info-image"/></p>:"X"}</p></h6>
                <h6>Restaurant:<p>{Resturant?"X":<p id="x"><FontAwesomeIcon icon={faCheck} className="Info-image"/></p>}</p></h6>
                <h6>Pool:<p>{Pool?<p id="x"><FontAwesomeIcon icon={faCheck} className="Info-image"/></p>:<p id="x-red">X</p>}</p></h6>
            </article>
    </TabPanel>
    </div>
    </div>
  </Tabs>
  
    {/* <section className="single-room">

       
        
    </section>
    <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
            {extras.map((item,index)=>{
                return <li key={index}>- {item}</li>
            })}
        </ul>
    </section> */}
    </>
    );
    }
}