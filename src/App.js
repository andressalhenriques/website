import React, { Fragment } from 'react';
import Routes from './routes'
import { Helmet } from "react-helmet";


function App() {

    return (
      <Fragment>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Andressa Henriques</title>
          <meta name="description" content="Andressa henriques Web site"></meta>
          </Helmet>
        <Routes/>
      </Fragment>
      );
  
}

export default App;
