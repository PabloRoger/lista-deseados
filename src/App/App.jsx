import React, { useState } from 'react';
import './App.css';

import DeseoInput from './DeseoInput';
import DeseoLista from './DeseoLista';

const inicialesDeseos = [
  { texto: 'Saltar de un puente', hecho: false },
  { texto: 'Comer un helado', hecho: false },
  { texto: 'Dominar el mundo', hecho: true },
];

const App = function app() {
  const [deseos, setDeseos] = useState(inicialesDeseos);
  return (
    <div className="app">
      <h1>Mi lista de deseados</h1>
      <DeseoInput onNuevoDeseo={(deseo) => setDeseos([deseo, ...deseos])} />
      {/* el valor de onDeseosCambiados es una función que recibe un array de deseos */}
      <DeseoLista deseos={deseos} onDeseosCambiados={setDeseos} />
      {/* Con el onclick seleccionamos el array de deseos que tenemos en lista(setDeseos)
      y filtramos esos deseos (deseos.filter) para solo aparezcan en pantalla
      los deseos del array (setDeseos) que no están hechos !deseos.hecho */}
      <button
        className="deseo-limpiar"
        type="button"
        onClick={() => setDeseos(deseos.filter((deseo) => !deseo.hecho))}
      >
        Archivar
      </button>
    </div>
  );
};

export default App;
