import React from 'react'
import NavBar from '../Components/NavBar'
import ShopNow from '../Components/ShopNow'
import BestSellers from '../Components/BestSellers'
import BottomBar from '../Components/BottomBar'

const HomePage = () => {
  return (
        <div>
            <NavBar/>
            <ShopNow/>
            <BestSellers/>
            <BottomBar/>
        </div>
  )
}

export default HomePage