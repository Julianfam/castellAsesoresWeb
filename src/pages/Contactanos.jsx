// import React from 'react'

// const Contactanos = () => {
//   return (
//     <div>
//       <form action="">
//         <button>acá va un formulario</button>
//       </form>
//     </div>
//   )
// }

// export default Contactanos

import React from 'react'
import { useState } from 'react'
import styles from '../styles/Contactanos.module.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  }
  return (
    <div className={styles.formContainer}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input
            className={styles.formInput}
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Number:
          <input
            className={styles.formInput}
            type="text"
            value={number}
            onChange={event => setNumber(event.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            className={styles.formInput}
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Contact via WhatsApp:
          <input
            className={styles.formInput}
            type="checkbox"
            checked={whatsapp}
            onChange={() => setWhatsapp(!whatsapp)}
          />
        </label>
        <input className={styles.formSubmit} type="submit" value="Submit"action="mailto:julifeli123@gmail.com" />
      </form>
    </div>
  )
}

export default Contact