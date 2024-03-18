import Poster from "../models/PosterModel.js"

//GET
export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.findAll()
    response.status(200).json(posters);
}
catch(error){
    response.status(500).json({message: error.message})
}

}

//GET BY ID

export const getPosterById = async  (request,response)=>{
    try {
        const poster = await Poster.findOne({
            where: { id : request.params.id}
        });
            response.status(200).json(poster);
        
    } 
    catch (error) {
        response.status(500).json({message: error.message})
    }

}

//DELETE
export const deletePoster = async (request, response) => {
    try {
        await Poster.destroy({
            where: { id : request.params.id}
        })
        const deletedPoster = await Poster.findOne({
            where: { id: request.params.id}
        });  
        if (deletedPoster === null) {
            response.status(200).json({
                poster: true,
                message: 'Se elimino correctamente'
            });
            return;
        }
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

//POST

export const createPoster = async(request,response)=>{
     
    try {
        const createdPoster = await  Poster.create(request.body)
        
        response.status(201).json({
            poster: createdPoster,
            message:"El poster se creo con éxito",
        });
        
        
    } catch (error) {

        response.status(500).json({message: error.message})
    }
} 


//UPDATE

export  const updatePoster=async (request,response)=> {
    try {
        await Poster.update(request.body
            
        ,{where:{ id: request.params.id}}  
        );
        const putPoster = await Poster.findOne({
            where: { id: request.params.id}
        });  

        response.status(200).json({
            poster: putPoster,
            message:"Se actualizó el poster correctamente"
        });
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}