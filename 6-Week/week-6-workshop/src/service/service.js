import axios from 'axios'


export const getGiphys = async (search) => {
    const data = await axios(`http://api.giphy.com/v1/gifs/search?q=${search}&limit=24&api_key=S9vNq2WSJ7MrA5SLEV0fbjsvYsGW9Ign`)
        .then(response => response.data)
    return data
}