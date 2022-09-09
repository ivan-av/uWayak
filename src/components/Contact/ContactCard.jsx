import React from 'react'

const ContactCard = () => {
  return (
    <article className='contact-card__container'>
      <p>Correo: uwayak.contacto@gmail.com</p>
      <div className='form-contact__container'>
        <form /*onSubmit={searchLocation}*/ className='form__contact'>
          <input className='input__contact' type="text" placeholder='Nombre' /><br />
          <input className='input__contact' type="text" placeholder='Apellidos' /><br />
          <input className='input__contact' type="text" placeholder='Correo electrónico' /> <br />
          <button className='location-input__button'>Enviar</button>
        </form>
      </div>
    </article>
  )
}

export default ContactCard