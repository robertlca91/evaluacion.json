import quotes from '../quotes.json'
import React from 'react';

const Buttom = ({cambiar,color, colors}) => {
 
    
   
    return (
        <>
             <button onClick={cambiar} style={{ background: color[colors] }}>{'>'}</button>  
            
        </>
    );
};

export default Buttom;