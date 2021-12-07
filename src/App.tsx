import React from 'react';

import GlobalStyle from './styles/Global';

import RoutesIndex from './routes';

const App: React.FC = function _() {
  return (
    <>
      <RoutesIndex />
      <GlobalStyle />
    </>
  );
};
export default App;
