import React from 'react'
import imgBoliviaTourDeCompras from '../img/imgBoliviaTourDeCompras.jpeg'
import imgBariloche from '../img/imgBariloche.jpeg'
import imgCamboriu from '../img/imgCamboriu.jpeg'
import imgJujuy from '../img/imgJujuy.jpeg'
import imgMendoza from '../img/imgMendoza.jpeg'
import s from '../styles/Gallery.module.css'
import video1 from '../vid/videoFlorianopolis.mp4'
import video2 from '../vid/videoCamboriu2023_1.mp4'
import video3 from '../vid/videoCamboriu2023_2.mp4'
import video4 from '../vid/videoCamboriu2023_3.mp4'
import video5 from '../vid/videoSanPablo.mp4'
import video6 from '../vid/videoSaladaFlores.mp4'

export default function Gallery() {
    return (
        <>
            <div className={s.gallery}>
                <img className={s.img} src={imgBoliviaTourDeCompras} alt="imgBoliviaTourDeCompras" />
                <video loop autoPlay muted className={s.video}>
                    <source src={video1} type="video/mp4"></source>
                </video >
                <video loop autoPlay muted className={s.video}>
                    <source src={video2} type="video/mp4" ></source>
                </video >
                <video loop autoPlay muted className={s.video}>
                    <source src={video3} type="video/mp4" ></source>
                </video >
                <video loop autoPlay muted className={s.video}>
                    <source src={video4} type="video/mp4" ></source>
                </video >
                <video loop autoPlay muted className={s.video}>
                    <source src={video5} type="video/mp4" ></source>
                </video >
                <video loop autoPlay muted className={s.video}>
                    <source src={video6} type="video/mp4" ></source>
                </video >
                <img className={s.img} src={imgBariloche} alt="imgBariloche" />
                <img className={s.img} src={imgCamboriu} alt="imgCamboriu" />
                <img className={s.img} src={imgJujuy} alt="imgJujuy" />
                <img className={s.img} src={imgMendoza} alt="imgMendoza" />
            </div>
        </>
    )
}
