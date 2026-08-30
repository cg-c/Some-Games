import axios from "axios"
const baseUrl = "https://api.deezer.com"
const cors = "https://proxy.corsfix.com/?"

const getAll = (playlist) => {
    const request = axios.get(`${cors}${baseUrl}${playlist}/tracks`)
    return request.then(response => response.data)
}

export default { getAll }