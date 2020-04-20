import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className={styles['red']}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Scrollbars style={{ width: '100%', height: 300 }}>
        <p style={{ width: 1500 }}>{'Some great content...'.repeat(1000)}</p>
      </Scrollbars>
    </div>
  );
}

export default App;
