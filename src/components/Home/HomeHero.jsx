import React from 'react'
import protoHeroImg from '../../assets/img/png/proto.jfif'


const HomeHero = () => {
  return (
    <div className='home-hero'>
      <header className='hero__section'>

        <div className='hero__script-section'>
          <div className='hero__title'>
            U - blanket
          </div>
          <div className='hero__description'>
            Slogan, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat necessitatibus dicta nobis modi aperiam tempora incidunt unde quae laborum voluptas itaque voluptates, harum eaque maxime vitae, eum, magni in!
          </div>
        </div>

        <div className='hero__image-section'>
          <div className='hero__image-container'>
            <img className='hero__image' src={protoHeroImg} alt="" />
          </div> 
        </div>
        
      </header>
    </div>
  )
}

export default HomeHero