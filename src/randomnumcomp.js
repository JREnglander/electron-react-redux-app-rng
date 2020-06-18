import React from 'react';
import { Button } from 'react-bootstrap';


const Component = ({count,handleRandClick}) => ( 
    <div className="random-number-window">
        <h3 > Random Number Generator </h3> 
        <p>{count}</p>
        <Button onClick = {handleRandClick} > Generate Random Number </Button> 
    </div>
);

export default Component;