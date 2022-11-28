import React from 'react';
import './App.css';

import DeseoInput from './DeseoInput';
import DeseoLista from './DeseoLista';

const deseos = [
  { texto: 'Saltar de un puente', hecho: false },
  { texto: 'Comer un helado', hecho: false },
  { texto: 'Dominar el mundo', hecho: true },
];

const App = function app() {
  return (
    <div className="app">
      <h1>Mi lista de deseados</h1>
      <DeseoInput />
      <DeseoLista deseos={deseos} />
      <button className="deseo-limpiar" type="button">Archivar</button>
    </div>
  );
};

export default App;
