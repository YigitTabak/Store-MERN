import React, { useState } from 'react'
import './createpage.css';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct,setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const {createProduct}=useProductStore()

  const handleAddProduct = async() =>{
    const {success,message}= await createProduct(newProduct)
    console.log("success:",success)
    console.log("message",message)

    setnewProduct({name: "", price:"",image:""});
  };

  return (
    <div className='createcontainer'>
      <div className='createbox'>
        <p>Create New Product</p>
        <input id='input1' name='name' value={newProduct.name} 
        onChange={(e) =>setnewProduct({...newProduct,name:e.target.value})} 
        placeholder='Product Name'></input>

        <input id='input2' name='price' value={newProduct.price}
         onChange={(e) =>setnewProduct({...newProduct,price:e.target.value})} 
          placeholder='Price'></input>

        <input id='input3' name='image' value={newProduct.image} 
        onChange={(e) =>setnewProduct({...newProduct,image:e.target.value})} 
        placeholder='Image URL'></input>
        <button onClick={handleAddProduct}>Add</button>
      </div>
    </div>
  )
}

export default CreatePage