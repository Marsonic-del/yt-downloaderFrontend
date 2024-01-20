// lib/api.js
import axios from 'axios';

const api = 'http://34.201.138.4:8080/api/v1';

const fetchData = async (url) => {
    try {
        const response = await axios.get(`${api}?link=${encodeURIComponent(url)}`);
        return response.data;
    } catch (error) {
        throw new Error(error)
        //console.error('Error fetching data:', error);
        // return null;
    }
};

export const downloadContent = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error downloading the content:', error);
        return null;
    }
}

export default fetchData;
