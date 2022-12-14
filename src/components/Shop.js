import Item from './Item'
function Shop(props) {

    return <div>
        <div className='shopItems'>
        <Item name="NVIDIA GeForce RTX 4090" price="3040.00" add={props.addItem} src='./images/'/>
        <Item name="NVIDIA GeForce RTX 3090" price="999.99" add={props.addItem} src='./images/'/>
        <Item name="NVIDIA GeForce RTX 2080" price="489.99" add={props.addItem} src='./images/2080.png'/>
        <Item name="NVIDIA GeForce GTX 1080 Ti" price="699.99" add={props.addItem} src='./images/1080ti.png'/>
        <Item name="NVIDIA GeForce GTX 1080" price="449.99" add={props.addItem} src='./images/1080.png'/>
        <Item name="NVIDIA GeForce GTX 1660 Super" price="300.00" add={props.addItem} src='./images/1660.png'/>
        
        </div>
        </div>
}

export default Shop