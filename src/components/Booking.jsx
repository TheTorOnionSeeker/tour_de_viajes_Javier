import React from 'react';
import img from '../img/imgMarketing_2.jpeg'
import s from '../styles/Booking.module.css'

export default function Booking() {
  return (
    <div>
      <img className={s.booking} src={img} />
    </div>
  )
}
