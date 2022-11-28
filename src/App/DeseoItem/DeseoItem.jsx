import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DeseoItem = function item({
  texto, hecho, id, onItemHecho,
}) {
  // Funcionalidad para que cada X segundos cambie de color los items
  const [edad, setEdad] = useState(0);
  // UseEffect se ejecuta cada vez que se renderiza el componente
  // Debemos pasarle [props] para que solo se ejecute cuando cambien las props
  useEffect(() => {
    let edadInterval;

    if (hecho) {
      setEdad(0);
    } else {
      edadInterval = setInterval(() => {
        if (hecho) {
          clearInterval(edadInterval);
        }
        setEdad((a) => a + 1);
      }, 1000);
    }

    return () => clearInterval(edadInterval);
  }, [hecho]);

  return (
    // Con classNames podemos pasarle un objeto con los nombres de las clases
    // En este caso, si hecho es true, se agrega la clase deseo-lista__item--hecho
    // Las keys sirven para que React pueda identificar cada elemento de la lista.
    // Recomendable cuando se hace un map
    <li
      className={classNames('deseo-lista__item', {
        'deseo-lista__item--hecho': hecho,
        'deseo-lista__item--warning': edad >= 5 && edad < 10,
        'deseo-lista__item--danger': edad >= 10,
      })}
    >
      {/* Con evento onChange, llama al callback onItemHecho que recibe el estado del checkbox */}
      <input
        id={id}
        checked={hecho}
        onChange={(e) => onItemHecho(e.target.checked)}
        type="checkbox"
      />
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
