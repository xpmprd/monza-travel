import React, { Component } from 'react';
import logo from '../images/logo1.png';
import logo1 from '../images/logo2.png'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default class Navbar extends Component {

    
  constructor (props) {
      super (props);
      this.state = {
          isSidebarOpen: false,
          isOffersOpen: false,
      }
  }
  handleMenuButtonClick = () => {
      this.setState( {isSidebarOpen: !this.state.isSidebarOpen})
      this.setState({isOpen:!this.state.isOpen}
        )
  }

  handleOffers = () => {
    this.setState( {isOffersOpen: !this.state.isOffersOpen})
     
    
}
   
    
    
    render() {
        console.warn( 'state', this.state);
        console.log(this.state.isOffersOpen)
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="link1">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <Link to="/" className="link2">
                        <img src={logo1} alt="logo"/>
                    </Link>
                    <div className="container_icon" onClick={this.handleMenuButtonClick}
                    >
           
             <div className={this.state.isSidebarOpen?"cont_pomfrit":"container_hamburger"}>
                 
             </div>
   
         </div>
         
                </div>
                <div className={this.state.isSidebarOpen? "check":"check1"} onClick={this.handleMenuButtonClick}>

                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"} id="ul-small">
                    <li>
                    <Link to="/" onClick={this.handleMenuButtonClick}>Home</Link>

                    </li>
                    <li>
                    <a href="/#destinations" onClick={this.handleMenuButtonClick}>Destinations</a>
                    </li>
                    <li>
                    <a href="/#aboutus" onClick={this.handleMenuButtonClick}>About Us</a>

                    </li>
                    <div id="isopensmall" onClick={this.handleOffers}> { this.state.isOffersOpen ? <div><li><a id="asmall">Offers <FontAwesomeIcon icon={faCaretDown} className="caret"/></a> </li> <div className="offersopenedsmall"><span id="offersspansmall"><a  href="/summer2020" id="spansmall">Summer vacations</a></span> <span id="offersspansmall"><a id="spansmall" href="/wintervacations">Winter vacations</a></span> <span id="offersspansmall"><a id="spansmalllast" href="/luxurycruise">Boat Cruise</a></span></div></div> : <li><a id="asmall">Offers <FontAwesomeIcon icon={faCaretDown} className="caret"/></a> </li>  }  </div>
                   
                </ul>
                


                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"} id="ul-big">
                    <li>
                    <Link to="/">Home</Link>

                    </li>
                    <li>
                    <a href="/#destinations">Destinations</a>
                    </li>
                    <li>
                    <a href="/#aboutus">About Us</a>

                    </li>
                    <div id="isopen" onClick={this.handleOffers}>  <div><li><a>Offers <FontAwesomeIcon icon={faCaretDown} className="caret"/></a>
                   </li> <div className="offersopened"><span id="offersspan"><a id="a" href="/summer2020">Summer vacations</a></span>
                   <span id="offersspan"><a id="a" href="/wintervacations">Winter vacations</a></span>
                   <span id="offersspan"><a id="a" href="/luxurycruise">Boat Cruise</a></span></div></div> </div>
                    
 
                    
                </ul>
            </div>

        </nav>
        
    }
}