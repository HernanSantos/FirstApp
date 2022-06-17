
export const getImagen = async() => {

    try {

        const apiKey = 'mcC6RSd7K1JhtegJV0djjZH2j77HEAP7';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.log(error)
        return "no se encontro la imagen";
    }
    
    
    
}

getImagen();



