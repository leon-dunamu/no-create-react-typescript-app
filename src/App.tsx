import React from 'react';
import AppRouter from './components/router/Router';

function App(props: any) {
  return (
    <>
      <AppRouter {...props} />
    </>
  );
}

export default App;
