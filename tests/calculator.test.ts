import add from '@/calculator';

describe('Add function in calculator', () => {
  it('should return added value', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 20)).toBe(30);
    expect(add(123, 234)).toBe(357);
    expect(add(3, 0)).toBe(3);
  });
});
