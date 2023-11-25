import React, { useState } from 'react';
import TextEditor from './Component/TextEditor';
import './App.css';

const App = () => {
  const [componentCode, setComponentCode] = useState('');

  const handleCodeChange = (code) => {
    setComponentCode(code);
  };

  return (
    <div className="App">
         <h1>Component Testing Interface</h1>
      <TextEditor onCodeChange={handleCodeChange} />
    </div>
  );
}

export default App;
