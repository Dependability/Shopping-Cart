import Item from './Item';
import Inventory from './Inventory';
function Shop(props) {
    console.log(props)
    return <div>
        <div className='shopItems'>
        {
            
            Inventory.map(({name, price, id, desc}, i)=> {
                return <Item name={name} price={price} src={`./images/${id}.png`} add={props.addItem} key={i} />
            })
        }
        </div>
        </div>
}

export default Shop