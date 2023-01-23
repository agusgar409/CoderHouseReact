import React from 'react'
import { useState } from "react";

const ItemCount = () => {


    
    const [valueCounter, setValueCounter] = useState(0);

    const sumValue = () =>{
        setValueCounter(valueCounter + 1)
      }
    
    const discountValue = () => {
    if(valueCounter > 0){
        setValueCounter(valueCounter - 1);
    }
    }

    return (
        <div className='row'>
            <div className='col-lg-3 align-self-center'>
                <button onClick={discountValue} type="button" class="btn btn-outline-primary">-</button>
            </div>
            <div className='col-lg-1 align-self-center'>
                <p className='text-center'>{valueCounter}</p>
            </div>
            <div className='col-lg-4 align-self-center'>
                <button onClick={sumValue} type="button" class="btn btn-outline-primary">+</button>
            </div>
        </div>
    )
}

export default ItemCount