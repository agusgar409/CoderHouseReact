import React from 'react'
import GenerateOrder from "../../generateOrder/GenerateOrder"
import GenerateOrderObject from "../../../services/GenerateOrderObject"

import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/FireBaseConfig';
import { CartInfo } from '../../../context/CartContext';

import { useForm } from "react-hook-form"
import { useContext } from 'react';

const OrderModal = () => {

  const {clear,total,products} = useContext(CartInfo)

  const { handleSubmit, formState: {errors} , register } = useForm();

  const confirmPurchase = async (data) => {
    debugger
    // console.log(data);
    const order = GenerateOrderObject({
      nombre: data.nombre,
      email:data.email,
      telefono:data.telefono,
      cart: products,
      total:total(),
    })

    console.log(order)

    const docRef = await addDoc(collection(db,"orders"),order);
    clear();
    console.log("documen wrritten with ID: ", docRef.id)
    
  };


  return (
    <>
      <div className="modal fade changePosition" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit(confirmPurchase)}>
              <div className="modal-header">
                <h5 className="modal-title">Ingresar datos para orden de compra</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <GenerateOrder 
                  register={register} 
                  errors={errors}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default OrderModal