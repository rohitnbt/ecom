import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchDataFromApi = async(url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};