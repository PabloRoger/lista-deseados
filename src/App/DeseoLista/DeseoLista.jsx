import React from 'react';
import PropTypes from 'prop-types';
import DeseoItem from '../DeseoItem';

// Cuando pasamos por parámetro algo entre {}, estamos llamando a una propiedad
const DeseoLista = function DeseoLista({ deseos, onDeseosCambiados }) {
  return (
    <ul className="deseo-lista">
      {deseos.map(({ texto, hecho }, i) => (
        <DeseoItem
          texto={texto}
          hecho={hecho}
          id={`deseo${i}`}
          key={texto}
          onItemHecho={(value) => {
            const updateDeseos = [...deseos];
            // Actualizamos el estado del deseo con el valor del checkbox
            updateDeseos[i].hecho = value;
            // Llamamos al callback onDeseosCambiados con el nuevo estado de los deseos
            onDeseosCambiados(updateDeseos);
          }}
        />
      ))}
    </ul>
  );
};

DeseoLista.propTypes = {
  deseos: PropTypes.arrayOf(
    // Como deseos es un array de objetos, le pasamos el shape para definir el objeto
    PropTypes.shape({
      texto: PropTypes.string,
      hecho: PropTypes.bool,
    }),
  ),
  onDeseosCambiados: PropTypes.func,
};

DeseoLista.defaultProps = {
  deseos: [],
  onDeseosCambiados: () => {},
};

export default DeseoLista;
