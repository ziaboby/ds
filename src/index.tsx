import React from 'react';
import ReactDOM from 'react-dom/client';
import SwitchingTabs from './components/Example/SwitchingTabs';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <main>
      <h1>Design System demo</h1>
      <SwitchingTabs variant="pill" />
      <hr />
      <SwitchingTabs variant="underline" />
    </main>
  </React.StrictMode>,
);
