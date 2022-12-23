import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import s from '../styles/Nav.module.css'

export default function Navbar({ onSearch }) {
    return (
        <div className={s.navBar}>
            <div className={s.nav}>
                <label>
                    <NavLink to={'/home'}>Home</NavLink>
                </label>
                {/*<label>
                    <NavLink to={'/booking'}>Reservas</NavLink>
                </label>*/}
                <label>
                    <NavLink to={'/packages'}>Paquetes</NavLink>
                </label>
                <label>
                    <NavLink to={'/services'}>Servicios</NavLink>
                </label>
                <label>
                    <NavLink to={'/gallery'}>Galería</NavLink>
                </label>
                <label>
                    <NavLink to={'/contact'}>Reservas</NavLink>
                </label>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}