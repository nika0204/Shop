import React, {useContext} from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

function Header() {

    const context = useContext(ShopContext)
    return (
        <div className='header'>
            <div className="container">
                <div className="header__links">
                    <Link to='/'>Home</Link>
                    <Link to='/like'> Like</Link>
                    <Link to='/cart'><FiShoppingCart size={30} /> {context.cart.length}</Link>
                </div>
            </div>

        </div>
    )
}

export default Header