import React from "react";
import ContactCard from "./ContactCard";
import ContactHero from "./ContactHero";
import './style/contactScreen.css'

const ContactScreen = () => {


  return (
    <div className="contact">
      <div className='contact__hero'>
        <ContactHero />
      </div>

      <div className='contact__container'>
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactScreen;
