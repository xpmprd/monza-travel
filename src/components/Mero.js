import React from 'react';

export default function Mero({children,mero}) {
    return  <header className={mero}>{children}</header>;
}


    
        Mero.defaultProps ={
            mero: "defaultMero"
        }
        