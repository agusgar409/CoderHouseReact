import React from 'react'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import "../../container/itemListContainer/ItemListContainer.css"
import { useForm } from "react-hook-form";
import { collection,addDoc } from 'firebase/firestore';
import GenerateOrderObject from '../../services/GenerateOrderObject';
import { useContext } from 'react';
// import CartContext from '../../context/CartContext';
import { db } from '../../firebase/FireBaseConfig';
import { CartInfo } from '../../context/CartContext';

const GenerateOrder = () => {
  
  const {clear,total,products} = useContext(CartInfo)
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const confirmPurchase =async () => {
    const order = GenerateOrderObject({
      nombre:"Seba",
      email:"agusting409@gmail.com",
      telefono:"1122334455",
      cart: products,
      total:total(),
    })

    const docRef = await addDoc(collection(db,"orders",order));
    clear();
    console.log("documen wrritten with ID: ", docRef.id)
    
  };

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input {...register("Nombre"), { required: true, maxLength: 20 }} />
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input {...register("E-mail"), { required: true, maxLength: 20 }} />
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="number" {...register("Telefono"), { required: true, maxLength: 20 }} />
          </div>
          
        <input type="submit" onClick={confirmPurchase()}/>
        </form>
        
    </>
  )
  
}

export default GenerateOrder