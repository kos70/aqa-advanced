import axios from 'axios';
import { sendCustomRequest } from './task2';
import { jest } from '@jest/globals';

beforeEach(() => {
  jest.resetModules();
  jest.mock('axios');
});

test('sending custom headers, etc.', async () => {
  const mockResponse = { data: 'success' };

  axios.get = jest.fn().mockResolvedValue(mockResponse);

  const result = await sendCustomRequest();

  expect(axios.get).toHaveBeenCalledWith('https://some.url.com/data', {
    headers: {
      'X-Custom-Header': 'my-header-value',
    },
    params: {
      userId: 42,
      debug: true
    }
  });

  expect(result).toBe('success');
});