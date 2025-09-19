const getPercents = require('./getPercents')

describe('tests for getPercents function', () => {
    it('should operate correctly only with positive numbers', () => {
        expect(getPercents(30, 200)).toBe(60);

        expect(getPercents(30, 'abc')).toBe('percent и number должны быть числами');

        expect(getPercents("^&$", 100)).toBe('percent и number должны быть числами');

        expect(getPercents(-30, 200)).toBe('percent и number должны быть больше 0');
    });
});