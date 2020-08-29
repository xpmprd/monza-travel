import React, { Component } from 'react';
import Title from "./Title";
import Summer from '../images/Summer2020.png';
import Winter from '../images/Winter2020.png';
import Cruise from '../images/Cruise.png';
import {Link} from 'react-router-dom';


export default class Services extends Component{
    state={
        services:[
            {
                picture: <img src={Summer} alt="summer" height="100%"/>,
                title:"Summer 2020",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dignissimos sit sapiente deserunt nulla ducimus id hic laboriosam! Hic, autem doloribus? Facilis sint beatae veritatis natus ipsam dolor, ad vel asperiores ullam pariatur ut fuga? Nemo id suscipit, officia placeat amet expedita impedit temporibus distinctio aliquid, a, libero quaerat dolore.',
                p: <Link to="/summer2020/"><h1>View offers</h1></Link>

            },
            {
                picture: <img src={Winter} alt="winter" height="100%"/>,
                title:"Winter Vacations",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dignissimos sit sapiente deserunt nulla ducimus id hic laboriosam! Hic, autem doloribus? Facilis sint beatae veritatis natus ipsam dolor, ad vel asperiores ullam pariatur ut fuga? Nemo id suscipit, officia placeat amet expedita impedit temporibus distinctio aliquid, a, libero quaerat dolore.',
                p: <Link to="/wintervacations/"><h1>View offers</h1></Link>
                
            },
            {
                picture: <img src={Cruise} alt="cruise" height="100%"/>,
                title:"Luxury Cruise",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dignissimos sit sapiente deserunt nulla ducimus id hic laboriosam! Hic, autem doloribus? Facilis sint beatae veritatis natus ipsam dolor, ad vel asperiores ullam pariatur ut fuga? Nemo id suscipit, officia placeat amet expedita impedit temporibus distinctio aliquid, a, libero quaerat dolore.',
                p: <Link to="/luxurycruise/"><h1>View offers</h1></Link>

            },
           
        ]
    }
    render(){
        return ( <>
            <div  id="destinations"></div>
            <section className="services">
               <Title title="Destinations"/>
               <div className="services-center">
                   {this.state.services.map((item,index) =>{
             return <article key={index} className="service">
                 <span>{item.picture}</span>
                 <div className="opis">
                 <h1>{item.title}</h1>
                 <div className="crta"/>
                 <p>{item.info}</p>
                 <span className="moreinfo">{item.p}</span></div>
             </article>
                   })}
               </div>
            </section>
            </>
        );
    }
}