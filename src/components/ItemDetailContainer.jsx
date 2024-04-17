import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  
  useEffect (()=>{
    const db = getFirestore();

    if(id){
    const getProducts= query(collection(db, "productos"),where("id", "==", parseInt(id)))
    getDocs(getProducts).then((snapshot)=>{
    if (snapshot.size === 0){
      console.log ("no hay categorias")
    }
    setProducts(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})))
    setLoading(false)
  })
          } else {
            const getProducts = collection(db, "productos")
            getDocs(getProducts).then((snapshot)=>{
              if (snapshot.size === 0){
                console.log ("no hay productos")
              }
              setProducts(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})))
              setLoading(false)
            })
            
          }
  }, [id])

  if (loading) return <h1 className="text-black text-2xl mx-auto">Cargando...</h1>;

  return (
    <div>
      {products && products.map((item, index) => <ItemDetail key={index} item={item}/>)}
    </div>
  );
};

export default ItemDetailContainer;

