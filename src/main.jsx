
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { Suspense } from 'react';

const container = document.getElementById("root")
if (!container) throw new Error("Could not find root element with id 'root'");
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);
