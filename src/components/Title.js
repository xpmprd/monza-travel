import React from 'react';
import outline from '../images/outline.png';
import outline1 from '../images/outline1.png';

export default function Title({title}){
    return (
        <div className="section-title">
            <h4 id="h4">{title}</h4>
            <img src={outline1} alt="" id="outline1"/>
        <img src={outline} alt="" id="outline"/>
        </div>
    )
}