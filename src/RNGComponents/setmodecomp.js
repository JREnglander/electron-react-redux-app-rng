import { Button } from 'react-bootstrap';
import React from 'react';
import './rng.css';

const setMode = ({handleSetMode}) => (
    <Button onClick={handleSetMode}>Change Mode</Button>
);

export default setMode;
