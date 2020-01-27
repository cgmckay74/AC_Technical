import React from 'react';
import getStartDate from '../actions/getStartDate';
import Panel from '../components/panel';

const mapCars = (cars, date) => cars.map(car => <Panel cars={car} date={getStartDate(date)}/> );

export default mapCars