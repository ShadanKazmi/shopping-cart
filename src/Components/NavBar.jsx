import logo from './Assets/shop-window.svg'
import { Navigate, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  const navigateTo = (page) => {
    navigate(`/${page}`)
}

const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
  

  return (
    <div className='title-bar'>
        <img className='img-icon' src={logo} alt='logo'></img>
        <p className='title' onClick={()=>{navigateTo('');}}>The Game Store</p>
        <div className='nav-items'>
          <button className='nav-btn' onClick={()=>{navigateTo('store');}}>Shop</button>
          <button className='nav-btn' onClick={()=>{navigateTo('about');}}>About</button>
          <button className='nav-btn' onClick={scrollToBottom}>Contact Us</button>
        </div>
        <img className='img-icon-right' src={logo} alt='logo'></img>
      </div>
  )
}

export default NavBar