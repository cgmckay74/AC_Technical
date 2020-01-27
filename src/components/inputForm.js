import React, { Component } from 'react';

class Form extends Component {

    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
                <label htmlFor="total">Vehicle Price:</label><br/>
                    <input
                        className="text-input"
                        type="text" 
                        name="total" 
                        onChange={this.props.onChange} 
                        placeholder="Please enter vehicle price"
                        required
                    />
                    <br/>
              
                <label htmlFor="deposit">Deposit Amount: </label><br/>
                    <input 
                        className="text-input"
                        type="text" 
                        name="deposit" 
                        onChange={this.props.onChange} 
                        placeholder="Please enter deposit amount"
                    />
                    <br/>
               
                <label htmlFor="delivery">Delivery Date:  </label><br/>
                    <input 
                        className="text-input"
                        type="date" 
                        name="delivery" 
                        onChange={this.props.onChange}
                        required
                    />
                    <br/>
              
                <label htmlFor="finance">Finance Plan:</label><br/>
                    <select 
                        className="select-input"
                        name="finance" 
                        value={this.props.select} 
                        onChange={this.props.onChange}
                        required>
                            <option value="" disabled hidden>Select option</option>
                            <option value="1">One year</option>
                            <option value="2">Two year</option>
                            <option value="3">Three year</option>
                    </select>
                    <br/>
                
                <input 
                    className= "submit-input"
                    type="submit" 
                    value="Submit"
                />
            </form>
        )
    }
}

export default Form;