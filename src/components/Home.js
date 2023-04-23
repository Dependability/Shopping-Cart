import Slider from './Slider';
import '../styles/style.css';
import { Link } from 'react-router-dom';
function Home() {

    return <div className='home'>
        <div className='body'>
            <Slider />
            <Link to={`/shop`}>Start Shopping</Link>
        </div>
    </div>
}

export default Home