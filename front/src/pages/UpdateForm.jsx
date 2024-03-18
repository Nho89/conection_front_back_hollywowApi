import { useState, useEffect }  from 'react';
import { useForm } from "react-hook-form";
import { updatePoster, getOnePoster } from '../services/posterServices'; /// Importa las funciones que serán asíncronas para actualizar y obtener datos de un póster.
import { useParams} from 'react-router';
import { useNavigate } from 'react-router-dom';

const UpdateForm = () => {  //// Define el componente que renderizará el formulario para actualizar un póster.
    const {id} = useParams(); // Hook para obtener la id del póster de la URL.
    const { register, handleSubmit, reset, setValue, watch } = useForm(); // Hook para obtener funciones y estados relacionados con el formulario.
    const navigate = useNavigate() // Hook para navegar a otra página de la aplicación.
    const [loading, setLoading] = useState(false); // Inicializa el estado 'loading' en false para controlar el indicador de carga de operaciones asincrónicas.
    const [posterData, setPosterData] = useState(); // Define un estado 'posterData' para almacenar los datos del póster que se van a actualizar.

    // Utiliza el hook 'useEffect' para cargar los datos del póster cuando el componente se monta o cuando la id cambia.
    useEffect(() => {
        const fetchData  = async () => {
            const posterData = await getOnePoster(id); //Espera a la petición fetch de cargar  los datos de un póster (por su id)
            setPosterData(posterData); //Actualiza el estado del componente con los datos del póster obtenidos.

            // Establece los valores iniciales del formulario con los datos del póster concreto.
            setValue('imageUrl', posterData.imageUrl),
            setValue('name', posterData.name),
            setValue('director', posterData.director),
            setValue('year', posterData.year)
        };

        // Ejecuta la función fetchData para cargar datos iniciales basados en 'id' y 'setValue'.
        fetchData();
    }, [id, setValue])

    
    // Define la función 'onSubmit' que se ejecutará cuando el formulario se envíe.
    const onSubmit = async (editedPoster) => {
        console.log('Póster editado:', editedPoster); // Muestra en consola el póster editado.
        setLoading(true); // Indica que la operación de actualización está en curso.
        try {
            // Llama a la función 'updatePoster' para actualizar los datos del póster.
            await updatePoster(id, editedPoster);
            // Muestra un mensaje de éxito y navega a la página del póster actualizado.
            alert('¡Los datos del elemento han sido actualizados correctamente!'); // Muestra un mensaje de éxito.
            navigate(`/card/${id}`)  //Navega a la página del póster actualizado.
        } catch (error) {
            // Muestra un mensaje de error en caso de que falle la actualización.
            console.error('Error al actualizar el póster:', error);
        } finally {
            setLoading(false); // Indica que la operación de actualización ha finalizado.
        }
    };
    
    // Devuelve el JSX que representa el formulario en el DOM.
    return (
        <div className="editForm">
            <div>
                <img src="../src/assets/images/edita.png" className='Edit'></img> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Imagen</label>
                    <input type="url" {...register('imageUrl', { required: true })} />
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('name', { required: true, maxLength:  40 })} />
                </div>
                <div>
                    <label>Director</label>
                    <input type="text" {...register('director', { required: true })} />
                </div>
                <div>
                    <label>Año</label>
                    <input type="text" {...register('year', { required: true })} />
                </div>
                <input className="EditPosterButton" type="submit" value="Editar" />
            </form>
        </div>
    );
};

export default UpdateForm;