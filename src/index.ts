import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import { AppWrapper } from './App';

const rootNode = document.getElementById('app');

if (!rootNode) {
    throw new Error('root node #app not found');
}
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(AppWrapper));
