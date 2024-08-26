import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerHealthData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/health-data`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error registering health data');
  }
};
