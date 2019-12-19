import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchByCity, saveInput } from '../redux/actions';
class OutputField extends Component {
    constructor (props) {
        super(props);
    }
     handleChange = (e) => {
         e.preventDefault();
         this.props.saveInput(e.target.value);
         console.log('change inputs', e.target.value);
     }
     render () {
         console.log('this props', this.props);

         return (
             <div className="container-output">
                 <h2>City Details</h2>
                 <div className="outputField">
                     <ul>
                         <li>Bounders:</li>
                         <li>Timezone:</li>
                         <li>Area:</li>
                         <li>Population:</li>
                         <li>Calling code:</li>
                         <li>Demonym:</li>
                         <li>Region:</li>
                     </ul>
                 </div>
             </div>
         );
     }
}
const mapStateToProps = state => {
    console.log('my state', state);
    return state;
};


export default connect(mapStateToProps, { searchByCity, saveInput })(OutputField);
