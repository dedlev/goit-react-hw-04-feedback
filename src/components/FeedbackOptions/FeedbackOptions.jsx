import React from 'react';
import PropTypes from 'prop-types';
import { BlockOfButtons } from './FeedbackOptions.sytled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BlockOfButtons>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </BlockOfButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
