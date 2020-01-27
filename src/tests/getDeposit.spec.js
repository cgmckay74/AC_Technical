import getDeposit from '../actions/getDeposit';

const price = 100;

test('should return 15% deposit', () => {
    expect(getDeposit(price)).toBe(15)
})

test('should not return 50% deposit', () => {
    expect(getDeposit(price)).not.toBe(50)
})
