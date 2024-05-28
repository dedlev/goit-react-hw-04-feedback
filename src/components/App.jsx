import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { GlobalStyle } from 'GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const total = this.totalFeedback();
    const { good } = this.state;
    return total > 0 ? (good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    const positivePercentage = this.positivePercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
