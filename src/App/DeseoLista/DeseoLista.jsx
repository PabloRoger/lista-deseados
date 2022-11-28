import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DeseoLista = function DeseoLista({ deseos }) {
  return (
    <ul className="deseo-lista">
      {deseos.map(({ texto, hecho }, i) => (
        // Con classNames podemos pasarle un objeto con los nombres de las clases
        // En este caso, si hecho es true, se agrega la clase deseo-lista__item--hecho
        // Las keys sirven para que React pueda identificar cada elemento de la lista.
        // Recomendable cuando se hace un map
        <li key={texto} className={classNames('deseo-lista__item', { 'deseo-lista__item--hecho': hecho })}>
          {/* htmlFor es para que el label se asocie al input con el id deseado */}
          <label htmlFor={`deseo${i}`}>
            <input id={`deseo${i}`} type="checkbox" checked={hecho} />
            {texto}
          </label>
        </li>
      ))}
    </ul>
  );
};

DeseoLista.propTypes = {
  deseos: PropTypes.arrayOf(PropTypes.shape({
    texto: PropTypes.string,
    hecho: PropTypes.bool,
  })),
};

DeseoLista.defaultProps = {
  deseos: [],
};

export default DeseoLista;
