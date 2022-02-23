import axios from "axios";
export const urlBackend="http://localhost:8085/";

export default axios.create({
    // baseURL: "http://laravel.andrey.lokal.com:100/",
    baseURL: urlBackend,
    headers: {
        "Content-type": "application/json"
      }
});