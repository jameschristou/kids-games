import React, {useState} from 'react';
import StartGameComponent from './StartGameComponent';
import ColourTestComponent from './ColourTestComponent';
import axios from 'axios';

const AppComponent = (props) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [testData, setTestData] = useState({});

  const startGameHandler = (e) => {
    e.preventDefault();

    nextTestHandler(e);
  };

  const nextTestHandler = (e) => {
    e.preventDefault();

    console.log('Next test');

    const fetchData = async () => {
      console.log('useEffect');

      const result = await axios(
        `https://q47mc9pxe1.execute-api.ap-southeast-2.amazonaws.com/prod/games/colour/`,
      );
      
      setTestData(result.data);

      if(!hasStarted){
        setHasStarted(true);
      }
    };
    
    fetchData();
  };

  if(!hasStarted){
    return (
      <StartGameComponent startGameHandler={startGameHandler}/>
    );
  }

  return (
    <ColourTestComponent nextTestHandler={nextTestHandler} testData={testData}/>
  );
}

export default AppComponent;