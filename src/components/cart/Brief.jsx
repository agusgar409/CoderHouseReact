import React from 'react'
// import GenerateOrder from '../generateOrder/GenerateOrder'
import "../item/Item.css"
import "../itemDetails/ItemDetails.css"
import "./Cart.css"
// import OrderModal from './modals/OrderModal'
import ProductsRow from './ProductsRow'

const Brief = ({removeItem,clear,editAmountProducts,products,total,setShowModal}) => {
  
  // const [fillOrder, setfillOrder] = useState(false)

  const handleShow = () => {
    setShowModal(true)
  }

  return (
    <div className='container centerItemDetails backgroundColor'>
      
      <div>
        <table className='table table-striped table-hover caption-top'>
          <caption>Carrito de compras</caption>
          <thead>
            <tr className='text-center'>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map(prod => {
              return <ProductsRow
                key={prod.id} 
                product={prod}
                removeItem={removeItem} 
                editAmountProducts={editAmountProducts}
              />
            })}
          </tbody>
        </table>
        <div className='text-end'>
            Total : $ {total()}
        </div>
        <div className='text-end'>
          <button onClick={()=>clear()} className='me-3 btn btn-primary'>
            Vaciar carrito
          </button>
          <button className='me-2 btn btn-primary' onClick={handleShow}>
            Terminar mi compra
          </button>
        </div>
      </div>
    </div>
  )
}

export default Brief