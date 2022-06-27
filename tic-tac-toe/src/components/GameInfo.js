import PropTypes from "prop-types";
import "./components.css";

const GameInfo = ({ history, jumpTo, status }) => {
  return (
    <div className="game-info">
      <div className="status">{status}</div>
      <ol>
        {history.map((step, index) => {
          const isStartStep = index === 0;

          return (
            <li key={index}>
              <button className="step-button" onClick={jumpTo(index)}>
                {isStartStep ? `Go to game start` : `Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

GameInfo.propTypes = {
  history: PropTypes.array.isRequired,
  jumpTo: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default GameInfo;
