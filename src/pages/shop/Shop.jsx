import React, { useEffect, useState, useContext } from 'react'
import Product from './Product'
import { ShopContext } from '../../context/shopContext'



function Shop() {

    const context = useContext(ShopContext)


    
    return (
        <>
            <div className="container">
                <div className="grop__btn shop__btn">
                    <button className="btn__sort" id="all"  onClick={(id) => context.getCategory(id)}  >All</button>
                    <button className="btn__sort" id="jewelery"  onClick={(id) => context.getCategory(id)}  >Jewelery</button>
                    <button className="btn__sort" id="electronics" onClick={(id) => context.getCategory(id)}>Electronics</button>
                    <button className="btn__sort" id="men's clothing" onClick={(id) => context.getCategory(id)}>Men's clothing</button>
                    <button className="btn__sort" id="women's clothing" onClick={(id) => context.getCategory(id)}>Women's clothing</button>
                </div>
                <ul className="list__products">
                    {context.product.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}

                </ul>
            </div>
        </>

    )
}

export default Shop