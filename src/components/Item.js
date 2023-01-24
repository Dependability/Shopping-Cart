import {useState, useEffect} from 'react';
import { prettifyPrice } from './helperFunctions';
import { useNavigate } from 'react-router-dom';
export default function Item(props) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    function change(e)  {
        setQuantity(e.target.value)
    }

    useEffect(()=> {
        console.log(quantity)

    }, [quantity])

    return <div className='shopItem' onClick={()=> {navigate('/shop/' + props.id)}}>
        <div className='img-wrapper'>
            <img src={props.src} alt='graphics-card'/> 
        </div>
        {/* <div className='itemQuantity'>
            <button onClick={() => {setQuantity((c) => +c - 1)}}>-</button>
            <input type="number" value={quantity} onChange={change}/>
            <button onClick={() => {console.log("Ayee");setQuantity((c) => +c + 1)}}>+</button>
        </div> */}
        <div className='itemName'>{props.name}</div>
        <div className="itemPrice">{prettifyPrice(+props.price)}</div>


    </div>
    
    
    // <div>Name: {props.name}, Price:{props.price}
    
    // 
    // </div>

}