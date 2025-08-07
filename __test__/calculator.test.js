const { multiply, add } = require('../src/calculator');

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

    // Additional tests
    test('multiplies with Infinity', () => {
        expect(multiply(Infinity, 2)).toBe(Infinity);
        expect(multiply(-Infinity, 2)).toBe(-Infinity);
        expect(multiply(0, Infinity)).toBeNaN();
    });

    test('multiplies with NaN', () => {
        expect(multiply(NaN, 5)).toBeNaN();
        expect(multiply(5, NaN)).toBeNaN();
    });

    test('multiplies with non-integer numbers', () => {
        expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
});

describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
        expect(add(-4, 5)).toBe(1);
    });

    test('adds two negative numbers', () => {
        expect(add(-2, -8)).toBe(-10);
    });

    test('adds zero', () => {
        expect(add(0, 10)).toBe(10);
        expect(add(7, 0)).toBe(7);
    });

    test('adds decimals', () => {
        expect(add(2.5, 4)).toBeCloseTo(6.5);
        expect(add(-1.5, 2)).toBeCloseTo(0.5);
    });

    test('adds large numbers', () => {
        expect(add(1000000, 1000000)).toBe(2000000);
    });

    // Additional tests
    test('adds with Infinity', () => {
        expect(add(Infinity, 2)).toBe(Infinity);
        expect(add(-Infinity, 2)).toBe(-Infinity);
        expect(add(Infinity, -Infinity)).toBeNaN();
    });

    test('adds with NaN', () => {
        expect(add(NaN, 5)).toBeNaN();
        expect(add(5, NaN)).toBeNaN();
    });

    test('adds non-integer numbers', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
});