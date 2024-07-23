import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setcounter] = useState(1);
  function addvalue() {
    if (counter >= 0 && counter < 20) {
      setcounter((counter) => counter + 1);
    }
  }
  function removevalue() {
    if (counter > 0) setcounter((counter) => counter - 1);
  }

  return (
    <>
      <h1>counter app</h1>
      <h2>counter value{counter}</h2>
      <button onClick={addvalue}>add</button>
      <button onClick={removevalue}>remove</button>
    </>
  );
}

export default App;
