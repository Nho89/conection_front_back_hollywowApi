import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/LayoutPublic";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices";
import CreateForm from "../pages/CreateForm";
import UpdateForm from "../pages/UpdateForm";
import CardDetail from "../pages/CardDetail";


export const router = createBrowserRouter([ // Define y exporta la variable router utilizando la función createBrowserRouter.
    {
        path: "/",
        element: <LayoutPublic/>, // Muestra el componente LayoutPublic como elemento principal.
        children: [ // Define las rutas secundarias dentro de la ruta principal.
            {
                path: "/",
                element: <HomePage/>,
                loader: getPosters // Carga los datos de los pósters utilizando la función getPosters.
            },
            {
                path: "/create",
                element: <CreateForm/>
            },
            {
                path: "/update/:id",
                element: <UpdateForm/>
            },
            {
                path: "/card/:id",
                element: <CardDetail />
            }
        ]
    },
]);

export default router;