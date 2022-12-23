import React from 'react';
import video from '../vid/videoComponenteHome.mp4';
import s from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <div className={s.videocontainer}>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/YFES8Nm6uF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      < video loop autoPlay className={s.fillWidth}>
        <source src={video} type="video/mp4" ></source>
      </video >
    </div>
    <footer>Copyright 2022 Tour de Viajes Javier</footer>
    </>
  )
}
