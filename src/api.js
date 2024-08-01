import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getMyModels = async () => {
    try {
        const response = await axios.get(`${API_URL}/mymodels/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
