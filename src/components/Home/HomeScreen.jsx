import React from 'react'
import HomeCard from './HomeCard'
import HomeHero from './HomeHero'
import './style/homeScreen.css'

const HomeScreen = () => {

  const productCards = [
    {
      id: 1,
      title: 'Si vas a soñar, sueñá en grande',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 2,
      title: 'Como el calor de casa',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 3,
      title: 'U Wayak! Tu compañera de viaje',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 4,
      title: 'La clave del descanso está en U .... viaja y disfruta.',
      description: 'Excepturi architecto quasi sed omnis tenetur ut beatae quia saepe assumenda, sunt voluptate temporibus doloribus dolorem, quis praesentium, perferendis neque eveniet unde.'
    },
    {
      id: 5,
      title: 'SI VAS A VIAJAR, U WAYAK, DEBES USAR',
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