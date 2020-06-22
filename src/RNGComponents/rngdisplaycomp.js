import { Button } from 'react-bootstrap';
import React from 'react';
import './rng.css';

const RNG = ({count, handleRandClick, min, max, int}) => (
    < div id = "rng" >
            <h3 id="title"> Random Number Generator </h3>
            <h3>Current Range: {min} - {max} <br/>
            Mode: {int} </h3>
            <p>{count}</p>
            <Button onClick = {handleRandClick} > Generate Random Number </Button> 
        </div>
);

export default RNG;