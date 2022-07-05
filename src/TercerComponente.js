import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = (props) => {

    console.log(props);
  return (
    <>
      <div>TercerComponente</div>
      <ul>
        <li>{props.nombre}</li>
        <li>{props.apellido}</li>
        <li>{props.ficha.altura}</li>
        <li>{props.ficha.estado}</li>
      </ul>
    </>
  )
  /* 
  export const TercerComponente = (nombre,apellido,ficha) => {

    console.log(props);
  return (
    <>
      <div>TercerComponente</div>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.altura}</li>
        <li>{ficha.estado}</li>
      </ul>
    </>
  )
}*/
}

TercerComponente.propTypes={
  nombre:PropTypes.string.isRequired,//exijo que el dato nombre sea string, y que obligatoriamente me traiga un valor
  apellido:PropTypes.string,
  ficha:PropTypes.object
}

TercerComponente.defaultProps={
  nombre:"Ignacio",
  apellido:"Venegas"
}
