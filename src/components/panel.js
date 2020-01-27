import React, { Component } from 'react';
import InfoWrapper from './infoWrapper';

class App extends Component{
    render(){

    const {
        title,
        thumbnails,
        salesInfo,
        monthlyPlan,
        firstMonth,
        lastMonth,
        deposit
    } = this.props.cars;

    const {
        cashPricePrefix, 
        cashPrice, 
    }= salesInfo.pricing;

       return(
             <div className = "panel-container">
                {thumbnails[0] ? 
                    <img src={`${thumbnails[0]}`}></img>:
                    <div className="missing-img" >
                        No Image Available
                    </div>
                }  
                <InfoWrapper name="info-wrapper" title={title.name} desc={title.variant} />
                <InfoWrapper name="info-wrapper" title={cashPricePrefix} desc={`£${parseFloat(cashPrice).toFixed(2)}`} />

                <div className="info-wrapper">
                    <span className="price">
                        <InfoWrapper name="price-container" title="First Month" desc={`£${parseFloat(firstMonth).toFixed(2)}`} />
                        <InfoWrapper name="price-container" title="Per month" desc={`£${parseFloat(monthlyPlan).toFixed(2)}`} />
                        <InfoWrapper name="price-container" title="Final month" desc={`£${parseFloat(lastMonth).toFixed(2)}`} />
                    </span>
                    <p className="info-wrapper__desc--date">First payment: {this.props.date}</p>
                </div>

                <InfoWrapper name="info-wrapper" title="Deposit" desc={`£${parseFloat(deposit).toFixed(2)} minimum`} />
            </div>
       );
    }
 }
 export default App;