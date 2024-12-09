import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Like() {
  const context = useContext(ShopContext)
  console.log(context.like)

  return (
    <div className='container'>
      <div className="list__products">
        {context.like.length === 0 ? ('Add some items') : (
          context.like.map((item) => (
            <div key={item.id} className="cart__wrap">
              <div>{item.title}</div>
              <img src={item.image} alt={item.title} className='product__image' />
              <div>{item.price}$</div>
              <p className="product__description">{item.description}</p>
              <div className="grop__btn">
                <button onClick={() => context.addToCart(item)} className='btn btn__add'>
                  Add to cart
                </button>
                <button className='btn__like' onClick={() => context.likeProduct(item)}>
                  {context.like.includes(item) ?
                    <FaHeart color='red' size={25} /> :
                    <FaRegHeart size={25} />
                  }
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

  )
}

export default Like