import React from 'react'

const HomeCard = ({productCard}) => {

  return (
    <article className='home-card'>
      <header className='home-card__header'>
        <h1 className='home-card__title'>{productCard.title}</h1>
      </header>
      <div className='home-card__body'>
        <p>{productCard.description}</p>
      </div>
    </article>
  )
}

export default HomeCard