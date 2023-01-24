import { BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import {useState} from 'react';
import Shop from "./components/Shop";
import ItemView from './components/ItemView'
import Cart from './components/Cart';
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

function App() {
  const [cartItems, setCartItems] = useState({})

  

  function addToFeed() {
    const feed = document.querySelector('.feed');
    

    const addElement = document.createElement('div');
    const check = document.createElement('img');
    check.setAttribute('src', '/images/check-circle-outline.svg');
    check.setAttribute('alt', 'check')
    check.classList.add('.feedCheck');
    addElement.appendChild(check);
    const span = document.createElement('span');
    span.textContent = 'Added to Cart';
    addElement.appendChild(span);
    addElement.classList.add('feedItem');
    
    feed.appendChild(addElement)
    let timeOut = setTimeout(()=> {
      feed.removeChild(addElement);
      clearTimeout(timeOut);
    }, 2000);
    
  }

  function addItem(x, name, price, id) { 
    addToFeed();
    setCartItems((c) => {
      let newObj = {...c};
      if (newObj[name]) {
        const copiedContent = {...newObj[name]};
        copiedContent['quantity'] = copiedContent['quantity'] + +x;
        newObj[name] = copiedContent;
      } else {
        
        newObj[name] = {'quantity': +x, 'price':price, id};
        
      }
      console.log(newObj[name])
      return newObj
    })
  }

  

  return (
    <BrowserRouter basename='Shopping-Cart'>
    <nav>
            <h1>Graphics Shop</h1>
            <div className='right'>
            <div className='navButtons'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            
            </div>
            
            </div>
            
            
        </nav>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        <div className='feed'>

        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addItem={addItem} />} />
        <Route path='/shop/:itemid' element={<ItemView addItem={addItem}/>} /> 
      </Routes>
      <footer><span>Made by</span><a href={'https://www.github.com/Dependability'}>Dependability <Icon path={mdiGithub} size={1.2} /></a></footer>
    </BrowserRouter>
  );
}

export default App;
