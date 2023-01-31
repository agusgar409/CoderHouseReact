import React from 'react'

const Input = ({id,label,type,placeholder,register,errorMessage}) => {
  return (
    <>
        <label className="form-label">{label}</label>
        <input id={id} type={type} className="form-control" placeholder={placeholder} {...register}
        />
        <span className="text-danger">{errorMessage}</span>
        {/* {errors.nombre?.type === "required" && <p className="text-danger">El campo nombre es requerido</p>}
        {errors.nombre?.type === "maxLength" && <p className="text-danger">El campo nombre es muy largo</p>} */}
    </>
    
  )
}

export default Input