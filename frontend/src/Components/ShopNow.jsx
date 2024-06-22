import React from 'react'
import gamelogo from './Assets/game-image-home.webp';
import { Navigate, useNavigate } from 'react-router-dom';


const ShopNow = () => {

    const navigate = useNavigate();
    const navigateTo = (page) => {
        navigate(`/${page}`)
  }
    
    return (
        <div className='shop-now'>
            <div className='content'>
                <div className='content-txt'>
                    Get Your Game On! Browse the store to get amazing deals
                </div>
                <div className='btn-div'>
                    <button className='content-btn' onClick={()=>{navigateTo('store');}}>Shop</button>
                    <button className='content-btn' onClick={()=>{navigateTo('about');}}>More Info</button>
                </div>
            </div>
            <img className='img-game' src={gamelogo} alt='gamelogo'></img>
        </div>
    )
}

export default ShopNow