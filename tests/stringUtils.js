const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
  test('inverte una stringa normale', () => {
    expect(reverseString('ciao')).toBe('oaic');
  });
  test('inverte una stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('isPalindrome', () => {
  test('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
  test('ignora maiuscole e spazi', () => {
    expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
  });
  test('riconosce una stringa non palindroma', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });
});

describe('truncateString', () => {
  test('tronca una stringa più lunga del massimo', () => {
    expect(truncateString('abcdef', 4)).toBe('abcd...');
  });
  test('non tronca se la stringa è corta', () => {
    expect(truncateString('abc', 5)).toBe('abc');
  });
  test('tronca una stringa esattamente lunga quanto il massimo', () => {
    expect(truncateString('abc', 3)).toBe('abc');
  });
});

describe('countCharacters', () => {
  test('conta i caratteri di una stringa', () => {
    expect(countCharacters('aab')).toEqual({ a: 2, b: 1 });
  });
  test('gestisce una stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });
});

