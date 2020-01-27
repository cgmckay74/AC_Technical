import getFullCarData from '../actions/getFullCarData';
import trueFullCars from './testFiles/trueFullCars';
import falseFullCars from './testFiles/falseFullCars';
import twoCars from './testFiles/twoCars';

const plan = 3;

test('should return an object with deposit, firstMonth, lastMonth, monthlyPlan, salesInfo', () => {
    expect(getFullCarData(plan, twoCars)).toEqual(trueFullCars);
})

test('should not return an object with the wrong values', () => {
    expect(getFullCarData(plan, twoCars)).not.toEqual(falseFullCars)
}) 
