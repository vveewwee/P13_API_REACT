import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter';

export default function App() {
  return (
    <Fragment>
      <Router>
        <AppRouter/>
      </Router>
    </Fragment>
  );
}
