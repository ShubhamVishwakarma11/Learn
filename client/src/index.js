import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NotificationContextProvider } from './notification/notification.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotificationContextProvider>
    <Router>
      <App />
    </Router>
  </NotificationContextProvider>

);

