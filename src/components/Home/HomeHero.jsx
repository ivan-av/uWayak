import React from 'react'


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
            <img className='hero__image' src="https://images.unsplash.com/photo-1643241011137-0db4c7fc34e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
          </div> 
        </div>
        
      </header>
    </div>
  )
}

export default HomeHero