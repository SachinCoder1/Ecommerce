import './App.css';
import styled from 'styled-components'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/home/items/ProductDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextProvider from './context/ContextProvider';
import Cart from './components/home/cart/Cart';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
            {/* <Route path="/cart" element={} */}

          </Routes>

        </BrowserRouter>
      </ContextProvider>


    </>
  );
}

export default App;











// const HomeCont = styled.div`
// margin-top:200px;
// `
