import React, { useState } from 'react';
import s from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState('');
  return (
    <form className={s.search} onSubmit={(e) => {
      e.preventDefault();
      console.log(destination);
      onSearch(destination);
      setDestination('');
    }}>
      <input
        className={s.input} id='inputSearch'
        type="text"
        placeholder=" Destino..."
        value={destination}
        onChange={e => setDestination(e.target.value)}
      />
      <input className={s.button} type="submit" value="Buscar" />
    </form>
  )
}