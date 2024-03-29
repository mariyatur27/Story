import React from 'react';
import { createRoot } from 'react-dom';
import App from './App'; // Import your root component

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(<App />);
