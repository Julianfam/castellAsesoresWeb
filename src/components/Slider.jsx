import React from 'react';
import logo from '../assets/logos/logo_castell.svg';
import Image from 'next/image';

import styles from '@styles/Slider.module.scss';
// import img1 from '../assets/img/image-1.jpg';
// import img2 from '../assets/img/image-2.jpg';
// import img3 from '../assets/img/image-3.jpg';
import Head from 'next/head';





const Slider = () => {


  return (
    <>
    <Head>
			<title>
			 Castell Asesores
			</title>
		</Head>
        <section className={styles.contenedorGlobal}>
          <section className={styles.contenedorImagenes}>
                <div className={styles.imagenSlider}>
                  <div className={styles.contenedorTextoImagen1}>
                      <Image src={logo} alt="logo"></Image>
                      <h1> Nuestro compromiso es proveer la mejor solución</h1>
                      <p>Somos una empresa con responsabilidad social, al servicio de nuestros clientes,    orientandolos con conocimiento, experiencia y vivencias en consultorías, asesorías, auditorías y formación en sistemas de gestión con criterio técnico, profesional, ético y moral.</p>
                  </div>
                </div>
          </section>
        <section className={styles.contenedorTexto}>
                
            <div className={styles.imagenSlider4}>
                <div className={styles.contenedorTexto2}>
                  <div className={styles.texto}>
                      <h1> Recursos Humanos</h1>
        
                      <ul>
                         <li>Afiliaciones a <b>seguridad Social</b></li>                         
                        <li><b>Nomina</b></li>  
                        <li> <b>Capacitaciones</b></li>
                        <li>Bateria de riesgo <b> psicosocial</b></li>  
                        <li><b>Clima</b> organizacional </li>    
                        <li><b>Cultura</b> organizacional</li>  
                        <li><b>Bienestar</b> organizacional </li>   
                        
                      </ul>
                  </div>
                  <div className={styles.texto}>
                      <h1> Sistemas de Gestión</h1>
                      
                      <ul>  
                        <li>Sistema De Gestión De Seguridad Y Salud en El Trabajo</li>                       
                        <li><b>Auditorias Empresariales</b></li>  
                        <li>Sistema De  <b>Gestión De Calidad</b></li>
                        <li>Sistema De   <b>Gestión Ambiental</b></li>  
                        <li>Sistema De Seguridad De La Información</li>    
                        <li>Norma Internacional <b>BASC</b></li>  
                        <li><b>Capacitaciones</b> Manejo Operativo Y Administrativo Empresarial </li>   
                        <li><b>Estructuración</b> Organizacional</li>
                      </ul>
                  </div>
                  <div className={styles.texto}>
                      <h1> Contabilidad</h1>
                     
                      <ul>                        
                        <li className={styles.contabilidad}>Programas <b>contables</b></li>  
                        <li className={styles.contabilidad}>Declaración de <b>renta</b></li>
                        <li className={styles.contabilidad}><b>Asesorías</b>  contables</li>  
                        <li className={styles.contabilidad}>Elaboración de <b>estados financieros</b></li>    
                        
                      </ul>
                  </div>
                </div>     
            </div>
          </section>
          
      </section>
     
    </>
    
  );
};

export default Slider;



