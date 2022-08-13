import React from 'react'

const CommunityCard = ({teamMember}) => {

  return (
    <article className='community-card'>
      <header className='community-card__header'>
      <img src={teamMember.photo} alt="Team member" className='community__profile-photo'/>
      </header>
      <div className='community-card__body'>
        <span className='community-card__name'>{teamMember.name}</span>
        <span className='community-card__role'>{teamMember.role}</span>
      </div>
    </article>
  )
}

export default CommunityCard