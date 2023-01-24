import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({product}) => {

    return (
        <div className="card mb-3" style={{width: "18rem" }}>
            <img src={product.image} className="card-img-top max-size-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title textColor">{product.title}</h5>
                <div className='row'>
                    <p className="card-title text-primary"><strong className='textColor'>${product.price}</strong></p>
                    <Link to={"/item/"+product.id} href="#somthing" className="btn btn-primary">Vew</Link>
                </div>
            </div>
        </div>
    )
}

export default Item