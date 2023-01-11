import React from 'react';
import logo1 from '../assets/img/EmpresaLogo/empresa1.svg';
import logo2 from '../assets/img/EmpresaLogo/empresa2.jpg';
import logo3 from '../assets/img/EmpresaLogo/empresa3.png';
import logo4 from '../assets/img/EmpresaLogo/empresa5.jpg';
import logo5 from '../assets/img/EmpresaLogo/empresa6.jpg';
import logo6 from '../assets/img/EmpresaLogo/empresa7.jpg';
import logo7 from '../assets/img/EmpresaLogo/empresa9.png';
import logo8 from '../assets/img/EmpresaLogo/empresa10.png';
import logo9 from '../assets/img/EmpresaLogo/empresa11.png';
import logo10 from '../assets/img/EmpresaLogo/empresa12.jpg';
import logo11 from '../assets/img/EmpresaLogo/empresa13.jpg';



import styles from '../styles/Clientes.module.scss'

const Clientes = () => {
  return (
    <div className={styles.contenedorClientes}>
      <h1>Prueba</h1>
      <div className={styles.contenedorLogos}>
      <Image className={styles.empresalogo} src={logo1} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo2} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo3} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo4} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo5} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo6} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo7} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo8} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo9} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo10} alt="logo"></Image>
      <Image className={styles.empresalogo} src={logo11} alt="logo"></Image>
      
      
      </div>

    </div>
  )
}

export default Clientes