import React from 'react';
import styles from '../styles/Contactanos.module.scss';

const Contactanos = () => {
  return (
    <>
    
    <section className={styles.formulario}>
    <h1> Contactanos</h1>
      <form className={styles.formFormulario} action="mailto:gerentedeproyectos@castellasesores.com;" method="post" enctype="text/plain" 
        onsubmit="return sendForm()">
          <label htmlFor="name">Nombre</label><br/>
          <input type="text" id="name" name="name"/><br/>
          <label htmlFor="number">Numero de contacto</label><br/>
          <input type="text" id="number" name="number"/><br/>
          <label htmlFor="mail">Escribe tu mensaje:</label><br/>
          <input className={styles.inputMensaje} type="text" id="mail" name="mail"/><br/><br/>
        <input type="submit" value="Enviar" id="submit-button"/>
      </form>
    </section>
    </>
  );
};

export default Contactanos;