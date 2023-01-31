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
import { Modal } from 'react-bootstrap';

import {yupResolver} from "@hookform/resolvers/yup"
import { schema } from '../../generateOrder/GenerateOrder';

const Checkout = ({showModal,setShowModal}) => {

  const {clear,total,products} = useContext(CartInfo);

  const { handleSubmit, formState: {errors} , register} = useForm({
    resolver: yupResolver(schema)
  });

  const [showLoader, setShowLoader] = useState(false);



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

      Swal.fire({
        icon: 'success',
        title: 'Orden creada con ID :' + docRef.id,
        showConfirmButton: true,
      })
      
      handleClose()
      setShowLoader(false)

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: 'Fallo en crear orden de compra',
        showConfirmButton: true,
      })
    }
  };

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
       <Modal show={showModal} onHide={handleClose} size="m" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <form onSubmit={handleSubmit(confirmPurchase)}>
          <Modal.Header closeButton>
            <Modal.Title>Ingresar datos para orden de compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GenerateOrder
              errors={errors}
              register={register}
              schema={schema}
            />
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
            <button type="submit" className="btn btn-primary">
              {showLoader ? 
                <div class="spinner-border text-light" role="status" data-bs-dismiss="modal">
                  <span class="visually-hidden">Loading...</span>
                </div>
                : 
                "Guardar cambios"
              }
            </button> 
          </Modal.Footer>
        </form>
      </Modal>
    </>
    
  )
}

export default Checkout