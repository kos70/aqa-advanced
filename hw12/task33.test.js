import { jest } from '@jest/globals';
import axios from 'axios';
import { fetchUserData } from './task3';

jest.mock('axios');

describe('fetchUserData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

test('Error: failed request', async () => {
  axios.get = jest.fn().mockRejectedValue(new Error('Network Error'));

  const result = await fetchUserData(1);

  expect(axios.get).toHaveBeenCalledWith('https://some.url.com/users/1');
  expect(result).toEqual({ error: 'Network Error' });
});
});