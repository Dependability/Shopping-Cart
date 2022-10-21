import Item from './Item'
function Shop(props) {

    return <div>
        Shop Page!
        <Item name="Dog" price="100" add={props.addItem}></Item>
        </div>
}

export default Shop