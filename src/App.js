import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState, useEffect  } from 'react';

function App() {
  const [clickNumber, setClickNumber] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${clickNumber} times`;
  });

  const manageClick = () => {
    setClickNumber(clickNumber + 1);
  }

  const restarCount = () => {
    setClickNumber(0);
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Click counter</h1>
      </div>
      <div className="main_container">
        <Counter 
          clickNumber={clickNumber}
        />
        <Button 
          text="Click"
          isClickButton={true}
          manageClick={manageClick}
        />
        <Button 
          text="Reiniciar"
          isClickButton={false}
          manageClick={restarCount}
        />
      </div>
    </div>
  );
}

export default App;
