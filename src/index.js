import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import GlobalStyle from './assets/globalStyled';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routers />
  </React.Fragment>,
  document.getElementById('root')
);