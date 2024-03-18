//ButtonDetail de la Card que redirige a la página de CardDetail (página de detalle de un póster).

import React from 'react'
import '../components/ButtonDetail.css'
import { Link } from 'react-router-dom'

const ButtonDetail = ({id}) => {
  return (
    <Link to= {`/card/${id}`} className="button-detail">+INFO</Link>
  );
};

export default ButtonDetail;