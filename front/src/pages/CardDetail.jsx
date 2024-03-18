import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePoster, deletePoster } from '../services/posterServices'; // Importa las funciones de los métodos GET y DELETE.
import ButtonEdit from '../components/ButtonEdit';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonDelete = styled.button`
    background-color: #9C325C;
    border-color: #CEA436;
    border-radius: 6px;
    color:#CEA436;
    width: 91px;
    height: 28px;
    margin-top: 5%;
    margin-bottom: 2%;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    cursor: pointer;
    `;

const CardDetail = () => {
    const { id } = useParams(); // Obtiene el parámetro de la URL llamado 'id'.
    const [poster, setPoster] = useState(null); // Define un estado para almacenar la información del póster.
    const navigate = useNavigate() // Hook para redirigir la navegación a una página concreta.

    useEffect(() => {
        const fetchPosterById = async () => { // Función asíncrona para obtener la información del póster por su ID.
        try {
            const response = await getOnePoster(id); // Petición de espera al método GET de un póster (el id).
            setPoster(response); // Actualiza el estado con la información del póster.
        } catch (error) {
            console.error('Error al cargar los datos del póster:', error);
        }};

        fetchPosterById(); // Llama a la función para obtener el póster cuando el ID cambia.
    }, [id]);

    const clickDelete = async () => { //Función para eliminar un póster.
        try {
            const result = await deletePoster(id); //Petición de espera al método DELETE declarado en posterServices.js.
            navigate("/") //Uso del hook UseNavigate para que la función DeletePoster nos redirija a la Home.
            console.log('Poster eliminado:', result);
        } catch (error) {
            console.error('Error al eliminar el póster:', error);
        }
    };    

    return (
        <>
        {poster && ( // Renderiza los detalles del póster.
            <div className="card-detail">
                <div className="imgcard">
                <img className="card-detail__imageUrl" src={poster.imageUrl}/>
                </div>
                <div className="details">
                <h2 className="card-detail__name">{poster.name}</h2>
                <div className='descriptions'>
                <p className="card-detail__director"><span className='director'>Director:</span> {poster.director}</p>
                <p className="card-detail__year"><span className="year">Año</span>: {poster.year}</p>
                </div>
                <div className='buttons'>
                <ButtonDelete onClick={() => clickDelete(poster.id)} className="button-delete">ELIMINAR</ButtonDelete>
                <ButtonEdit id={poster.id} className="button-edit"> EDITAR</ButtonEdit>
                </div>
                </div>
            </div>
        )}
        </>
    );
};

export default CardDetail;
