import React from 'react';
import Image from 'next/image';
import styles from '@styles/SobreNosotros.module.scss';


import imagenIzquierda from '../assets/img/construction-2578410_1920.jpg';


const SobreNosotros = () => {
  return (
    <>
    <section className={styles.contenedorNosotros}>
      <div className={styles.contenedorImagen}>
        <Image className={styles.imagenIzq} src={imagenIzquierda} alt="imagen de constructores"></Image>
      </div>

      <div className={styles.contenedorTexto}>
        <h1>Quienes somos</h1>
        <p>Somos una empresa colombiana con más de 7 años de experiencia en la formulación e implementación de sistemas de gestión y en servicios profesionales. Estamos comprometidos con el desarrollo empresarial y financiero de nuestros clientes, proporcionando soluciones integrales y efectivas en consultoría, asesoría, auditoria, contabilidad y gestión humana, que brinden valor a las organizaciones.</p>
      </div>
    </section>
    </>
  );
};

export default SobreNosotros;