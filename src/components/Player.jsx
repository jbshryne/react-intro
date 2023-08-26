const Player = ({ name }) => {
  return (
    <div className={name}>
      <h2>Player {name}</h2>
      <h3>Wins: </h3>
    </div>
  );
};

export default Player;
