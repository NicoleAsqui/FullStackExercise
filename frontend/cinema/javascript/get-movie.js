import { API_MOVIE_ID_URL, OPTIONS } from './constants.js';

export const get_movie = async (id) => {
  try {
    const url = `${API_MOVIE_ID_URL.replace('{id}', id)}`;
    const response = await fetch(url, OPTIONS);
    const result = await response.text();
    console.error(url);
    return JSON.parse(result).results;
  } catch (error) {
    console.error(error);
  }
};