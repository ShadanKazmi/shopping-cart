import React from 'react'
import rdr2 from './Assets/71xnh5WM+GL.jpg'
import witcher from './Assets/witcher.jpg'
import skyrim from './Assets/The_Elder_Scrolls_V_Skyrim_cover.png'
import gta from './Assets/Grand_Theft_Auto_V.png'
import minecraft from './Assets/mine.avif'



const BestSellers = () => {
  return (
    <div className='best-sellers'>
        <h1 className='best-seller-header'>
            Best Sellers
        </h1>
        <p style={{fontSize: '25px', color:'yellow'}}>People have loved these over the years</p>
        <div className='game-eg'>
            <img className='rdr-img' src={rdr2} alt='rdr2'/>
            <img className='rdr-img' src={witcher} alt='witcher'/>
            <img className='rdr-img' src={minecraft} alt='minecraft'/>
            <img className='rdr-img' src={skyrim} alt='skyrim'/>
            <img className='rdr-img' src={gta} alt='gta'/>

        </div>
    </div>
  )
}

export default BestSellers