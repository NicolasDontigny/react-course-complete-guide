import React, { useState, useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [text, setText] = useState('hi there!');

  console.log('APP RUNNING');

  // Prevent child dependent on this prop to be re-rendered every time we assign the function to the variable
  const showParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevValue) => !prevValue);
    }
    // We need to re-create and store the function every time allowToggle changes value
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const textHandler = useCallback(() => {
    setText((prevText) => prevText + 'A');
    setText((prevText) => prevText + 'A');
    // setText((prevText) => prevText + 'A');
  }, []);

  return (
    <div className='app'>
      <h1>{text}</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={allowToggleHandler}>Toggle Allow Toggle!</Button>
      <Button onClick={showParagraphHandler}>Toggle Paragraph!</Button>
      <Button onClick={textHandler}>Text!</Button>
      <DemoOutput show={showParagraph}></DemoOutput>
    </div>
  );
}

export default App;
