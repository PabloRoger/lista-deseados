import React, { useState } from 'react';
// Debemos importar PropTypes para poder usar las propiedades de los componentes
import PropTypes from 'prop-types';

const DeseoInput = function deseo({ onNuevoDeseo }) {
  // Los hooks son funciones que nos permiten usar el estado de los componentes
  // Primer elemento del array es el valor del estado y el segundo es una función para modificarlo
  const [nuevoDeseoTexto, setNuevoDeseoTexto] = useState('');
  return (
    <fieldset className="deseo-input">
      <legend className="deseo-input__label">Deseos</legend>
      {/* // El evento onChange se dispara cuando el valor del input cambia */}
      <input
        className="deseo-input__field"
        placeholder="Pon tu deseo aqui"
        value={nuevoDeseoTexto}
        onChange={(e) => setNuevoDeseoTexto(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && nuevoDeseoTexto.length) {
            onNuevoDeseo({ hecho: false, texto: nuevoDeseoTexto });
            setNuevoDeseoTexto('');
          }
        }}
      />
    </fieldset>
  );
};

// Siempre que se use una propiedad, hay que definir su tipo y el caso por defecto
DeseoInput.propTypes = {
  onNuevoDeseo: PropTypes.func,
};

DeseoInput.defaultProps = {
  onNuevoDeseo: () => {},
};

export default DeseoInput;
