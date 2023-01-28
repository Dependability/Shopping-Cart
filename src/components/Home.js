import Slider from './Slider';
import '../styles/style.css';
function Home() {

    return <div className='home'>
        <div className='body'>
            <Slider />
            <a href='Shopping-Cart/shop'>Start Shopping</a>
        </div>
    </div>
}

export default Home