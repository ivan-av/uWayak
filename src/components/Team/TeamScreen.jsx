import TeamCard from './TeamCard'
import './style/team.css'

const TeamScreen = () => {



  const teamMembers = [
    {
      id: 1,
      name: 'Arely Coria',
      role: 'Publicista',
      photo: 'https://drive.google.com/uc?export=view&id=1fkFRzhxGJjbp0YTKo6fLY3lKUWFD9nAc'
    },
    {
      id: 2,
      name: 'Eduardo Iniestra',
      role: 'Administrador',
      photo: 'https://source.unsplash.com/random/300x295/?cloud'
    },
    {
      id: 3,
      name: 'Itzel Aguilar',
      role: 'Psicóloga',
      photo: 'https://drive.google.com/uc?export=view&id=1jKKOa5d8FPqmy4FfUqvoJhUZRlCwqMwz'
    },
    {
      id: 4,
      name: 'Iván Avila',
      role: 'Programador',
      photo: 'https://drive.google.com/uc?export=view&id=1MVxfisZlZjY2wnCdN1wP8UBHN-7srWSb'
    },
    {
      id: 5,
      name: 'Jair García',
      role: 'Publicista',
      photo: 'https://drive.google.com/uc?export=view&id=1djxDlP7vtkSAewNu8fC0ixn_cKmYEd2w'
    },
    {
      id: 6,
      name: 'Julia Carbajal',
      role: 'Team Lead / Administradora',
      photo: 'https://drive.google.com/uc?export=view&id=1PWztsODD_u9tLlBhW98Vg4xPD1zvxPVT'
    },
    {
      id: 7,
      name: 'Martha Abundiz',
      role: 'Licenciada en Turismo',
      photo: 'https://drive.google.com/uc?export=view&id=1RjzVJQ-e1wSPccsDI9r_fpa7wlTa4B1Y'
    },
    {
      id: 8,
      name: 'Mireya Sánchez',
      role: 'Psicóloga',
      photo: 'https://drive.google.com/uc?export=view&id=1n19DDPGn_VFLjErcC0fsVf7Y9TFTI83P'
    },
    {
      id: 9,
      name: 'Rainier Chavolla',
      role: 'Licenciado en Turismo',
      photo: 'https://drive.google.com/uc?export=view&id=1BHIjvAz16K8Was5okYccLv-6HWnrdsK8'
    },
    {
      id: 10,
      name: 'Ricardo Cruz',
      role: 'Administrador',
      photo: 'https://drive.google.com/uc?export=view&id=1TU2k1lo7D0850Y-fVHFZv5tWTCK5JmJG'
    }
  ]

  return (
    <div className='team'>
      <h2 className='team__title'>Equipo <span className='community__title-subtype'>U - Wayak</span></h2>
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