import React from 'react'
import GenerateOrder from "../../generateOrder/GenerateOrder"
import GenerateOrderObject from "../../../services/GenerateOrderObject"

import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/FireBaseConfig';
import { doc, updateDoc } from "firebase/firestore";

import { CartInfo } from '../../../context/CartContext';

import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

import { Modal } from 'bootstrap'

const OrderModal = () => {

  const {clear,total,products} = useContext(CartInfo);
  const { handleSubmit, formState: {errors} , register } = useForm();
  const [showGenerateOrder, setShowGenerateOrder] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  

  const confirmPurchase = async (data) => {
    try {
      setShowLoader(true)

      const order = GenerateOrderObject({
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        cart: products,
        total: total(),
      })

      //add orders to firebase
      const docRef = await addDoc(collection(db,"orders"),order);
      clear();
      console.log("documen wrritten with ID: " +docRef.id)

      //update products
      for (const productCart of products) {
        const productFound = doc(db, "products", productCart.id);
        await updateDoc(productFound, {
          stock: productCart.stock - productCart.quantity
        });
      }
      // const myModal = new Modal('#orderModal', {
      //   keyboard: false
      // })
      // debugger
      // myModal.hide()

      // Swal.fire({
      //   icon: 'success',
      //   title: 'Orden creada con ID :' + docRef.id,
      //   showConfirmButton: true,
      // })

      setShowLoader(false)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="modal fade changePosition" id="orderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  setShowGenerateOrder={setShowGenerateOrder}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button id='submitModal' type="submit" className="btn btn-primary" >
                  {showLoader ? 
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    : 
                    "Guardar cambios"
                  }
                </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
      <script>
        $("#submitModal").click(function(){
          $("#orderModal").modal("hide")
        });
      </script>
    </>
    
  )
}

export default OrderModal