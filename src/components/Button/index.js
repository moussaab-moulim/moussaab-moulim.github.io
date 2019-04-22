import React from 'react';
import './index.css';

const Button = (props) => (
    <div id="home-btn">
        <a className={`btn btn-general ${props.buttonClass}`} href="#about" title="Start Now" role="button">Start Now</a>
    </div>)
    ;

export default Button;
