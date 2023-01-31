import React from 'react'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import "../../container/itemListContainer/ItemListContainer.css"
import Input from './Input'

import * as yup from "yup"

// regex tel argentina https://es.stackoverflow.com/questions/136325/validar-tel%C3%A9fonos-de-argentina-con-una-expresi%C3%B3n-regular
export const schema = yup.object({
  nombre: yup.string().required("Es un campo requerido"),
  telefono: yup.string().required("Es un campo requerido").matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,"Numero de telefono no es valido"),
  email: yup.string().required("Es un campo requerido").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Email no es valido").email(),
  confirmEmail: yup.string().required("Es un campo requerido").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Email no es valido").email().oneOf([yup.ref("email")],"Los emails no coinciden")
})

const GenerateOrder = ({errors,register}) => {

  return (
    <>
      <div>
        <Input
          id="nombre"
          label="Nombre"
          type="text"
          placeholder="Ingresar nombre"
          register={{...register("nombre")}}
          errorMessage={errors.nombre?.message}
        />
      </div>
      <div>
        <Input
          id="telefono"
          label="Telefono"
          type="text"
          placeholder="Ingresar telefono"
          register={{...register("telefono")}}
          errorMessage={errors.telefono?.message}
        />
      </div>
      <div>
        <Input
          id="email"
          label="Email"
          type="Email"
          placeholder="Email"
          register={{...register("email")}}
          errorMessage={errors.email?.message}
        />
      </div>
      <div>
        <Input
          id="confirmEmail"
          label="Volver a ingresar Email"
          type="email"
          placeholder="Email"
          register={{...register("confirmEmail")}}
          errorMessage={errors.confirmEmail?.message}
        />
      </div>
    </>
  )
}

export default GenerateOrder