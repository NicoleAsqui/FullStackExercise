import { get_movies } from '../javascript/get-movies.js';
import { jest } from '@jest/globals';

jest.mock('../javascript/constants.js', () => ({
    API_URL: 'http://test.com/api/movies',
}));

describe('get_movies function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('fetches data successfully from the API', () => {
        it('should return the parsed results', async () => {
        // Arrange
        global.fetch = jest.fn(() =>
            Promise.resolve({
            text: () => Promise.resolve(JSON.stringify(
                { results: ['movie1', 'movie2'] })),
            })
        );

        // Act
        const movies = await get_movies();

        // Assert
        expect(movies).toEqual(['movie1', 'movie2']);
        });
    });

    describe('handles errors when fetching data', () => {
        it('should log an error to the console', async () => {
        // Arrange
        global.fetch = jest.fn(() => Promise.reject('Fetch error'));

        // Spy on console.error to check if it's called
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        // Act
        await get_movies();

        // Assert
        expect(consoleSpy).toHaveBeenCalledWith('Fetch error');
        });
    });
});