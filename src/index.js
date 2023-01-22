import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './authContext';
import SeriesModel from './SeriesModel';

const seriesModel = new SeriesModel();
ReactDOM.render(
    <AuthProvider>
        <App model={seriesModel} />
    </AuthProvider>,
    document.getElementById('root')
);

reportWebVitals();
