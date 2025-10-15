import React, { useEffect } from 'react'
import './homepage.css';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const Homepage = () => {

  const {fetchProducts,products} = useProductStore();
  useEffect(()=>{
    fetchProducts();
  }, [fetchProducts]);

  console.log("products",products);


  return (
    <div className='homecontainer'>
      {products.map((product)=>(
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>
  )
}

export default Homepage