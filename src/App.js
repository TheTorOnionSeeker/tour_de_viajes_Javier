import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Nav';
import Home from './components/Home';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Services from './components/Services';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';

function App() {
  const [searched_destination, setSearched_destination]=useState('');

  function onSearch(value) {
    setSearched_destination(value);
  }

  return (
    <div className='App'>
      <Navbar onSearch={onSearch}/>
      <p>Al buscar el nombre del destino en la barra de búsqueda, luego de hacer click en "Buscar", diríjase a la pestaña "Reservas", y haga click sobre "Hacer Reserva!". Su elección quedará guardada cuando se genere el mensaje de contacto!</p>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/booking'} component={Booking} />
      <Route exact path={'/packages'} component={Packages}/>
      <Route exact path={'/services'} component={Services}/>
      <Route exact path={'/gallery'} component={Gallery}/>
      <Route exact path={'/contact'} render={()=><Contact searched_destination={searched_destination}/>}/>
    </div>
  );
}

export default App;
