import axios from 'axios';

export async function fetchWithError() {
  try {
    await axios.get('https://some.url.com');
  } catch (error) {
    return `Error: ${error.message}`;
  }
}