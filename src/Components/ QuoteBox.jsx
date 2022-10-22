
import quotes from '../quotes.json'
import React, { useState } from 'react';

const  QuoteBox = ({dex}) => {



    return (
        <div>  
            <div className='Text'>
                <i className="fa-solid fa-quote-left"></i>
                <p>{quotes[dex].quote}</p>
            </div>
            <div className='Author'>
                <h1>{quotes[dex].author}</h1>
            </div>                       
           
        </div>
    );
};

export default  QuoteBox;