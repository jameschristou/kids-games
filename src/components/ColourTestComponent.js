import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ColourTestComponent = ({nextTestHandler, testData}) => {
  const [colour, setColour] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [colourCode, setColourCode] = useState('');

  console.log('ColourTestComponent');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('useEffect');

  //     const result = await axios(
  //       `https://q47mc9pxe1.execute-api.ap-southeast-2.amazonaws.com/prod/games/colour/`,
  //     );
      
  //     setColour(result.colour);
  //     setQuestionText(result.questionText);
  //     setColourCode(result.colourCode);
  //   };

  //   fetchData();
  // }, []);

  const divStyle = {
    background: testData.colourCode
  };

  return (
    <div style={divStyle} className="kg__colour-test-container">
      <div>
        <p className="colour-test__question">{testData.questionText}</p>
        <input className="button next__button" type="submit" value="Next" onClick={event => nextTestHandler(event)}/>
      </div>
    </div>
  );
}

export default ColourTestComponent;