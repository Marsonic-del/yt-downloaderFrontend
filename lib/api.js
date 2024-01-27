// lib/api.js
import axios from 'axios';

const api = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (url) => {
    try {
        const response = await axios.post(`${api}?link=${encodeURIComponent(url)}`);
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
