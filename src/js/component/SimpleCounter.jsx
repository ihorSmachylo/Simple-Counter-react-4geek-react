
import React from "react";
import "../../styles/index.css"
import  PropTypes from "prop-types";

const SimpleCounter = (props)=> {
    return (
        <div className="bigDiv">
            <div className=""><i class="fas fa-clock"></i></div>
            <div className="">{Math.floor(props.number/100000%10)}</div>
            <div className="">{Math.floor(props.number/10000%10)}</div>
            <div className="">{Math.floor(props.number/1000%10)}</div>
            <div className="">{Math.floor(props.number/100%10)}</div>
            <div className="">{Math.floor(props.number/10%10)}</div>
            <div className="">{props.number%10}</div>
        </div>
    );

};

SimpleCounter.propTypes= {
    number:PropTypes.number
};

SimpleCounter.defaultProps ={
    number:0
};


export default SimpleCounter;