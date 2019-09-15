import React, {useState} from 'react';
import StartGameComponent from './StartGameComponent';
import ColourTestComponent from './ColourTestComponent';

const AppComponent = (props) => {
  const [hasStarted, setHasStarted] = useState(false);

  const startGameHandler = (e) => {
    e.preventDefault();

    setHasStarted(true);
  };

  const nextTestHandler = (e) => {
    e.preventDefault();

    console.log('Next test');
  };

  if(!hasStarted){
    return (
      <StartGameComponent startGameHandler={startGameHandler}/>
    );
  }

  return (
    <ColourTestComponent nextTestHandler={nextTestHandler}/>
  );
}

export default AppComponent;