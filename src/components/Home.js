import Slider from './Slider';
import '../styles/style.css';
function Home() {

    return <div className='home'>
        <div className='body'>
            <Slider />
            <a href={`${process.env.PUBLIC_URL}/shop`}>Start Shopping</a>
        </div>
    </div>
}

export default Home