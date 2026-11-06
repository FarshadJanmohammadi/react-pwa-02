import axios from 'axios'
import  { useEffect, useState } from 'react'

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

  useEffect(()=>{
    getProducts().then((data)=> setProducts(data))
  },[])

  return (
    <div>
      {products.map(({id,title,description,images})=>(
        <div key={id}>
          <img src={images[0]} />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

export default App