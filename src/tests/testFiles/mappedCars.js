import React from 'react';
import App from '../../components/panel';

const mappedCars = [
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 1000}}}} date="Feb 1st 2020" />, 
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 2000}}}} date="Feb 1st 2020" />, 
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 3000}}}} date="Feb 1st 2020" />, 
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 4000}}}} date="Feb 1st 2020" />, 
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 5000}}}} date="Feb 1st 2020" />, 
    <App cars={{"salesInfo": {"pricing": {"cashPrice": 6000}}}} date="Feb 1st 2020" />
];

export default mappedCars;