import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ variant, size, ...props }) {
  return (
    <button className={variant} type="button">
      Button Example
      <br />
      {variant}
    </button>
  );
}

Button.propTypes = {
  /**
   * What background color to use
   */
  variant: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  onClick: undefined,
};

export default Button;
