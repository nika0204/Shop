import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function SingleProduct() {
  const context = useContext(ShopContext)
  const [single, setSingle] = useState([])
  const location = useLocation();
  const itemId = location.pathname.slice(9)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then(res => res.json())
      .then(json => setSingle(json))
  }, [])


  return (
    <div className="container">
      <div className="single">
        <div className="single__product">
          <div className="single__title">{single.title}</div>
          <img src={single.image} className='product__image' />
          <div className="single__title">{single.price}$</div>
          <p className='single__description'>{single.description}</p>
          <div className="single__rating">
            {single.rating?.rate}/5
            <FaStar size={20} color='yellow' />
          </div>
        </div>

        <div className="grop__btn">
          <button onClick={(id) => context.addToCart(single)} className='btn btn__add'>Add to cart</button>
          <button className=' btn__like'><FaRegHeart size={25}/></button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct