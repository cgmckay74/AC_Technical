import React, { Component } from 'react';
import Loader from 'react-loader'
import "@babel/polyfill";
import getCars from '../actions/getCars';
import mapCars from '../actions/mapCars';
import getFullCarData from '../actions/getFullCarData';
import getTopSix from '../actions/getTopSix';
import InputForm from './inputForm';
import '../styles/3-main/app.scss';

class App extends Component{
   constructor(){
      super();
      this.state = {
          finance: "",
          delivery: "",
          total: "",
          fullCarData: [],
          loaded: false
      }
  }

   async componentDidMount() {
      const cars = await getCars();
      this.setState({
         cars,
         loaded: true
      })
   }

   handleChange = (event) =>{   
      
      const {
         name,
         value
      } = event.target

      this.setState({[name]: value});
    }
  
   handleSubmit = (event) => {
      event.preventDefault()
      const { searchResults } = this.state.cars
      const { total, finance } = this.state;
      const matchedCars = getTopSix(searchResults, total);
      const fullCarData = getFullCarData(finance, matchedCars);
      this.setState({
         fullCarData
      })
   }
   

   render(){
      const { loaded, delivery, fullCarData } = this.state;

      if (loaded) {
         return (
            <div className="container">
               <div className="side-bar">
                  <InputForm onChange={this.handleChange} onSubmit={this.handleSubmit} select={this.state.finance}/>
               </div>  
               <div className="main-wrapper">
                  <div className= "main-container">
                     {mapCars(fullCarData, delivery)}
                  </div>
               </div> 
            </div>
         )
      }

      if(!loaded){
         return(
            <Loader loaded={false}/>
         );
      }
     
   }
}
export default App;
