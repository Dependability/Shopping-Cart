import { prettifyPrice, itemTotal } from "./helperFunctions";
import { useState } from "react";
const Cart = (props)  => {

    const [visible, setVisible] = useState(false);
    const {quantity, price} = itemTotal(props.cartItems)
    return <div>
        <button className='cartButton' onClick={()=>{setVisible(c => c ? false : true); console.log(visible)}}>Cart {quantity   }</button>

        {visible ? (<div className='cart'>
        {Object.keys(props.cartItems).map((val)=>{
            return <div className='cartItem'>
                <p>{val}</p>
                <p>{props.cartItems[val].quantity}</p>
                <p>{prettifyPrice(props.cartItems[val].price)}</p>
            </div>
        })}
        <div>Total Price: {price} </div>
        </div>): ''}
        
    </div>
    
}

export default Cart