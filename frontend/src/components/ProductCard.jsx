import './ProductCard.css';
import { useProductStore } from '../store/product';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    closeModal(); 
  };

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  
  return (
    <>
      <div className="cardcontainer">
        <img className="cardimg" src={product.image} alt={product.name}></img>

        <div className="cardheading">{product.name}</div>
        <div className="cardprice">{product.price}$</div>
        <div className="cardbuttons">
          <button className="cardedit" onClick={openModal}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="carddelete" onClick={() => handleDeleteProduct(product._id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="cardmodal">
          <div className="modal-content">
            <h2>Update Product</h2>
            <input
              placeholder="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            ></input>
            <input
              placeholder="Price"
              name="price"
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
            ></input>
            <input
              placeholder="Image URL"
              name="image"
              value={updatedProduct.image}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
            ></input>
            <button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
