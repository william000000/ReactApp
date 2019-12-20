import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveInput } from '../redux/actions';
import img from '../images/icon.png';
import textToSpeech from '../redux/actions/spellAction';

class Speech extends Component {
    constructor (props) {
        super(props);
    }

     handleChange = (e) => {
         e.preventDefault();
         this.props.saveInput(e.target.value);
     }
     render () {
         return (
             <div className="speech-container">
                 <button onClick={() => textToSpeech(this.props.searchReducer.input)}><img src={img} alt="photo" /></button>
             </div>
         );
     }
}
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { saveInput })(Speech);
