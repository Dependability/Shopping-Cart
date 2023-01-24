import { prettifyPrice, itemTotal } from "./helperFunctions";
import { useState } from "react";
import Icon from '@mdi/react';
import { mdiCartVariant, mdiWindowClose, mdiTrashCanOutline  } from '@mdi/js';;




const Cart = (props)  => {
    const [visible, setVisible] = useState(false);
    const {quantity, price} = itemTotal(props.cartItems)
    const deleteItem = (val) => {
        return ()=> {
            props.setCartItems((c) => {
                let copiedItems = {...c};
                if (copiedItems[val]) {
                    delete copiedItems[val];
                }
                return copiedItems
            });
            
        }
    }

    return <div>
        <button className='cartButton' onClick={()=>{setVisible(c => c ? false : true); }}><Icon path={mdiCartVariant} size={3} title={'Cart'} /> {+quantity}</button>

        {visible ? (<div className='cart-wrapper' onClick={(e) => {setVisible(false)}}>
        <div className='cart' onClick={(e) => {e.stopPropagation()}}>
        <div className='closeCart' onClick={() => {setVisible(false)}}><Icon path={mdiWindowClose} size={2} /></div>
        {Object.keys(props.cartItems).map((val)=>{
            return <div className='cartItem'>
                <div className='info'>
                <p>{val}</p>
                <img src={`/images/${props.cartItems[val].id}.png`} alt=''/>
                <p>{prettifyPrice(props.cartItems[val].price)}</p>
                </div>
                <div class='quantity'>
                Quantity
                <input type='number' min='1' value={props.cartItems[val].quantity} onChange={(e)=> {
                    const value = e.currentTarget.value;
                    props.setCartItems((c) => {
                        let copiedItems = {...c};
                        if (copiedItems[val]) {
                            let copiedItem = {...copiedItems[val]};
                            copiedItem.quantity = value;
                            copiedItems[val] = copiedItem;
                            
                        }
                        return copiedItems
                    })

                }} onBlur={(e)=> {
                    if (+e.currentTarget.value === 0) {
                        deleteItem(val)();
                    }
                }}/>
                </div>
                <div className='trash' onClick={deleteItem(val)}>
                <Icon path={mdiTrashCanOutline} size={1.5} />
                </div>
            </div>
        })}
        <div className="total">{quantity > 0 ? `Total Price: ${prettifyPrice(price)}` : 'Cart empty'} </div>
        {quantity > 0 ?  <div className='checkout'>Checkout</div> : ''}
        </div>
        </div>): ''}
        
    </div>
    
}

export default Cart