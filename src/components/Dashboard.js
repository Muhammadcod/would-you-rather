import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

class Dashboard extends Component {
  render() {
    const { unanswered, answered } = this.props;

    return (
      <div className="container">
        <div className="mb-5 mx-3">tabs</div>

        <div className="row g-3">
          {unanswered.map((question) => (
            <GameCard key={question.id} id={question.id} />
          ))}
        </div>
        {/*<Tabs>
          <div label="Unanswered Questions">
            <div className="row">
              {unanswered.map((question) => (
                <GameCard key={question.id} id={question.id} />
              ))}
            </div>
          </div>
          <div label="Answered Questions">
            <ul className="dashboard-list">
              {answered.map((question) => (
                <li key={question.id}>
                  <Question id={question.id} />
                </li>
              ))}
            </ul>
          </div>
        </Tabs>*/}
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
