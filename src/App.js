import React from 'react';
import TextEditor from './Component/TextEditor';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <TextEditor />
      </div>
    </Provider>
  );
}

export default App;
