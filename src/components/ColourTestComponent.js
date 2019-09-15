import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ColourTestComponent = ({nextTestHandler}) => {
  const [colour, setColour] = useState('');
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      console.log('useEffect');

      const result = await axios(
        `https://q47mc9pxe1.execute-api.ap-southeast-2.amazonaws.com/prod/games/colour/`,
      );
      
      setColour(result.colour);
      setQuestionText(result.questionText);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>{questionText}</div>
      <div>{colour}</div>
      <input className="button" type="submit" value="Next" onClick={event => nextTestHandler(event)}/>
    </div>
  );
}

export default ColourTestComponent;