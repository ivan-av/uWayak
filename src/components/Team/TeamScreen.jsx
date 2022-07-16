import TeamCard from './TeamCard'
import React from 'react'
import './style/team.css'

const TeamScreen = () => {

  return (
    <div className='team'>
      <h2 className='team__title'>Equipo</h2>
      <div className='team__container'>
            <TeamCard />
      </div>
    </div>
  )
}

export default TeamScreen