import TeamCard from './TeamCard'
import './style/team.css'

const TeamScreen = () => {



  const teamMembers = [
    {
      id: 1,
      name: 'Arely Coria',
      role: 'Publicista',
      photo: 'https://previews.dropbox.com/p/thumb/ABpxZpSiuzA_U5wUwS02IhGG07JWYqDVHHSAwKxQQEFQHbynH4KPj6wDyA4zQa0F6OXxuCEaLWi2wPxx51atrtLIQ5Vaka1CYHiQ8QEe-oNSl0rAS03mzpeByZNV36MNqzoKm9B2Fbl4E0EuEJdClN3NAGGyZQF-vYzoKHdL1ZgUXXjbo1K8u-flFe2urPra1md3ULDhJiyWBv1MnTGF0nfAn4F2pINJVeLzM5ju7bTFvZ5cei4hwI9NN7fatGVmgv0I3JeOR5cHF9rsFbCgmDvDhv_G_y8prGH7i-VbCidBc8KJ5R4e8iV50F2zk1piSJljZBcDf2GUHV1zbl1ZHqVLHB__mz2VXBAZDqf07o1qnOtiy5sQNxGRIbxsIwKG56k/p.png'
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
      photo: 'https://previews.dropbox.com/p/thumb/ABowFr6lsTcIZlZ1jT4U1c31WoxhDVowoEE96HuiVAypwfePV3pa8g99_WpXg0pmozkJUqdluHLFGft726ufumgTK1Cs3lT1k2T0drLszocDRe39k7QLqno1Ai3ZZvhk1zxBq6IS2mmTUgL3uvs82rAg5GezuczldNXWi0pwL02sUlTmlHePK79HLIh9vJYcOIZLWgPEYrQj0AcDxHGJoxOY0FGymRcnm4k7LR0bpaXdTUQvmwPE3zI5RMIV9sSU3hcVnLNYPBBIyNdF0D-x2i9ddUw8WKd6ZhBfI3POsXmLw_2mv82KhyH249PAg775aJQjcRhxRzOShDdQ7BzrWzbtKMoxoGi7r38JCxgNYPTdLy6ptKlqPDoSYXUHLHwzRx4/p.png'
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
      photo: 'https://previews.dropbox.com/p/thumb/ABo440OmjJrxqX9bZ2mYv8M13Zp9ihGA1QKna8oAVd-VenEdPz-tw_9M2fpaUExwu5nGvQTJUuSWr-hlnfDxmzV3IGbQKZM2GxZmSZDXTGCnQBJ_QkN8mNDN3Vxj4RysBi_ZBfXkB7uzh04BUMQ_peQBm5T0YpBkG57KiX-Ks8tAeFndLC9Q-vQRMuvzr0txUlAYkdRlnVipzOaF0sxY05m1cpV-K6KDr3wgLtCXOjQ5xW2fpJWdSWLZe3JDvx34JxyI90eJhc0EQ14nkjqo0pKPlbeqHNs9BxEgCJJIPySAmF6F85GYyCpkw9X_cznApERt1Emsz3TkKAau3hq4XVZJFCxVtPFBcbwOcHJqn5M810-KZFFHRIJ_AxzC2b8V5h0/p.png'
    },
    {
      id: 6,
      name: 'Julia Carbajal',
      role: 'Team Lead / Administradora',
      photo: 'https://previews.dropbox.com/p/thumb/ABogM7LTBWZMlTGPQO9sxp_B2D1q1-TDS8ScxYOKGl8RuXXsZx3kQP6HXBAJP9SqTz8FsWENRhi4psz4xvahJmvWxX1lpqLe2-G_H0YNr3AtfZGX9XebznL6Nf60xrWgXyQmCk3Hz771_5YsbQ633DjqgjUSipjvYtr8_wHOIT4_ESb-NAl-U4RdLIik_lQGkoGMGRVb5C7p-Hi5VoV3oxcONI4sv3y9QQ6WhYFuyyrOWbyxOTw2mCs97jAlDCHwd-PAY4qQhsAt597VJWV36NfqDdet3D2qbULeJ4BN0bE-bGZzKLJB0RItw4e1ws6hVLMCGTHxR6lYZ1RnIZSUfeZz8kvVelyO3gTpSs61s0yP8DPrKzusBtjiSP4ZoA9kBww/p.png'
    },
    {
      id: 7,
      name: 'Martha Abundiz',
      role: 'Licenciada en Turismo',
      photo: 'https://source.unsplash.com/random/300x315/?cloud'
    },
    {
      id: 8,
      name: 'Mireya Sánchez',
      role: 'Psicóloga',
      photo: 'https://source.unsplash.com/random/300x310/?cloud'
    },
    {
      id: 9,
      name: 'Rainier Chavolla',
      role: 'Licenciado en Turismo',
      photo: 'https://previews.dropbox.com/p/thumb/ABoXz99xVjDEVA9a4bz7kdKjlu-ml3UZs0yQ4tmwpOGrL5yFLN-RkpcXVd-lGiXQjWuxkDNzBsqBlFvAi1AaNIIoulCVSv9DNzN7m_prhq-3G66Kjc8MOKCkRM1qoXVX6XmHOTIjUpdc_9nbh9mGmPSoIvTbiQFNc-iRTHGc72uMaxI5_Cjc8Yk2lgvChf5AeBY8SqYmNXwLgb5766oKllpuy0BpI-F0pTf0_BWeCDpVtf2nNK-0lSm0V2-HPQWbaHFPnGO2MyhYl5NT7dJzdXoqdryhRp-vxO5YQAZ1oIsWOyc19RvNDOrGegLx6mG0ThvRYT8lMSveD5AUn2AZayVCKwJP62f-9gSD9L0WXq6LSSeZY-tzmpo4qvGJfhOL8bI/p.png'
    },
    {
      id: 10,
      name: 'Ricardo Cruz',
      role: 'Administrador',
      photo: 'https://previews.dropbox.com/p/thumb/ABp9VxDjaI2H5ZHpA22gASK-ztfi4p908122Jnahz6tPL_m3srS2N4AtMOe8CZ3-aqeb9dOZZ0g-rCW0yXM9Fe2Rt3jhKEU8zfzFG5zEa04A4wU2qz8RNiVEzi6nFFpotglaDN9x7NncLel_SKpf1mWNAL7XXnYDFwGocPWJWJi9PBEbnOmZbVtn3s6wakkhwN0GWbUYS0WO_b7YWmdOnaJoLaJU88IxJAEzfQq9FVbZlrchZv3zT147Z3fKN1h4c4ESRclKT53x6K8stL4TXFq7i-vFQJPUubsXo_RtCCqVrdNrNLR6IgMoR9h7EjLEyfT0iOwbp3q64yGZe7uj6In3JIm9rgLs5kIlyvov-aBYh35cun4Hmgez4wIcgPmwLFs/p.png'
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