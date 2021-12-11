import axios from "axios";

export default axios.create({
    baseURL: "http://laravel.andrey.lokal.com:100/",
    headers: {
        "Content-type": "application/json"
      }
});