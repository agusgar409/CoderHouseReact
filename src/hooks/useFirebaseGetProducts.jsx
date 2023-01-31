import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { db } from '../firebase/FireBaseConfig';

const useFirebaseGetProducts = (categoryId) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    try {

      setLoading(true)

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

        setLoading(false)
      }
      getProductsDb();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.messege,
      })
    }
    
  }, [categoryId])


  return [products,loading]
}

export default useFirebaseGetProducts