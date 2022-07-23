import React from 'react'
import HomeCard from './HomeCard'
import HomeHero from './HomeHero'
import './style/homeScreen.css'

const HomeScreen = () => {

  const productCards = [
    {
      id: 1,
      title: 'Característica 1',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 2,
      title: 'Característica 2',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 3,
      title: 'Característica 3',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    }
  ]

  return (
    <div className='home'>
      <div className='home__hero__container'>
        <HomeHero />
      </div>
      <div className='home__card-container'>
        {
          productCards.map(productCard => (
            <HomeCard
              key={productCard.id}
              productCard={productCard}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen