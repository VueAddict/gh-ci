const { multiply, add, subtract } = require('../src/calculator');

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

describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a positive and a negative number', () => {
        expect(subtract(5, -3)).toBe(8);
        expect(subtract(-4, 5)).toBe(-9);
    });

    test('subtracts two negative numbers', () => {
        expect(subtract(-2, -8)).toBe(6);
    });

    test('subtracts zero', () => {
        expect(subtract(0, 10)).toBe(-10);
        expect(subtract(7, 0)).toBe(7);
        expect(subtract(0, 0)).toBe(0);
    });

    test('subtracts decimals', () => {
        expect(subtract(2.5, 4)).toBeCloseTo(-1.5);
        expect(subtract(-1.5, 2)).toBeCloseTo(-3.5);
    });

    test('subtracts large numbers', () => {
        expect(subtract(1000000, 1000000)).toBe(0);
        expect(subtract(2000000, 1000000)).toBe(1000000);
    });

    test('subtracts with Infinity', () => {
        expect(subtract(Infinity, 2)).toBe(Infinity);
        expect(subtract(-Infinity, 2)).toBe(-Infinity);
        expect(subtract(2, Infinity)).toBe(-Infinity);
        expect(subtract(Infinity, Infinity)).toBeNaN();
        expect(subtract(-Infinity, -Infinity)).toBeNaN();
    });

    test('subtracts with NaN', () => {
        expect(subtract(NaN, 5)).toBeNaN();
        expect(subtract(5, NaN)).toBeNaN();
        expect(subtract(NaN, NaN)).toBeNaN();
    });

    test('subtracts non-integer numbers', () => {
        expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
        expect(subtract(0.1, 0.3)).toBeCloseTo(-0.2);
    });
});
