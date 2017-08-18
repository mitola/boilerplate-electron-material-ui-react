import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import LeftPanelComponent from './components/LeftPanelComponent';

const App = () => (
    <div>

    <Grid container spacing={24}>
        <Grid item xs={6}>
        <LeftPanelComponent  />
        </Grid>
        <Grid item >
        <LeftPanelComponent  />
        </Grid>
      </Grid>
    </div> 
);//<MyAwesomeReactComponent />

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

export default App;
