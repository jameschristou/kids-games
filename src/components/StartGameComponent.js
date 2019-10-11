import React from 'react';

const StartGameComponent = ({startGameHandler}) => {
  return (
    <div>
      <div>Let's have some fun learning colours and stuff!</div>
      <input className="button" type="submit" value="Start" onClick={event => startGameHandler(event)}/>
    </div>
  );
}

export default StartGameComponent;