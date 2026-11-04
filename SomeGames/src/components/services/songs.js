import axios from "axios"
const baseUrl = "https://api.deezer.com"
// const cors = "https://proxy.corsfix.com/?"
// const cors = "https://cors-anywhere.herokuapp.com/"
const cors = "https://proxy.cors.dev/"

const getAll = (playlist) => {
    const request = axios.get(`${cors}${baseUrl}${playlist}/tracks`)
    return request.then(response => response.data.data)
}

const getSong = (songID) => {
    const trackUrl = `${cors}${baseUrl}/track/${songID}`
    const request = axios.get(trackUrl)
    return request.then(response => response.data)
}

export default { getAll, getSong }