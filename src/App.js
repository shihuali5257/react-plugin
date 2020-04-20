import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  return (
    <Scrollbars style={{ width: '100%', height: 300 }}>
      <p style={{width: 1500}}>{'Some great content...'.repeat(1000)}</p>
    </Scrollbars>
  );
}

export default App;
