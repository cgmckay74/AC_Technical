import React, { Component } from 'react';

class InfoWrapper extends Component{
    render(){
        const {
            title,
            desc
        } = this.props
        return (
            <div className={this.props.name}>
                <h3 className="info-wrapper__title">{ title }</h3>
                <p className="info-wrapper__desc">{ desc }</p>
            </div>
        )
    }
}

export default InfoWrapper;