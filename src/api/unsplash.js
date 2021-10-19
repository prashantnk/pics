import axios from 'axios';

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 3EQjJjlydlUHT3RZ6GhmihBGLSMqfpceLHmMzLsLCxM"
    }
});

export default unsplash;