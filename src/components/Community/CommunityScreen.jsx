import CommunityCard from './CommunityCard'
import './style/community.css'

const CommunityScreen = () => {


  const teamMembers = [
    {
      id: 1,
      name: 'Test 1',
      role: 'Description 1',
      photo: 'https://source.unsplash.com/random/300x300/?cat'
    },
    {
      id: 2,
      name: 'Test 2',
      role: 'Description 2',
      photo: 'https://source.unsplash.com/random/300x295/?dog'
    },
    {
      id: 3,
      name: 'Test 3',
      role: 'Description 3',
      photo: 'https://source.unsplash.com/random/300x305/?cat'
    },
    {
      id: 4,
      name: 'Test 4',
      role: 'Description 4',
      photo: 'https://source.unsplash.com/random/300x315/?dog'
    },
    {
      id: 5,
      name: 'Test 5',
      role: 'Description 5',
      photo: 'https://source.unsplash.com/random/300x300/?dog'
    },
    {
      id: 6,
      name: 'Test 6',
      role: 'Description 6',
      photo: 'https://source.unsplash.com/random/300x295/?cat'
    },
    {
      id: 7,
      name: 'Test 7',
      role: 'Description 7',
      photo: 'https://source.unsplash.com/random/300x315/?cat'
    },
    {
      id: 8,
      name: 'Test 8',
      role: 'Description 8',
      photo: 'https://source.unsplash.com/random/300x310/?cat'
    },
    {
      id: 9,
      name: 'Test 9',
      role: 'Description 9',
      photo: 'https://source.unsplash.com/random/300x305/?dog'
    },
    {
      id: 10,
      name: 'Test 10',
      role: 'Description 10',
      photo: 'https://source.unsplash.com/random/300x310/?dog'
    }
  ]

  return (
    <div className='community'>
      <h2 className='community__title'>Comunidad <span className='community__title-subtype'>U - Wayak</span> (en desarrollo)</h2>
        <div className='community__card-container'>
        {
          teamMembers.map(teamMember => (
            <CommunityCard 
            key={teamMember.id}
            teamMember={teamMember}
            />
          ))
        }
        </div>
    </div>
  )
}

export default CommunityScreen