import React from 'react';

import {Home} from "./Home";

import {GlobalStyle} from "./globalStyles";;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home/>
    </React.Fragment>
  );
}

export default App;
