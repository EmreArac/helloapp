import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return <div>{props.message}</div>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

Message.defaultProps = {
  message: 'Hello to my first App!',
};

export default Message;