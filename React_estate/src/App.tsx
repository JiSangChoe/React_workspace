import React from 'react';
import './App.css';
                          // tsconfig.json 에서 "baseUrl": "./src"를 추가하면 상대경로로 잡히지 않게 할 수 있다. 모듈화를 더 깔끔하게 함
import Authentication from 'views/Authentication';

function App() {
  return (
    <>
      <Authentication />
    </>
  );
}

export default App;
