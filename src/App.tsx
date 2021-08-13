import React from 'react';
import './App.css';
import { ToggleButton } from './ToggleButton';
import { Welcome } from './Welcome';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={'anuj'} />
        <ToggleButton/>
      </header>
    </div>
  );
}

export default App;
