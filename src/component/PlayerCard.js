import React, { useContext } from 'react';
import ThemeContext from './CreateContext';

function PlayerCard(props) {
  let { player, handleCancel, playerName } = props;
  const darkMode = useContext(ThemeContext);
  return (
    <div
      className={`bg-primary p-2 flex items-center justify-between ${
        darkMode ? 'bg-dark-gray' : ''
      }`}
    >
      <img className="w-8 objext-cover" src={player.avatar_url} alt="" />
      <h3 className="text-red-400">{player.name || player.message}</h3>
      <button
        className="place-self-end text-xl"
        onClick={() => {
          handleCancel(playerName);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default PlayerCard;
