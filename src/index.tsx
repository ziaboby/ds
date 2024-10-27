import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SwitchingTabs from './components/Example/SwitchingTabs';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <main>
      <SwitchingTabs variant="pill" />
      <hr />
      <SwitchingTabs variant="underline" />
    </main>
  </React.StrictMode>,
);
