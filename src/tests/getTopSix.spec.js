import getTopSix from '../actions/getTopSix';
import nineCars from './testFiles/nineCars';
import topSixCars from './testFiles/topSixCars';

const price = 9000;

test('should return the top 6 cars that are less than or equal to the price', () => {
    expect(getTopSix(nineCars, price)).toEqual(topSixCars)
})
test('should not return more than 6 cars', () => {
    expect(getTopSix(nineCars, price)).not.toEqual(nineCars)
})