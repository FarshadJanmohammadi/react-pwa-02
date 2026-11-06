import axios from 'axios'
import  { useEffect, useState } from 'react'
// import { useOnlineStatus } from './hooks/useOnlineStatus';

type TProducts = {
  id: number;
  title: string;
  description: string;
  images: string[]
}

const App = () => {

 const [products,setProducts] = useState<TProducts[]>([])

  const getProducts = async (): Promise<TProducts[]> => {
    const res = await axios.get("https://dummyjson.com/products");

    return res.data.products;
  }

  // const isOnline = useOnlineStatus();

  useEffect(()=>{
    getProducts().then((data)=> setProducts(data))
  },[])

  return (
    <div>
      {/* {isOnline ? <p>🟢 Online</p> : <p>🔴 Offline</p>} */}
      {products.map(({id,title,description,images})=>(
        <div key={id}>
          <img width={100} height={100} src={images[0]} />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

export default App