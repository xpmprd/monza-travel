
import React from 'react';



export default function Swc({children,hero}) {
    return (
      
        <header className={hero}>
            {children}
        </header>
       
 
    )
}

Swc.defaultProps ={
    hero:'defaultSwc'
};