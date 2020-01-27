import getStartDate from '../actions/getStartDate';

const date = '2020-01-27';

test('should return the date of the first of the next month', () => {
    expect(getStartDate(date)).toBe("Feb 1st 2020")
})
test('should return the wrong date', () => {
    expect(getStartDate(date)).not.toBe("Jan 27th 2020")
})