import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { GlobalStyle } from 'GlobalStyle';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = options;
  const total = good + neutral + bad;

  const positivePercentage = (good / total) * 100;

  const handleIncrement = option => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: prevOptions[option] + 1,
    }));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleIncrement}
        />
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
};
