const getTopSix = (cars, price) => {
    
    const size = 6;
    const inPriceRange = cars.filter(car => car.salesInfo.pricing.cashPrice <= price);
    const topSix = inPriceRange.slice(0, size);
    
    return topSix
}

export default getTopSix;