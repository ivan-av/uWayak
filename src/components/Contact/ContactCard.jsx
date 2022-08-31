import React from 'react'

const ContactCard = () => {
  return (
    <article className='contact-card__container'>
      <h2 className='contact-card__message'>Contacto</h2>
      <p>Correo: uwayak.contacto@gmail.com</p>
      <form /*onSubmit={searchLocation}*/ className='input__contact'>
        <input type="text" placeholder='Nombre'/><br />
        <input type="text" placeholder='Apellidos'/><br/>
        <input type="text" placeholder='Correo electrónico'/> <br />
        <button className='location-input__button'>Enviar</button>
      </form>
    </article>
  )
}

export default ContactCard