import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import "../item/Item.css"
import "./ItemDetails.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartInfo } from '../../context/CartContext'
import { useContext } from 'react'


const ItemDetails = ({item}) => {

	const [counterForCart, setCounterForCart] = useState(0)

	const {addProduct} = useContext(CartInfo)

	const addToCart = (counter) => {
    setCounterForCart(counter);
    addProduct({...item,quantity: counter})
	}

	return (
		<div className='container centerItemDetails backgroundColor'>
			<div className='row ' >
				<div className='col-lg-6 col-sm-12 align-self-center'>
					<img className='rounded img-thumbnail' src={item.image} alt="imageItem" />
				</div>
				<div className='col-lg-6 col-sm-12'>
					<div>
						<h1 className='textColor'>{item.title}</h1>
					</div>
					<div className='pt-5 row justify-content-center'>
						<div className='pt-1'>
              <h2 className='text-primary fs-1'>${item.price}</h2>
						</div>
						<aside>
              {counterForCart === 0 ? 
                  <ItemCount 
                      stock={20} 
                      initial={1}
                      addToCart={addToCart}
                  />
								:
                  <Link to={"/cart"} className='mt-5 p-2 btn btn-primary'>
                      Vew Cart
                  </Link>
						  }
						</aside>
					</div>
				</div>
			</div>
			<div className='pt-5'>
				<h3 className='textColor'>{item.description}</h3>
			</div>
		</div>
	)
}

export default ItemDetails