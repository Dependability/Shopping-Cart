import { BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import {useState} from 'react';
import Shop from "./components/Shop";
function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState({})


  function addItem(x) {
    setItemCount(c => +c + +x)  
  }

  return (
    <BrowserRouter>
    <nav>
            <ol>
                <li>
            <Link to='/shop'>Shop Link</Link></li>
            <li>
            <Link to='/'>Home Link</Link>
            </li>
            <li><p>Shop Item Count: {itemCount}</p></li>
            </ol>
            
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addItem={addItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
