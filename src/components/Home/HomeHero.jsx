import React from 'react'
import protoHeroImg from '../../assets/img/png/proto.jpeg'


const HomeHero = () => {
  return (
    <div className='home-hero'>
      <header className='hero__section'>

        <div className='hero__script-section'>
          <div className='hero__title-home'>
            U - Wayak
          </div>
          <div className='hero__description'>
            Los recuerdos en la memoria podrían borrarse...
            <br></br>
            con <span className='hero-description__logo'>U - Wayak</span> quedarán por siempre
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