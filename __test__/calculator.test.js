const { multiply } = require('../src/calculator');

describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiply(-4, 5)).toBe(-20);
    });

    test('multiplies two negative numbers', () => {
        expect(multiply(-2, -8)).toBe(16);
    });

    test('multiplies by zero', () => {
        expect(multiply(0, 10)).toBe(0);
        expect(multiply(7, 0)).toBe(0);
    });

    test('multiplies by one', () => {
        expect(multiply(1, 9)).toBe(9);
        expect(multiply(9, 1)).toBe(9);
    });

    test('multiplies decimals', () => {
        expect(multiply(2.5, 4)).toBeCloseTo(10);
        expect(multiply(-1.5, 2)).toBeCloseTo(-3);
    });

    test('multiplies large numbers', () => {
        expect(multiply(1000000, 1000000)).toBe(1000000000000);
    });
});