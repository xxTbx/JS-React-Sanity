/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom'

// TODO: Kommenter ut om du ønsker å bruke .scss


// TODO: Kommenter ut om du ikke ønsker å bruke tailwind

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'))