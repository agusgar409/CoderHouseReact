import React, { useContext } from 'react'
import ItemCount from '../itemCount/ItemCount'
import "../item/Item.css"
import "./ItemDetails.css"
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartInfo } from '../../context/CartContext'


const ItemDetails = ({item}) => {

	const {addProducts, products} = useContext(CartInfo)

	const addToCart = (counter) => {
		addProducts({...item,quantity: counter})
	}

	return (
		<div className='container centerItemDetails backgroundColor'>
			<div className='row ' >
				<div className='col-lg-6 col-sm-12 align-self-center text-center'>
					<img className='rounded img-thumbnail max-size-detail' src={item.image} alt="imageItem" />
				</div>
				<div className='col-lg-6 col-sm-12'>
					<div>
						<h1 className='textColor'>{item.title}</h1>
					</div>
					<div className='pt-5 row justify-content-center'>
						{item.stock === 0 ? 
							<p className="pt-4 fs-3 text-danger">No hay stock</p>
							: 
							<>
								<div className='pt-1'>
									<h2 className='text-primary fs-1'>${item.price}</h2>
								</div>
								<aside>
									<ItemCount 
										stock={item.stock} 
										initial={1}
										addToCart={addToCart}
									/>
						
									{ products.find(elm => elm.id === item.id) && 
										<Link to={"/cart"} className='mt-4 p-2 btn btn-primary'>
											Vew Cart
										</Link>
									}
								</aside>
							</>
						}
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