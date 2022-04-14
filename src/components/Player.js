import Content from "./Content";
const Player = () => {
  return (
    <div className="content" id="content">
      This is a player, don't let your eyes deceive you.
      <div className="card">
        <div className="card-header">album artwork</div>
        <div className="card-content">controls</div>
        <div className="card-footer">song info</div>
      </div>
    </div>
  );
};

export default Player;
