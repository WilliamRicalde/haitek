/* eslint-disable no-undef */
import { useState } from 'react'
import style from '../styles/ContactForm.module.css'

export default function Contact () {
  const [data, setData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    contenido: '',
    fecha: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, fecha: new Date().toISOString().substring(0, 10) })
  }

  const sendForm = e => {
    e.preventDefault()

    const api = `${process.env.NEXT_PUBLIC_API_URI}contactos`

    fetch(api, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      document.getElementById('form').reset()
      console.log(res)
    })
      .catch(e => console.log(e))
  }

  return (
    <section className={style.main} id='contacto'>
      <h1>Contactanos</h1>
      <div>
        <form id='form' autoComplete='off' onSubmit={sendForm} className={style.form}>
          <input type='text' placeholder='Nombre' name='nombre' onChange={handleChange} />
          <input type='number' placeholder='Telefono' name='telefono' onChange={handleChange} />
          <input type='email' placeholder='Correo Electronico' name='email' onChange={handleChange} />
          <textarea cols='10' rows='5' placeholder='Mensaje' name='contenido' onChange={handleChange} />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </section>
  )
}
