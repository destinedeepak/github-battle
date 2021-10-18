import React, { useContext } from 'react';
import ThemeContext from './CreateContext';

function PlayerInput(props) {
  let { handleChange, playerName, userId, handleSubmit } = props;
  const darkMode = useContext(ThemeContext);
  return (
    <div className={`flex ${darkMode ? 'bg-dark text-dark' : ''}`}>
      <input
        type="text"
        className="border w-full rounded px-2"
        name={playerName}
        placeholder="github username"
        onChange={handleChange}
        value={userId}
      />
      <button
        className={`px-8 py-2 rounded ml-4 hover:bg-gray-400 ${
          darkMode ? 'bg-gray-400 text-dark' : 'bg-primary'
        }`}
        onClick={(event) => {
          handleSubmit(event, playerName);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default PlayerInput;
