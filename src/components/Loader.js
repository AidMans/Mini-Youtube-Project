import React from 'react';
import loader from '../images/loader.svg';

const Loader = ({isLoading}) => {
    return (
        <div
            className="loader"
            style={{display: isLoading ? "block" : "none"}}>
            <img src={loader} alt="loading..." />
        </div>
    )
}

export default Loader;