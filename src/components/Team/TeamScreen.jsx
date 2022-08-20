import TeamCard from './TeamCard'
import './style/team.css'

const TeamScreen = () => {



  const teamMembers = [
    {
      id: 1,
      name: 'Arely Coria',
      role: 'Publicista',
      photo: 'https://source.unsplash.com/random/300x300/?flower'
    },
    {
      id: 2,
      name: 'Eduardo Iniestra',
      role: 'Administrador',
      photo: 'https://source.unsplash.com/random/300x295/?fruit'
    },
    {
      id: 3,
      name: 'Itzel Aguilar',
      role: 'Psicóloga',
      photo: 'https://source.unsplash.com/random/300x305/?flower'
    },
    {
      id: 4,
      name: 'Iván Avila',
      role: 'Programador',
      photo: 'https://previews.dropbox.com/p/thumb/ABrSHpeZKkgDmw_ZDy-pYp-ge_JxpgYg6MiQhxShCtnT6ECdhqaBcdjMS86yZ0d1u8Bbj0C87vfw1NyIggZsElaD-ZoQAnFv4LD0Ne9s10Qh4MuHJwGl7BL81cmaJo8KKlppDfe_dNICrevWFQLXhZmAxge73m996rtSrGZwSeTWyR3xASsk-2TlT-A1xS4tXydnO7tyzqh_-xoENKd26R8MjbVWQ4qY2DY96Xp30l5onLJlPztBQwde1c110euxFbq104Zmo_aBwq2ZrRIAfuGZhLbp-J6-Vu8rtgpaLVZmsdym5Rm9aqzq11YWqWHa3HM2A5WqgWyK4XCwcqEGq_qHFypo5ZIBlPFU_ZoVo33UnYZoiaYkS684iDUNOHC5X_c/p.jpeg'
    },
    {
      id: 5,
      name: 'Jair García',
      role: 'Publicista',
      photo: 'https://source.unsplash.com/random/300x300/?fruit'
    },
    {
      id: 6,
      name: 'Julia Carbajal',
      role: 'Team Lead / Administradora',
      photo: 'https://source.unsplash.com/random/300x295/?flower'
    },
    {
      id: 7,
      name: 'Martha Abundiz',
      role: 'Licenciada en Turismo',
      photo: 'https://source.unsplash.com/random/300x315/?flower'
    },
    {
      id: 8,
      name: 'Mireya Sánchez',
      role: 'Psicóloga',
      photo: 'https://source.unsplash.com/random/300x310/?flower'
    },
    {
      id: 9,
      name: 'Rainier Chavolla',
      role: 'Licenciado en Turismo',
      photo: 'https://drive.google.com/file/d/1pc61Zd-IUDeLMvqBaky4DNHXJUymKjS6/view?usp=sharing'
    },
    {
      id: 10,
      name: 'Ricardo Cruz',
      role: 'Administrador',
      photo: 'https://source.unsplash.com/random/300x310/?fruit'
    }
  ]

  return (
    <div className='team'>
      <h2 className='team__title'>Equipo</h2>
        <div className='team__card-container'>
        {
          teamMembers.map(teamMember => (
            <TeamCard 
            key={teamMember.id}
            teamMember={teamMember}
            />
          ))
        }
        </div>
    </div>
  )
}

export default TeamScreen