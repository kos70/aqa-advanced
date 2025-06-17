import axios from 'axios';

export async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://some.url.com/users/${userId}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}