import React from 'react'
import { useParams } from 'react-router'
import Loader from '../../components/loader/Loader';
import ShowItems from '../../components/showItems/ShowItems'
import backgroundSvg from '../../assets/background.svg'
import "./ItemListContainer.css"
import useFirebaseGetProducts from '../../hooks/useFirebaseGetProducts';

const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [products,loading] = useFirebaseGetProducts(categoryId)

  return (
    <div style={{position: "relative"}}>
      <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
      <div className='positionList pt-5'>
        {loading ?
          <Loader/>
            : 
          <ShowItems products={products}/>
        }
      </div>
    </div>
  )
}

export default ItemListContainer