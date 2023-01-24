import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetails = ({item}) => {

    const AddToCart = () => {
        alert("alert show")
    }

    return (
        <div className='container center'>
            <div className='row ' >
                <div className='col-lg-6 col-sm-12 align-self-center'>
                    <img style={{width: "18rem" }} src={item.image} alt="imageItem" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                    <div className='pt-5 row justify-content-center'>
                        <div className='pt-3'>
                            <h2>${item.price}</h2>
                        </div>
                        <ItemCount 
                            stock={20} 
                            initial={1}
                            AddToCart={AddToCart()}/>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetails