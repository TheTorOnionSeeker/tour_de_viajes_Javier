import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';
import s from '../styles/Packages.module.css';

export default function Packages() {

    const [packages,setPackages]=useState([]);

    useEffect(() => {
      fetch('https://my-json-server.typicode.com/TheTorOnionSeeker/Packages/db')
      .then(r=>r.json())
      .then((r)=>setPackages(r.packages))
    }, [])

    function onClose(id){
        setPackages(packages.filter(e=>e.id!==id))
    }
    
    return (
        <>
            <div className={s.cards}>
                {
                    packages.map((e)=><Card destination={e.destination} price={e.price} services={e.services} activities={e.activities} duration={e.duration} id={e.id} onClose={onClose} key={e.id} />)
                }
            {/* Paquete que falta en bbdd */}
            {/* {
            "destination":"Mendoza",
            "price":"$65900",
            "services":["Bus coche cama","Hotel Bechia Roma media pensión"],
            "activities":{"Excursiones":["City Tour Ciudad de Mendoza", "Bodegas","Fábrica de chocolates", "Guía permanente", "Opcionales: Altas Montañas, San Rafael, Cañón de Atuel, Termas de Cacheuta"]},
            "duration":"Ocho días, cinco noches",
            "id":"6"
           } */}
            </div>
        </>
    )
}
