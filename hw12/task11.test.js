import { fetchWithError } from './task1.js';

test('Request error', async () => {
  const result = await fetchWithError();
  expect(result).toMatch(/^Error: /);
});