import React from 'react';
import { useForm } from "react-hook-form";
import { createPoster } from '../services/posterServices'; 
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm(); // Utiliza el hook useForm para manejar el estado del formulario
    const navigate = useNavigate() // Hook para redirigir la navegación a una página concreta.
    const onSubmit = async (newPoster) => { // Define una función asincrónica onSubmit para manejar el envío del formulario.
        await createPoster(newPoster) // Petición de espera a la función createPoster para crear un nuevo póster.
        navigate("/") //Uso del hook UseNavigate para que la función CreateForm nos redirija a la Home.

        //INTENTO DE VALIDACIÓN NO CONSEGUIDO:
        // console.log(response);
        // if ( response.ok ) {
        //     alert('¡Formulario enviado con éxito!');
        //     reset();
        // } else {
        //     alert(error);
        //     console.error('Error al cargar datos');
        // }
    };

    return (
        <div className='formAdd'>
            <div>
                <img src="../src/assets/images/Añade-pelicula.png" className='Add'></img> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
             {/* // Inicia el formulario y llama a la función handleSubmit para manejar el envío del formulario. */}
                <div>
                    <label className='image'>Imagen</label>
                    <input type="url" {...register('imageUrl', { 
                        pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                        required: true 
                    })} />
                     {errors.imageUrl?.type === 'required' && <p className="error-message">Por favor, añada la imagen de película.</p>}
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('name', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  40 
                    })} />
                     {errors.name?.type === 'required' && <p className="error-message">Por favor, añada el nombre de película. </p>}
                </div>
                <div>
                    <label>Director</label>
                    <input type="text" {...register('director', { 
                        pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\.-]+$/,
                        required: true 
                    })} />
                     {errors.director?.type === 'required' && <p className="error-message">Por favor, añada el director.</p>}
                </div>
                <div>
                    <label>Año</label>
                    <input type="text" {...register('year', { 
                        pattern: /^\d{1,4}$/,
                        required: true 
                    })} />
                     {errors.year?.type === 'required' && <p className="error-message">Por favor, añada el año de estreno.</p>}
                </div>
                <input className="buttonAdd" type="submit" value="Añadir" />
            </form>
        </div>
    );
};

export default CreateForm; 