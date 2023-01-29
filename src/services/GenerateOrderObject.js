// import React from 'react'

const GenerateOrderObject = (
    nombre = "",
    email = "",
    telefono = "",
    cart = [],
    total = 0) => {
  return {
    buyer: [
      this.nombre = nombre,
      this.telefono = telefono,
      this.email = email
    ],
    products: cart,
    total: total,
    createTime: new Date().toLocaleString()
  }
}

export default GenerateOrderObject