
import React from 'react';



export default function Wsc({children,hero}) {
    return (
      
        <header className={hero}>
            {children}
        </header>
       
 
    )
}

Wsc.defaultProps ={
    hero:'defaultWsc'
};