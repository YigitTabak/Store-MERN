import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';


const Navbar = () => {

  return (
    <div className='navbarcontainer'>
      <Link className='baslik' to="/"> 
        <p>PRODUCT STORE</p>
      </Link>

      <Link className='ekleme' to="/create">
        <button><i className="fa-solid fa-plus"></i></button>
      </Link>
    </div>
  );
};

export default Navbar;
