import React from 'react'
import { useState } from "react";

const ItemCount = ({stock,initial,AddToCart}) => {


    
    const [valueCounter, setValueCounter] = useState(initial);

    const onPlus = () =>{
        if(valueCounter < stock) setValueCounter(valueCounter + 1)
    }
    
    const onDecrement = () => {
        if(valueCounter > initial) setValueCounter(valueCounter - 1);
    }

    return (
        <div className='pt-3 row justify-content-between'>
            <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-lg-4 align-self-center'>
                        <button onClick={onDecrement} type="button" class="btn btn-outline-primary">-</button>
                    </div>
                    <div className='col-lg-2 align-self-center'>
                        <p className='text-center'>{valueCounter}</p>
                    </div>
                    <div className='col-lg-4 align-self-center'>
                        <button onClick={onPlus} type="button" class="btn btn-outline-primary">+</button>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 align-self-center'>
                <button onClick={() => AddToCart} type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount