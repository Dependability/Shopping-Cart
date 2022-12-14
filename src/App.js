import { BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import {useState} from 'react';
import Shop from "./components/Shop";
import {prettifyPrice} from './components/helperFunctions';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState({})

  

  function addItem(x, name, price) { 
    setCartItems((c) => {
      let newObj = {...c};
      if (newObj[name]) {
        const copiedContent = {...newObj[name]};
        copiedContent['quantity'] = copiedContent['quantity'] + +x;
        newObj[name] = copiedContent;
      } else {
        
        newObj[name] = {'quantity': +x, 'price':price};
        
      }
      console.log(newObj[name])
      return newObj
    })
  }

  return (
    <BrowserRouter>
    <nav>
            <h1>Graphics Shop</h1>
            <div className='right'>
            <div className='navButtons'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            
            </div>
            
            </div>
            
            
        </nav>
        <Cart cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addItem={addItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
