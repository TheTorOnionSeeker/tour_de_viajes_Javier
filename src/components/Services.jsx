import React, {useEffect, useState} from 'react'

export default function Services() {
    const [services,setServices]=useState([]);

    useEffect(() => {
      fetch('https://my-json-server.typicode.com/TheTorOnionSeeker/Packages/db')
      .then(r=>r.json())
      .then((r)=>setServices(r.packages))
    }, [])

  return (
    <>
    <h1>Servicios ofrecidos en los tours: </h1>
    {services.map(e=><div><p>Servicio: {e.services.map(e=><p>{e}</p>)}</p></div>)}
    </>
  )
}

