import React from 'react';
import s from '../styles/Card.module.css';

export default function Card({destination,price,services,activities,duration, id, onClose}) {
  return (
    <>
    <div className={s.general}>
        <button onClick={()=>onClose(id)} className={s.button}>X</button>
        <h3>Destino: {destination}</h3>
        <div className={s.content}>
            <p>Precio: {price}</p>
            <div>
            <p>Servicios: {services.map(e=><p>* {e}</p>)}</p>
            </div>
            <p>Actividades: {activities.Excursiones.map(e=><p>* {e}</p>)}</p>
            <p>Duration: {duration}</p>
        </div>
    </div>
    </>
  )
}
