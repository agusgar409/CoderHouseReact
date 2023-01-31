import React, { createContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const CartInfo = createContext()

const CartContext = ({children}) => {

	const [products, setProducts] = useState([])


  const addProducts = (product) => {
    try {
      if(isInCart(product.id)){
        let productToSave =  products.find((elm) => elm.id === product.id);
        productToSave.quantity += product.quantity;
        setProducts([...products])
      }else{
        setProducts([...products,product])
      }
      toast.success('Productos agregados al carrito', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.message(), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
    try {
      if(isInCart(itemId)){
        const productsUpdate = products.filter(elm => elm.id !== itemId)
        setProducts(productsUpdate)
      }
      toast.warn('Producto eliminado correctamente', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      toast.error(error.message(), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    
  }

  const isInCart = (idProduct) => {
    return products.some(elm => elm.id === idProduct)
  }

  const clear = () => {
    try {
      setProducts([])
      toast.warn('Productos eliminados', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      toast.error(error.message(), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    
  }
  

  const countCart = () =>{
    let totalCountProducts = 0;
    for(const product of products){
      totalCountProducts += product.quantity;
    }
    return totalCountProducts;
  }


  const total = () => {
    let totalPrice = 0;
    for (const product of products) {
      totalPrice += product.price * product.quantity;
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