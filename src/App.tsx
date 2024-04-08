import React, { useRef, useState } from 'react';
import Tiptap from './components/Editor';
import Timestamps from './components/Timestamps';
import TextComponent from './components/TextComponent';

function App() {
  return (
    <div className="App">
     {/* <Timestamps />
     <Tiptap /> */}
     <TextComponent />
    </div>
  );
}

export default App;
