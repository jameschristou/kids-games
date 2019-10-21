import React from 'react';

const StartGameComponent = ({startGameHandler}) => {
  return (
    <div className='container-centered'>
      <div className="game-container">
        <p className="game-container__text">Let's have some fun learning colours and stuff!</p>
        <button className="button start__button" type="submit" onClick={event => startGameHandler(event)}>
          <span>Start</span>
        </button>
      </div>
    </div>
  );
}

export default StartGameComponent;