import PropTypes from "prop-types";
import "./components.css";

const Square = ({ value, onClick, isWinnerLine }) => (
  <button
    className={`square + ${isWinnerLine ? "winner-square" : ""}`}
    onClick={onClick}
  >
    {value}
  </button>
);
Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]).isRequired,
  onClick: PropTypes.func.isRequired,
  isWinnerLine: PropTypes.bool,
};

export default Square;
