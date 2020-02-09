import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchByCity } from '../redux/actions';

export class OutputField extends Component {
    render () {
        return (
            <div className="container-output">
                <h2>City Details</h2>
                <div className="outputField">
                    <ul>
                        <li><label>Country Name:</label> {this.props.searchReducer.countryInfo.name}</li>
                        <li><label>Timezone:</label> {this.props.searchReducer.countryInfo.timezones}</li>
                        <li><label>Area:</label> {this.props.searchReducer.countryInfo.area}</li>
                        <li><label>Population: </label>{this.props.searchReducer.countryInfo.population}</li>
                        <li><label>Calling code:</label> {this.props.searchReducer.countryInfo.callingCodes}</li>
                        <li><label>Demonym:</label> {this.props.searchReducer.countryInfo.timezones}</li>
                        <li><label>Region: </label>{this.props.searchReducer.countryInfo.region}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};


export default connect(mapStateToProps, { searchByCity })(OutputField);
