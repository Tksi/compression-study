import { describe, expect, test } from 'vitest';
import { decode, encode } from './runLength';

describe('encode', () => {
  test('AAABBBBBCCC', () => {
    expect(encode('AAABBBBBCCC')).toBe('A3B5C3');
  });

  test('AlllGGsGsG', () => {
    expect(encode('AlllGGsGsG')).toBe('A1l3G2s1G1s1G1');
  });

  test('1223331', () => {
    expect(encode('1223331')).toBe('11223311');
  });
});

describe('decode', () => {
  test('A3B5C3', () => {
    expect(decode('A3B5C3')).toBe('AAABBBBBCCC');
  });

  test('G4l3s2A1', () => {
    expect(decode('A1l3G2s1G1s1G1')).toBe('AlllGGsGsG');
  });

  test('G4l3s2A1', () => {
    expect(decode('11223311')).toBe('1223331');
  });
});
