//Petición GET - Read
const url = 'http://localhost:5000/api';

export const getPosters = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
}

//Petición GET de un solo objeto

export const getOnePoster = async (id) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}

//Petición POST

export const createPoster = async (newPoster) => {

    const result = await fetch(`${url}`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPoster),
    });
}

//Petición PUT

export const updatePoster = async  (id, editedPoster) => {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editedPoster),
    })
}

//Petición DELETE

export const deletePoster = async (id) => {
    if(confirm("¿Estás seguro que quieres eliminar este poster?") === true){
    const result = await fetch(`${url}/${id}`, {
    method: 'DELETE'});}
    return result;
};