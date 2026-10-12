import React from 'react';
import PropTypes from 'prop-types';

function Power(props) {
  const { x, y } = props;

  if (Number.isNaN(x) || Number.isNaN(y)) {
    return <div>Please enter two numbers.</div>;
  }

  const result = Math.pow(x, y);

  return (
    <div>
      {x}^{y} = {Number.isFinite(result) ? result : 'undefined'}
    </div>
  );
}

Power.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Power;