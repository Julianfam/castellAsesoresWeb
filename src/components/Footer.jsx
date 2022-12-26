import React from 'react';
import styles from '@styles/Footer.module.scss';
//import facebook from '../assets/icons/Social Media/003-facebook-1.png';
//import email from '../assets/icons/Social Media/010-gmail.png';
//import whatsapp from '../assets/icons/Social Media/006-whatsapp.png';
//import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className={styles['site-footer']}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles['col-sm-12']}${styles['col-md-6']}`}>
            <h6>About</h6>
            <p className={styles['text-justify']}>Julian Andrade React Store On Production <i>CODE WANTS TO BE SIMPLE</i></p>
          </div> 

          <div className={`${styles['col-xs-6']} ${styles['col-md-3']}`}>
            <h6>Categories</h6>
            <ul className={styles['footer-links']}>
              <li><Link href="/" value="Todos"/>Todos</li>
              <li><Link href="/" value="Diademas Gamer"/></li>
              <li><Link href="/" value="tros"/></li>
              <li><Link href="/" value="Contacto"/></li>
              <li><Link href="/" value="Soporte"/></li>
              <li><Link href="/" value="Terminos y Condiciones"/></li>

            </ul>
          </div>

          <div className={`${styles['col-xs-6']} ${styles['col-md-3']}`}>
            <h6>Quick Links</h6>
            <ul className={styles['footer-links']}>
              <li><Link href="" value="My account"/></li>
              <li><Link href="" value="Guias de Usuario"/></li>
              <li><Link href="" value="Sistema de Vendedores"/></li>
              <li><Link href="" value="Politicas de privacidad"/></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className={styles['container']}>
        <div className={styles.row}>
          <div className={`${styles['col-md-8']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
          
          </div>

          <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
            <ul className={styles['social-icons']}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>   
            </ul>
          </div>
          
          
        </div>
      </div>
      <p className={styles['copyright-text']}>Copyright  2022 Todos los Derechos reservados  
         <Link href="#" value="@Julian Andrade."/>   

            </p>
</footer>
  );
};

export default Footer;