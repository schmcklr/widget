//Start file of the React app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    //Searches the index.html document for the container with the ID "root" in which the entire React app will be rendered
    document.getElementById('root')
);
reportWebVitals();
