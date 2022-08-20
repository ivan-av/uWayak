import TeamCard from './TeamCard'
import './style/team.css'

const TeamScreen = () => {



  const teamMembers = [
    {
      id: 1,
      name: 'Arely Coria',
      role: 'Publicista',
      photo: ''
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
      photo: ''
    },
    {
      id: 4,
      name: 'Iván Avila',
      role: 'Programador',
      photo: 'https://previews.dropbox.com/p/thumb/ABpI_9xYVG85CZAwfnMrBsUB1m4L6ZS-LFSfCoYpo9LolIPmZGIga1mEok1iBTtZjF7g9LOQYncOcnIbpvZcPBl7mW7r32J8t1To9jc0ny76u-vxlzkf4lI2GRsdvFEUVYrnJcBk2uE18j_Obe55oe5HgSocpNVhMhTYEEUtY0V7sh6yifFNY2lFVNLlMWo2nmIjfIrCuwageWUbQgzntXOIxCFfotLe8X686ceFPWf6X6ZTHqJewlE889yM2JMFx_qsRDHYhUriTFddBT7IJzMp6zpfnFYBA-s-FTIRISG4dd1tTbC-MckmQBSZhmyun3unrNLnbWfSHI_bp52o1sWw1BPvtOaMYxqT48WoYGn_NZy5mCn23jF8Q0knnVCR8Zs/p.png'
    },
    {
      id: 5,
      name: 'Jair García',
      role: 'Publicista',
      photo: ''
    },
    {
      id: 6,
      name: 'Julia Carbajal',
      role: 'Team Lead / Administradora',
      photo: ''
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
      photo: ''
    },
    {
      id: 10,
      name: 'Ricardo Cruz',
      role: 'Administrador',
      photo: ''
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