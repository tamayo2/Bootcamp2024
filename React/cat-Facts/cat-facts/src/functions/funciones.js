import axios from 'axios'

const catFactsFunction = async (state) => {
    const peticion = await axios.get('https://catfact.ninja/fact')
    state(peticion.data.fact)
}

const catImgFunction = async (state) => {
    const peticion = await axios.get('https://api.thecatapi.com/v1/images/search')
    state(peticion.data[0].url)
}

export {
    catImgFunction
}

export {
    catFactsFunction
}