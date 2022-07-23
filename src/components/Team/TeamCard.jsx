import React from 'react'

const TeamCard = ({teamMember}) => {

  return (
    <article className='team-card'>
      <header className='team-card__header'>
      <img src={teamMember.photo} alt="Team member" className='team__profile-photo'/>
      </header>
      <div className='team-card__body'>
        <span className='team-card__name'>{teamMember.name}</span>
        <span className='team-card__role'>{teamMember.role}</span>
      </div>
    </article>
  )
}

export default TeamCard