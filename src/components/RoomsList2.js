import React, { Component } from 'react';
import Room2 from './Room2';
import sponzor1 from '../images/sponzor1.jpg';
import sponzor2 from '../images/sponzor2.jpg';
import sponzor3 from '../images/sponzor3.jpg';
import sponzor4 from '../images/sponzor4.jpg';
import error from '../images/error.jpg';



export default class RoomsList2 extends Component {
    constructor(){
        super();
    
        this.state={
          search:null
        };
      }
      

      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
    
     

      render () {
        
        

       
    
        const {rooms} = this.props;

        const items = rooms.filter((item)=>{
            if(this.state.search === null )
           return ( <div></div>
            )
            else if(item.location.toLowerCase().includes(this.state.search.toLowerCase()) || item.region.toLowerCase().includes(this.state.search.toLowerCase()) || item.name.toLowerCase().includes(this.state.search.toLowerCase())  ){
          
                return <Room2 key={item.id} room={item}></Room2>
                    
             
            }
          }).map(item=>{
    return <Room2 key={item.id} room={item}></Room2>
  })
      


if(rooms.length === 0){
    return ( <>
    <section className="search">
       <div className="sponsors1">
        
            
        <div className="partners1"><h3>Partners & Sponsors</h3></div>
        <img src={sponzor1} alt=""/>
        <img src={sponzor2} alt=""/>
        <img src={sponzor3} alt=""/>
        <img src={sponzor4} alt=""/>
        <div className="sponzori1">

        </div>
        
        </div>

        <div className="empty-search">
            <img src={error} alt="/"></img>
            <h3>Unfortunately no matches!</h3>
        </div>
        </section>
        </>
    )
}

    return ( <>

       
        <section className="roomslist">
        <div className="sponsors">
        
      


       

        <div className="partners"><h3>Partners & Sponsors</h3></div>
        <img src={sponzor1} alt=""/>
        <img src={sponzor2} alt=""/>
        <img src={sponzor3} alt=""/>
        <img src={sponzor4} alt=""/>
        <div className="sponzori">

        </div>
        
        </div>
            <div className="roomslist-center">
            
        
      

      

     
       
      <input type="input"onChange={(e)=>this.searchSpace(e)} id="input1" className="input-input" placeholder="Search" name="name" id='name' required spellCheck="false"></input>
      {items}
      
          
    
                
            </div>
            
        </section>



    
    </>
    )
            }
}