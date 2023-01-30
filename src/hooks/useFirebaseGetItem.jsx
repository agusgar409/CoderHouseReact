import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { db } from '../firebase/FireBaseConfig'

export const useFirebaseGetItem = (id) => {

  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    try {
      setLoading(true)

      const getProduct = async () =>{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()){
          const product = {id: docSnap.id, ...docSnap.data() }
          setItem(product);
        }else{
          console.log("no existe el item!")
        }

        setLoading(false)
      }
      getProduct();

      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.messege,
      })
    }

    

  }, [id])


  return [item,loading]
}
