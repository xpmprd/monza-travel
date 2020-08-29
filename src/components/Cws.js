
import React from 'react';



export default function Cws({children,hero}) {
    return (
      
        <header className={hero}>
            {children}
        </header>
       
 
    )
}

Cws.defaultProps ={
    hero:'defaultCws'
};