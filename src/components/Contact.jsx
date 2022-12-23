import React from 'react'
import img from '../img/imgMarketing_2.jpeg'
import s from '../styles/Contact.module.css'

export default function Contact({searched_destination}) {
  return (
    <div className={s.container}>
    <p>Por favor en el mensaje standar de Whatsapp, te pedimos completar los ... con el destino que quisieras reservar, antes de enviar el mensaje. Muchas gracias</p>
    <button>
      <a href={`https://wa.me/+5493755691854?text=Hola! Estoy interesado en hacer una reserva para el destino ${searched_destination}. Muchas gracias!`}>Hacer Reserva!</a>
    </button>
    <img className={s.contact} src={img} alt='imgMarketing_2'/>
    </div>
  )
}
