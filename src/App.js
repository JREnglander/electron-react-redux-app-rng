//This file has been relagated to useless status and will remain so 
//until a use case validates a return to useful status

import React from 'react';
import store from './randomnumreducer.js';
import RNGContainer from './RNGComponents/rngcontainercomp';
import SetModeContainer from './RNGComponents/setModeContainer';
import { Provider } from 'react-redux';
// import './App.css';

function App(props) {
  return ( 
  <Provider store = {store}>
      <RNGContainer />
      <SetModeContainer/>
  </Provider>);
}

export default App;
