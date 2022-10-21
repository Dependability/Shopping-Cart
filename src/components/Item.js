import {useState, useEffect} from 'react';

export default function Item(props) {

    const [quantity, setQuantity] = useState(1);

    function change(e)  {
        setQuantity(e.target.value)
    }

    useEffect(()=> {
        console.log(quantity)

    }, [quantity])

    return <div>Name: {props.name}, Price:{props.price}
    <button onClick={() => {setQuantity((c) => +c - 1)}}>-</button>
    <input type="number" value={quantity} onChange={change}/>
    <button onClick={() => {console.log("Ayee");setQuantity((c) => +c + 1)}}>+</button>
    <button onClick={() => {props.add(quantity)}}>Add!</button>
    </div>

}