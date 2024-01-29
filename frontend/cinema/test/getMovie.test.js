import { get_movie } from '../javascript/get-movie.js';
import { jest } from '@jest/globals';

jest.mock('../javascript/constants.js', () => ({
  API_MOVIE_ID_URL: 'https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info',
}));

describe('get_movie function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully for a given movie id when called API', async () => {
    // Arrange
    const mockMovieId = 'tt0055254';
    const mockApiResponse = {
      "id": "tt0055254",
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: jest.fn().mockResolvedValue(JSON.stringify({ results: mockApiResponse })),
      })
    );

    // Act
    const movie = await get_movie(mockMovieId);

    // Assert
    expect(movie).toEqual(mockApiResponse);
  });

  it('handles errors when fetching data for a given movie id', async () => {
    // Arrange
    const mockMovieId = 'invalid-id';
    global.fetch = jest.fn(() => Promise.reject('Fetch error'));

    // Spy on console.error to check if it's called
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    const movie = await get_movie(mockMovieId);

    // Assert
    expect(movie).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('Fetch error');
  });
});