import React from 'react';
import classNames from 'classnames';
import './estilos.css';

const deseos = [
  { texto: 'Saltar de un puente', hecho: false },
  { texto: 'Comer un helado', hecho: false },
  { texto: 'Dominar el mundo', hecho: true },
];

const App = function app() {
  return (
    <div className="app">
      <h1>Mi lista de deseados</h1>
      <fieldset className="deseo-input">
        <legend className="deseo-input__label">Deseos</legend>
        <input className="deseo-input__field" placeholder="Pon tu deseo aqui" />
      </fieldset>

      <ul className="deseo-lista">
        {deseos.map(({ texto, hecho }, i) => (
          // Con classNames podemos pasarle un objeto con los nombres de las clases
          // En este caso, si hecho es true, se agrega la clase deseo-lista__item--hecho
          <li key={texto} className={classNames('deseo-lista__item', { 'deseo-lista__item--hecho': hecho })}>
            {/* htmlFor es para que el label se asocie al input con el id deseado */}
            <label htmlFor={`deseo${i}`}>
              <input id={`deseo${i}`} type="checkbox" checked={hecho} />
              {texto}
            </label>
          </li>
        ))}
      </ul>

      <button className="deseo-limpiar" type="button">Archivar</button>
    </div>
  );
};

export default App;
