import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '@styles/Contactanos.module.scss';

const Contactanos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j5lqnko', 'template_yw4k8sa', form.current, 'D4kSSt11Tl68QzhCs')
      .then((result) => {
          alert('Mensaje-enviado');
          console.log(result.text);
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <div className={styles.formulario} >
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formularioseccion}>
                <div className={styles.label}><label htmlFor="name">Name</label></div>
                
                <input type="text" name="user_name" id="name" />
          </div>
              
          <div className={styles.formularioseccion}>
          <div className={styles.label}><label htmlFor="email">Email</label></div>
              <input type="email" name="user_email" id="email" />
          </div>
              
          <div className={styles.formularioseccion}>
          <div className={styles.label}><label htmlFor="text">Message</label></div>
              <textarea className={styles.text} name="message" id="text"  />
              <div className={styles.input}>
                <input type="submit" value="Send" />
              </div>
              
          </div>
              
              
            </form>
    </div>
    
  );
};

export default Contactanos;