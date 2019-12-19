import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchByCity, saveInput } from '../redux/actions';

class OutputField extends Component {
    constructor (props) {
        super(props);
    }
     handleChange = (e) => {
         e.preventDefault();
         this.props.saveInput(e.target.value);
     }
     render () {
         if (this.props.searchReducer.countryInfo === undefined) {
             return <div className="noDataFound">No Data Found</div>;
         }
         return (
             <div className="container-output">
                 <h2>City Details</h2>
                 <div className="outputField">
                     <ul>
                         <li>Timezone: {this.props.searchReducer.countryInfo.timezones}</li>
                         <li>Area: {this.props.searchReducer.countryInfo.area}</li>
                         <li>Population: {this.props.searchReducer.countryInfo.population}</li>
                         <li>Calling code: {this.props.searchReducer.countryInfo.callingCodes}</li>
                         <li>Demonym: {this.props.searchReducer.countryInfo.timezones}</li>
                         <li>Region: {this.props.searchReducer.countryInfo.region}</li>
                     </ul>
                 </div>
             </div>
         );
     }
}
const mapStateToProps = state => {
    return state;
};


export default connect(mapStateToProps, { searchByCity, saveInput })(OutputField);
