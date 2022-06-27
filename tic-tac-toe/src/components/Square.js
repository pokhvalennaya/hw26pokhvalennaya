import PropTypes from "prop-types";

const Square = ({ value, onClick, isWinnerLine }) => (
  <button
    className="square"
    onClick={onClick}
    style={isWinnerLine ? { backgroundColor: "green", color: "white" } : null}
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
