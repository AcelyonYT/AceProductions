import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const app = new App();
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <app.render />
    </React.StrictMode>
);