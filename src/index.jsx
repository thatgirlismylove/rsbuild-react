import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import testFn from '@/utils/test.js';
import './style.css';

testFn();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
