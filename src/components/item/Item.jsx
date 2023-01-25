import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({product}) => {

    return (
        <div className="pt-2 card mb-3 grid text-center" style={{width: "18rem","--bs-rows":3}}>

            <img src={product.image} className="card-img-top max-size-img rounded"  alt="..."/>
            <div className="card-body " style={{"grid-row": 1}}>
                <h5 className="card-title textColor">{product.title}</h5>
            </div>
            <div className='fs-3'>
                <p className="card-title text-primary" style={{"grid-row": 2}}><strong className=''>${product.price}</strong></p>
            </div>
            <div className='row p-3' style={{"grid-row": 3}}>
                <Link to={"/item/"+product.id} href="#somthing" className="btn btn-primary">Vew</Link>
            </div>
        </div>
    )
}

export default Item