import React from 'react';
import styles from '@styles/Footer.module.scss';
import facebook from '../assets/icons/SocialMedia/001-facebook.png';
import email from '../assets/icons/SocialMedia/002-gmail.png';
import whatsapp from '../assets/icons/SocialMedia/003-whatsapp.png';
import Image from 'next/image';
import Link from 'next/link';




const Footer = () => {
  return (
    <footer className={styles['site-footer']}>
      <div className={styles.container}>
        <h1 className={styles.contenedorh1}>Contactanos</h1>
        <div className={styles.redesDeContacto}>
          <a href="https://www.facebook.com/Castell.Asesores"><Image className={styles.icono} src={facebook}alt="facebook" ></Image></a>
          <a href="mailto:gerentedeproyectos@castellasesores.com"><Image className={styles.icono} src={email}alt="email" ></Image> </a>
          <a href="https://wa.me/573108738423"><Image className={styles.icono} src={whatsapp}alt="whatsapp" ></Image></a>
              
                       
              
          
         
          
          
        </div>
      </div>


      <p className={styles['copyright-text']}>Licencia MIT  Diseño por JFAM </p>
         <Link href="#" value="@Julian Andrade."/>   
</footer>
  );
};

export default Footer;