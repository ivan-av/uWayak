import React from 'react'
import HomeCard from './HomeCard'
import HomeHero from './HomeHero'
import './style/homeScreen.css'

const HomeScreen = () => {

  const productCards = [
    {
      id: 1,
      title: 'Recuerda los lugares que visitaste',
      description: '¡Con U Wayak podrás dejar marca en cada lugar que visitaste!'
    },
    {
      id: 2,
      title: '¡Lleva tu wayak siempre contigo!',
      description: 'Ponte en contacto con nosotros y personaliza tu compañera de viaje.'
    },
    {
      id: 3,
      title: '¡Contactanos!',
      description: 'Uno de tus asesores está listo para personalizar tu Wayak'
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