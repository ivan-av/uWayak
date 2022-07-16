import React from 'react'
import HomeCard from './HomeCard'
import HomeHero from './HomeHero'
import './style/homeScreen.css'

const HomeScreen = () => {

  return (
    <div className='home'>
      <div className='home__hero__container'>
        <HomeHero />
      </div>
      <div className='home__card-container'>
        <HomeCard />
      </div>
    </div>
  )
}

export default HomeScreen