// import React from 'react'

const GenerateOrderObject = ({
    nombre = "",
    apellido = "",
    email = "",
    telefono = "",
    cart = [],
    total = 0
}) => {
  return {
    buyer: {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email
    },
    products: cart,
    total: total,
    createTime: new Date().toLocaleString()
  }
}

export default GenerateOrderObject