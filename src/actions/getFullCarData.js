import getDeposit from './getDeposit';

const getPricePerMonth = (plan, inPriceRange) => {
    
    const monthlyPrice = inPriceRange.map(car => {
        const { cashPrice } = car.salesInfo.pricing;
        const monthlyPlan = (cashPrice / plan) / 12;
        const firstMonth = monthlyPlan + 88;
        const lastMonth = monthlyPlan + 20;
        const deposit = getDeposit(cashPrice);

        return {
            ...car,
            monthlyPlan,
            firstMonth,
            lastMonth,
            deposit
        };
    })
    
    return monthlyPrice;
}

export default getPricePerMonth;