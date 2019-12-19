import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchByCity, saveInput } from '../redux/actions';
class SearchField extends Component {
    constructor (props) {
        super(props);
    }
     handleChange = (e) => {
         e.preventDefault();
         this.props.saveInput(e.target.value);
         console.log('input changes', e.target.value);
     }
     render () {
         console.log('this is my props', this.props);

         return (
             <div className="search-container">
                 <h1>Country Info</h1>
                 <div className="inputField">
                     <input
                         type="text"
                         name=""
                         id=""
                         placeholder="Search by city name"
                         onChange= {this.handleChange}
                     />
                     <button onClick={() => this.props.searchByCity('city searched')}>Search</button>
                 </div>
             </div>
         );
     }
}
const mapStateToProps = state => {
    console.log('my state', state);
    return state;
};


export default connect(mapStateToProps, { searchByCity, saveInput })(SearchField);
