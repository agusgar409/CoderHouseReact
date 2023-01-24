import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetAllCategories = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>setCategory(json))
  }, [])
  

  return (
    <>
      {category.map(elm => {
        return (
          <li key={elm}><Link to={"/category/"+elm} key={elm} className="dropdown-item" >{elm}</Link></li>
        )
      })}
    </>
  )
}

export default GetAllCategories