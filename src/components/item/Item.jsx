import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    return (
        <div className="card mb-3" style={{width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className='row'>
                    <p className="card-title text-primary"><strong>${product.price}</strong></p>
                    <Link to={"/item/"+product.id} href="#somthing" className="btn btn-primary">Add</Link>
                </div>
            </div>
        </div>
    )
}

export default Item