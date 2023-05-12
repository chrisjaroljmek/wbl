import PropTypes from "prop-types";

export function Button(props) {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
