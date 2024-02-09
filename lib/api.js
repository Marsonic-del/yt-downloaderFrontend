// lib/api.js
import axios from 'axios';

const api = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (url) => {
    const response = await axios.post(`${api}?link=${encodeURIComponent(url)}`);
    return response.data;
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
