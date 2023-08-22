import axios from 'axios';


//  12237837/json/
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api;