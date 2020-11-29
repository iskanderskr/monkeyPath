import monkey from './monkey'

test('Teste com a entrada 3x3', () => {
    const entrada = [
        [1,3,3],
        [2,1,4],
        [0,6,4]
    ]
    expect(monkey(entrada)).toBe(12);
})

test('Teste com a entrada 4x4', () => {
    const entrada = [
        [1, 3, 1, 5],
        [2, 2, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 1, 2]
    ]
    expect(monkey(entrada)).toBe(16);
})

test('Teste com a entrada 4x4(2)', () => {
    const entrada = [
        [10, 33, 13, 15],
        [22, 21, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 14, 2]
    ]
    expect(monkey(entrada)).toBe(83);
})

test('Teste com a entrada 5x4', () => {
    const entrada = [
        [17, 5, 0, 16],
        [22, 1, 14, 14],
        [50, 5, 78, 8],
        [75, 6, 51, 16],
        [14, 12, 0, 74]
    ]
    expect(monkey(entrada)).toBe(212);
})

test('Teste com a entrada 1x4', () => {
    const entrada = [
        [17],
        [22],
        [50],
        [75],
        [14]
    ]
    expect(monkey(entrada)).toBe(75);
})