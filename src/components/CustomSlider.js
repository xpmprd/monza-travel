import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import img from '../images/defaultBcg.jpg';
import people from '../images/people.png';
import heart from '../images/heart_low.png';
import kufer from '../images/kufer.png';
import plane from '../images/plane.png';
import envelope from '../images/envelope.png';

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      dots: true,
      duration: 100,
      arrows: false,
      infinite:false,
      
    };
    return (
      <div className="divKlas">
         
        <Slider { ...settings }>
        
          <div>
         <h3> <img src={people} alt="" width="30px"/>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aut reiciendis iusto! Ducimus sed quod voluptates tempora dolores, facilis earum quis laboriosam, recusandae tempore ipsam aperiam? Ipsa non quae recusandae nulla molestias cum ut delectus laudantium sit quas perspiciatis sapiente, veritatis aliquam at. Minus, aut eveniet. Praesentium illum voluptatum possimus quisquam obcaecati asperiores, eligendi adipisci quaerat accusantium animi est sapiente!</p>
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
          <div>
          <h3> <img src={envelope} alt="" width="30px" className="envelope"/>Contact Us</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, perferendis!</p>
          </div>
          <div className="linija">
            
            </div>
        </Slider>
      </div>
    );
  }
}