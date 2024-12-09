import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/normalize.css'
import './css/App.css'
import Header from './components/Header';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart'
import SingleProduct from './pages/singleProduct/singleProduct.jsx';
import Like from './pages/Like/Like.jsx'
import { ShopContextProvider } from './context/shopContext';


function App() {


  return (
    <>
    <BrowserRouter basename='/Shop/'>
      <ShopContextProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/like' element={<Like />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product/:id' element={<SingleProduct />} />
            </Routes>
      </ShopContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
