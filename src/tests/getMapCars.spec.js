import mapCars from '../actions/mapCars';
import topSixCars from './testFiles/topSixCars';
import mappedCars from './testFiles/mappedCars'

const date = '2020-01-27'

test('should return the 6 components with correct props', () => {
    expect(mapCars(topSixCars, date)).toEqual(mappedCars);
})
test('should not return nothing', () => {
    expect(mapCars(topSixCars, date)).not.toEqual('');
})