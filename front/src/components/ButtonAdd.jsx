//ButtonAdd de la Nav que redirige a la página de CreateForm (formulario de añadir póster).

import React from 'react';
import './ButtonAdd.css';
import { Link } from 'react-router-dom';

const ButtonAdd = () => {
  return (
    <Link to="/create" className="button-add">Añadir póster</Link>
  )
}

export default ButtonAdd;