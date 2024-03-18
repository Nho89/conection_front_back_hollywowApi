import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';


const HomePage = () => {
    const posters = useLoaderData(); // Utiliza el hook useLoaderData() para obtener los datos de los pósters.
    
    return (
    <>
    <div className="main-container">
        <img src='src\assets\images\cartelprincipal.png' className="fotopelis"/>
        <h1 className="title">GALERÍA</h1>
        <section className='card'> 
        <Card posters={posters}/> 
        {/* Renderiza el componente Card y pasa los datos de los pósters como propiedades    */}
        </section>
    </div>
    </>
    )
}

export default HomePage
