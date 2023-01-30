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

  const editAmountProducts = (product,adds) =>{
    let productToSave =  products.find((elm) => elm.id === product.id);
    if(adds && product.quantity < product.stock){
      productToSave.quantity++;
    }else if(!adds && product.quantity>1){
      productToSave.quantity--;
    }
    setProducts([...products])
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
  }
  

  const countCart = () =>{
    let totalCountProducts = 0;
    for(const product of products){
      totalCountProducts += product.quantity;
    }
    return totalCountProducts;
  }


  const total = () => {
    let totalPrice;
    for (const product of products) {
      totalPrice = product.price * product.quantity;
    }
    return totalPrice;
  }

  return (
    <CartInfo.Provider value={{products, addProducts, removeItem, countCart ,clear,editAmountProducts,total
    }}>
        {children}
    </CartInfo.Provider>
  )
}

export default CartContext