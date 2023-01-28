import Item from './Item';
import '../styles/style.css';
import Inventory from './Inventory';
function Shop(props) {
    console.log(props)
    return <div>
        <div className='shopItems'>
        {
            
            Inventory.map(({name, price, id, desc, img}, i)=> {
                return <Item name={name} price={price} src={img} id={id} add={props.addItem} key={i} />
            })
        }
        </div>
        </div>
}

export default Shop