//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:5000/api');
    const data = await response.json();
    return data;
}

//Petición GET de un solo objeto

export const getOnePoster = async (id) => {
    const response = await fetch(`http://localhost:5000/api/${id}`);
    const data = await response.json();
    return data;
}

//Petición POST

export const createPoster = async (newPoster) => {

    const result = await fetch(`http://localhost:5000/api`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPoster),
    });
}

//Petición PUT

export const updatePoster = async  (id, editedPoster) => {
    const response = await fetch(`http://localhost:5000/api/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editedPoster),
    })
}

//Petición DELETE

export const deletePoster = async (id) => {
    const result = await fetch(`http://localhost:5000/api/${id}`, {
    method: 'DELETE'});
    return result;
};