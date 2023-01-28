import Inventory from './Inventory';
import { useState, useEffect } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
const InventoryPrev = Inventory.slice(0, 5);

export default function Slider() {
    const navigate = useNavigate();
    const [position, setPosition] = useState(0);
    const [userClick, setUserClick] = useState(false);
    const [translation, setTranslation] = useState(0);
    
    const changeSlide = (direction) => {
        if (direction === 1) {
            (position < 4) ? setPosition((c) => {return c+1}) : setPosition(0);
        } else {
            (position >= 1) ? setPosition((c) => c-1) : setPosition(4);
        }
    } 

    useEffect(()=> {
        let interval = setInterval(() => {
            console.log(userClick)
            if (userClick) {
                console.log('user just clicked')
                setUserClick(false);
            } else {
                changeSlide(1);
            }
            

        }, 5000)



        return () => {
            clearInterval(interval);
        };
    })

    useEffect(()=> {
        setTranslation(position * 800);
    }, [position])



    

   
    
    let circleList = [];
    for (let i = 0; i < 5; i++) {
        circleList.push(i)
    }
    

    return <div className='slider-wrapper' onMouseEnter={(e)=> {
        e.currentTarget.querySelectorAll('.name').forEach((val) => {
            val.classList.add('hovered')
        })

        e.currentTarget.querySelectorAll('.preview').forEach((val) => {
            val.classList.add('hovered')
        })

    }} onMouseLeave={(e)=> {
        e.currentTarget.querySelectorAll('.name').forEach((val) => {
            val.classList.remove('hovered')
        })

        e.currentTarget.querySelectorAll('.preview').forEach((val) => {
            val.classList.remove('hovered')
        })
    }}>
        <div className='left-arrow arrow' onClick={() => {changeSlide(-1); setUserClick(true); console.log(userClick)} }>{'<'}</div>
        <div className='right-arrow arrow' onClick={() => {changeSlide(1); setUserClick(true)}}>{'>'}</div>
        <div className='slideshow' style={{transform: 'translateX(-' + translation + 'px)'}}>
            {InventoryPrev.map((val, ind) => {
                return <div className='item' key={ind} onClick={() => {navigate(`/shop/${val.id}`)}}>
                    <div className='name'>{val.name}</div>
                    <div className='preview'>
                        <img src={val.img} alt='' />
                    </div>
                </div>
            })}
        </div>
        <div className='circles'>
            {circleList.map((val) => {
                let selected = val === position ? 'selected' : '';
                return <div className={'circle ' + selected} onClick={()=> {setPosition(val); setUserClick(true)}} key={val} />
            })}
        </div>
    </div>
}