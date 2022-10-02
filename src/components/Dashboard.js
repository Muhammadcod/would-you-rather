import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';
import PageTabs from './PageTabs';

class Dashboard extends Component {
  render() {
    const { unanswered, answered } = this.props;

    const tabs = [
      {
        tabId: 'unanswered',
        title: 'Unanswered',
        component: () => <GameCard data={unanswered} />
      },
      {
        tabId: 'answered',
        title: 'Answered',
        component: () => <GameCard data={answered} />
      }
    ];

    return (
      <div className="container">
        <h3 className="my-5">Dashboard</h3>

        <PageTabs
          tabs={tabs.filter((item) => item !== null)}
          defaultTab="unanswered"
        />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered
  };
}

export default connect(mapStateToProps)(Dashboard);
