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
     }
     render () {
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
                     <button onClick={() => this.props.searchByCity(this.props.searchReducer.input)}>Search</button>
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
