import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './RandomNumDisplay.css'
// replave nulls with range specified in randOps
const Component = ({count,handleRandClick, handleSetMin, handleSetMax, max, min, int}) => ( 
    <div id="random-number-window">
        < div id = "rng" >
            <h3 > Random Number Generator </h3> <br/>
            <h3 > Current Range: {min} - {max}</h3> <br/>
            <h3> Mode: {int}</h3>
            <p>{count}</p>
            <Button onClick = {handleRandClick} > Generate Random Number </Button> 
        </div>
        <div id="setRange">
         <InputGroup className="min-input">
            <FormControl placeholder="Min"/>
            <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleSetMin}>Set Range Min</Button>
            </InputGroup.Append>
        </InputGroup>
        <InputGroup className="max-input">
            <FormControl placeholder="Max"/>
            <InputGroup.Append>
            <Button onClick={handleSetMax}>Set Range Max</Button>
            </InputGroup.Append>
        </InputGroup>
        </div>
       
    </div>
);

export default Component;