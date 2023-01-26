import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Loader from '../../components/loader/Loader';
import ShowItems from '../../components/showItems/ShowItems'
import backgroundSvg from '../../assets/background.svg'
import "./ItemListContainer.css"
import { db } from '../../firebase/FireBaseConfig';
import { collection , query, where, getDocs } from "firebase/firestore"; 

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();
  
  useEffect(() => {

    const getProductsDb = async () =>{
      const fireBaseProducts = [];
      let querySnapshot;

      if(categoryId){
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      }else{
        querySnapshot = await getDocs(collection(db, "products"));
      }
      
      querySnapshot.forEach((doc) => {
        const product = {id: doc.id,...doc.data()};
        fireBaseProducts.push(product);
      });
      
      setProducts(fireBaseProducts);
    }
    getProductsDb();
    
  }, [categoryId])

  return (
    <div style={{position: "relative"}}>
      <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
      <div className='positionList pt-5'>
        {Object.keys(products).length === 0 ?
          <Loader/>
            : 
          <ShowItems products={products}/>
        }
      </div>
    </div>
  )
}

export default ItemListContainer