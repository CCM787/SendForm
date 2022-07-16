/* eslint-disable react/prop-types */
function Button({ type, disabled, value }) {
  return <input type={type} disabled={disabled} value={value} />;
}

export default Button;
