import { useContext, useState } from 'react';
import Instruction from './Instruction';
import BattleScore from './BattleScore';
import PlayerInput from './PlayerInput';
import PlayerCard from './PlayerCard';
import ThemeContext from './CreateContext';
function Battle(props) {
  let initialUserIdState = { playerOne: '', playerTwo: '' };
  const [userIds, setUserId] = useState(initialUserIdState);
  let initialUserData = { playerOne: '', playerTwo: '' };
  const [usersData, setUserData] = useState(initialUserData);
  const [isBattleReady, setBattleStatus] = useState();
  const darkMode = useContext(ThemeContext)
  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserId({ ...userIds, [name]: value });
  };
  const handleSubmit = (event, player) => {
    fetch(`https://api.github.com/users/${userIds[player]}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setUserData({ ...usersData, [player]: data });
        } else {
          setUserData({
            ...usersData,
            player: { message: 'Username not found, try again!' },
          });
        }
      });
  };
  const handleCancel = (player) => {
    setUserData({ ...usersData, [player]: null });
  };
  const handleBattleSubmit = () => {
    setBattleStatus(true);
  };
  const handleReset = () => {
    setBattleStatus(false);
    setUserData(initialUserData);
  };

  if (isBattleReady) {
    return <BattleScore usersData={usersData} handleReset={handleReset} />;
  }
  return (
    <section className={`px-20 mx-auto px-60 h-84vh ${darkMode ? 'bg-dark text-dark':''}`}>
      <Instruction />
      <h1 className="text-center text-4xl font-light mt-12">Players</h1>
      <div className="flex justify-between mt-8">
        <div className="flex-50">
          <h3 className="mb-1">Player One</h3>
          <div>
            {!usersData.playerOne ? (
              <PlayerInput
                handleChange={handleChange}
                playerName="playerOne"
                userId={userIds.playerOne}
                handleSubmit={handleSubmit}
              />
            ) : (
              <PlayerCard
                player={usersData.playerOne}
                handleCancel={handleCancel}
                playerName="playerOne"
              />
            )}
          </div>
        </div>
        <div className="flex-50">
          <h3 className="mb-1">Player Two</h3>
          <div>
            {!usersData.playerTwo ? (
              <PlayerInput
                handleChange={handleChange}
                playerName="playerTwo"
                userId={userIds.playerTwo}
                handleSubmit={handleSubmit}
              />
            ) : (
              <PlayerCard
                player={usersData.playerTwo}
                handleCancel={handleCancel}
                playerName="playerTwo"
              />
            )}
          </div>
        </div>
      </div>
      <SubmitButton
        usersData={usersData}
        handleBattleSubmit={handleBattleSubmit}
      />
    </section>
  );
}

function SubmitButton(props) {
  let { playerOne, playerTwo } = props.usersData;
  console.log(playerOne, playerTwo);
  if (playerOne && playerOne.id && playerTwo && playerTwo.id) {
    return (
      <div className="text-center">
        <button
          className="text-center inline-block bg-gray-500 px-12 py-3 rounded mt-12"
          onClick={props.handleBattleSubmit}
        >
          Battle
        </button>
      </div>
    );
  }
  return '';
}

export default Battle;
