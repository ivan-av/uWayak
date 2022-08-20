import React from 'react'

const HomePhotoCard = ({teamMember}) => {

  return (
    <article className='home-photo-card'>
      <header className='home-photo-card__header'>
      <img src={teamMember.photo} alt="Home photo cards" className='team__profile-photo'/>
      </header>
      <div className='home-photo-card__body'>
        <span className='home-photo-card__name'>{teamMember.name}</span>
        <span className='home-photo-card__role'>{teamMember.role}</span>
      </div>
    </article>
  )
}

export default HomePhotoCard