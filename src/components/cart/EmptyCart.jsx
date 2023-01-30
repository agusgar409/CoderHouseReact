import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='container centerItemDetails backgroundColor'>
      <div>
        <p className='p-5 text-center fs-3'>Carro vacio</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to={"/"} type="button" className="btn btn-primary">Elegir productos</Link>
        </div>
        
      </div>
    </div>
  )
}

export default EmptyCart