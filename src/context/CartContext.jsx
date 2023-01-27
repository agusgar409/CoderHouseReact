import React, { createContext } from 'react'
import { useState } from 'react'

export const CartInfo = createContext()

const CartContext = ({children}) => {

	const [products, setProducts] = useState([])


  const addProducts = (product) => {
    if(isInCart(product.id)){
      let productToSave =  products.find((elm) => elm.id === product.id);
      productToSave.quantity += product.quantity;
      setProducts([...products])
    }else{
      setProducts([...products,product])
    }
  }

  const removeItem = (itemId) => {
    if(isInCart(itemId)){
      const productsUpdate = products.filter(elm => elm.id !== itemId)
      setProducts(productsUpdate)
    }
  }

  const isInCart = (idProduct) => {
    return products.some(elm => elm.id === idProduct)
  }

  const clear = () => {
    setProducts([])
    console.log("clear")
  }
  

  const countCart = () =>{
    let totalCountProducts = 0;
    for(const product of products){
      totalCountProducts += product.quantity;
    }
    return totalCountProducts;
  }

  return (
    <CartInfo.Provider value={{products
      , addProducts
      , removeItem, countCart ,clear
      // ,decrementProduct
    }}>
        {children}
    </CartInfo.Provider>
  )
}

export default CartContext