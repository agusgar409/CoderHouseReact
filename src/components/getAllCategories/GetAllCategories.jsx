import { collection, getDocs } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/FireBaseConfig'

const GetAllCategories = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {

    const getCategories = async () =>{
      const fireBaseCategories = [];
      
      let querySnapshot = await getDocs(collection(db, "products"));
      
      querySnapshot.forEach((doc) => {
        const product = {...doc.data()};
        if(!(fireBaseCategories.some(elm => elm === product.category))){
          fireBaseCategories.push(product.category);
        }
        
      });
      
      setCategory(fireBaseCategories);
    }

    getCategories()





    // fetch('https://fakestoreapi.com/products/categories')
    //   .then(res=>res.json())
    //   .then(json=>setCategory(json))
  }, [])
  

  return (
    
    <>
      {category.map(elm => {
        return (
          <NavDropdown.Item><Link to={"/category/"+elm} key={elm} className="dropdown-item" >{elm}</Link></NavDropdown.Item>
        )
      })}
    </>
  )
}

export default GetAllCategories