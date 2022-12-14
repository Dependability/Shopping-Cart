import {useState, useEffect} from 'react';
import { prettifyPrice } from './helperFunctions';
export default function Item(props) {

    const [quantity, setQuantity] = useState(1);

    function change(e)  {
        setQuantity(e.target.value)
    }

    useEffect(()=> {
        console.log(quantity)

    }, [quantity])

    return <div className='shopItem'>
        <div className='img-wrapper'>
            <img src={props.src} alt='graphics-card'/> 
        </div>
        {/* <div className='itemQuantity'>
            <button onClick={() => {setQuantity((c) => +c - 1)}}>-</button>
            <input type="number" value={quantity} onChange={change}/>
            <button onClick={() => {console.log("Ayee");setQuantity((c) => +c + 1)}}>+</button>
        </div> */}
        <div className="itemPrice">{prettifyPrice(+props.price)}</div>
        <div className='itemName'>{props.name}</div>
        <button onClick={() => {props.add(quantity, props.name, +props.price)}}>Add to Cart</button>


    </div>
    
    
    // <div>Name: {props.name}, Price:{props.price}
    
    // 
    // </div>

}