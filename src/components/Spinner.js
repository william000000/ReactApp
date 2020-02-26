import React from 'react';
import Loader from 'react-loader-spinner';
import '../style.css';

const Spinner = () => (
    <div className="overlay">
        <div className="loader">
            <Loader type="TailSpin" color="#00B9F2" height={100} width={100} />
        </div>
    </div>

);
export default Spinner;
