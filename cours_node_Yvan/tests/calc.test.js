import { Add, Substract, Multiply } from "./calc.mjs"

//Test de la fonction Add()
test('Addition : 5+5', () => {
    expect(Add(5, 5)).toBe(10);
});

//Test de la fonction Substract()
test('Soustraction : 7-4', () => {
    expect(Substract(7, 4)).toBe(3);
});

test('Multiplication : 3*4', () => {
    expect(Multiply(3, 4)).toBe(12);
});