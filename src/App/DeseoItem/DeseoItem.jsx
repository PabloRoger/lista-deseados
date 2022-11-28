import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DeseoItem = function item({
  texto, hecho, id, onItemHecho,
}) {
  return (
    // Con classNames podemos pasarle un objeto con los nombres de las clases
    // En este caso, si hecho es true, se agrega la clase deseo-lista__item--hecho
    // Las keys sirven para que React pueda identificar cada elemento de la lista.
    // Recomendable cuando se hace un map
    <li
      className={classNames('deseo-lista__item', {
        'deseo-lista__item--hecho': hecho,
      })}
    >
      {/* Con evento onChange, llama al callback onItemHecho que recibe el estado del checkbox */}
      <input id={id} checked={hecho} onChange={(e) => onItemHecho(e.target.checked)} type="checkbox" />
      {/* htmlFor es para que el label se asocie al input con el id deseado */}
      <label htmlFor={id}>{texto}</label>
    </li>
  );
};

DeseoItem.propTypes = {
  texto: PropTypes.string,
  hecho: PropTypes.bool,
  id: PropTypes.number,
  onItemHecho: PropTypes.func,
};

DeseoItem.defaultProps = {
  texto: '',
  hecho: false,
  id: 0,
  onItemHecho: () => {},
};

export default DeseoItem;
