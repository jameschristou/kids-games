import React from 'react';

const StartGameComponent = ({startGameHandler}) => {
  return (
    <div className='kg__start-container'>
      <div>
        <h2 className='start__heading'>Let's have some fun learning colours and stuff!</h2>
        <div>
          <input className="button start__button" type="submit" value="Start" onClick={event => startGameHandler(event)}/>
        </div>
      </div>
    </div>
  );
}

export default StartGameComponent;