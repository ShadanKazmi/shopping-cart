import React from 'react'
import logo from './Assets/shop-window.svg'
import { useNavigate } from 'react-router-dom';


const BottomBar = () => {

  const navigate = useNavigate();
  const navigateTo = (page) => {
    navigate(`/${page}`)
}

  return (
    <div className='bottom-bar'>
        <div className='bottom-bar-title'>
            <h1 className='quick-links'>Quick Links</h1>
            <button className='bottom-btn' onClick={() => (window.location.href = "https://www.instagram.com/steam_games_official/?hl=en")}>Instagram</button>
            <button className='bottom-btn' onClick={() => (window.location.href = "https://x.com/Steam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor")}>Twitter</button>
            <button className='bottom-btn' onClick={() => (window.location.href = "https://www.youtube.com/@Valve")}>YouTube</button>
        </div>
        <div className='bottom-title'>
          <h1 onClick={()=>{navigateTo('');}}>The Game Store</h1>
          <img className='bottom-img' src={logo} alt='logo'/>
        </div>
    </div>
  )
}

export default BottomBar