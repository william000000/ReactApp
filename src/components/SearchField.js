import React, { Component } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { searchByCity, saveInput } from '../redux/actions';
import '../style.css';
import Spinner from './Spinner';
import OutputField from './OutputField';
import SpeechVoice from './SpeechVoice';

export class SearchField extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        this.props.searchByCity('kigali');
    }
     handleChange = (e) => {
         e.preventDefault();
         this.props.saveInput(e.target.value);
     }
     render () {
         const { searchByCity, searchReducer } = this.props;

         return (
             <>
                 { searchReducer.spinnerLoader ? (<Spinner />) : (
                     ''
                 ) }
                 <div className="search-container">
                     <h1>City Info</h1>
                     <div className="inputField">
                         <input
                             type="text"
                             placeholder="Search by city name"
                             onChange= {this.handleChange}
                         />
                         <button onClick={() => searchByCity(searchReducer.input)}>Search</button>
                     </div>
                 </div>
                 <SpeechVoice />
                 <OutputField />
                 <ToastContainer/>
             </>
         );
     }
}
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { searchByCity, saveInput })(SearchField);
