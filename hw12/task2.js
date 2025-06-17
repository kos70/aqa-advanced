import axios from 'axios';

export async function sendCustomRequest() {
  const response = await axios.get('https://some.url.com/data', {
    headers: { 'X-Custom-Header': 'my-header-value' },
    params: { userId: 42, debug: true }
  });

  return response.data;
}