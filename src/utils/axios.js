import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL : "https://383e-180-251-145-145.ngrok-free.app/api",
    headers: {
        Accept: 'application/json'
    }
})

export default axios;