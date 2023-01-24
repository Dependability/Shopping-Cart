import { useParams } from "react-router-dom";
import Inventory from "./Inventory";
import Icon from '@mdi/react';
import { prettifyPrice } from "./helperFunctions";
import { mdiChip, mdiMemory, mdiChevronDoubleUp } from '@mdi/js';
import { useNavigate } from "react-router-dom";


export default function ItemView(props) {
    const {itemid} = useParams();
    const navigate = useNavigate();
    const itemObj = Inventory.find(({id}) => id === itemid);

    return <div className='itemView-wrap'>
        <div className='backButton' onClick={()=> {navigate('/shop')}}>{'<'} Back</div>
        <div className='itemView'>
        <div className='title'>
            {itemObj.name}
        </div>
        <div className='price'>
            {prettifyPrice(itemObj.price)}
        </div>
        <div className='row'>
        <div className='photo'>
            <img src={`./images/${itemObj.id}.png`} alt='why'></img>
        </div>
        <div className='specs'>
            <div className='heading'>Specifications</div>
            <div className='cores'>
                <Icon path={mdiChip} size={1.2}/>
                <div>{itemObj.specs.cores} NVIDIA CUDA Cores</div>
            </div>
            <div className='boost'>
                <Icon path={mdiChevronDoubleUp} size={1.2} />
                <div>{itemObj.specs.boost} Boost Clock</div>
            </div>
            <div className='memory'>
                <Icon path={mdiMemory} size={1.2} />
                <div>{itemObj.specs.memory} Memory</div>
            </div>
        </div>
        </div>
        <div className='addToCart' onClick={()=> {
            props.addItem(1, itemObj.name, itemObj.price, itemObj.id);
        }}>Add to Cart</div>
        <div className='desc'>
            <div className='heading'>Description</div>
            <p>{itemObj.desc}</p></div>
        
    </div>
    </div>
}

