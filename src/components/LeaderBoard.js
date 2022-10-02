import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopThree from './TopThree';

class LeaderBoard extends Component {
  render() {
    const { boardDetails } = this.props;

    const topThree = boardDetails.filter((_, idx) => idx < 3);
    const reOrdered = [topThree[1], topThree[0], topThree[2]];

    return (
      <>
        <div className="container">
          <h3 className="mt-3">Leaderboard</h3>
          <div className="row py-5">
            <div className="col-md-7">
              <TopThree data={reOrdered} />
            </div>
            <div className="col-md-5">
              {boardDetails.map((user, index) => (
                <div key={user.id} className="board">
                  <img
                    src={user.avatar}
                    alt={`Avatar of ${user.name}`}
                    className="avatar"
                  />
                  <div className="profile">
                    <h3 className="profile-name">{user.name}</h3>
                    <div className="profile-stat">
                      <p className="profile-stat--label">Answered Question</p>
                      <p className="no--of--question-created">
                        {user.userAnswers}
                      </p>
                    </div>
                    <div className="profile-stat">
                      <p className="profile-stat--label">Created Questions</p>
                      <p className="no--of--question--answered">
                        {user.userQuestions}
                      </p>
                    </div>
                  </div>
                  <div className="score">
                    <div className="score-details">
                      <span className="border">Score</span>
                      <span className="border">
                        <span>{user.score}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps({ users }) {
  const boardDetails = Object.values(users)
    .map((user) => ({
      score:
        Object.values(users[user.id].answers).length +
        users[user.id].questions.length,
      userQuestions: users[user.id].questions.length,
      userAnswers: Object.values(users[user.id].answers).length,
      id: user.id,
      name: user.name,
      avatar: user.avatarURL
    }))
    .sort((a, b) => b.score - a.score);

  console.log('+++', boardDetails);

  return {
    boardDetails
  };
}

export default connect(mapStateToProps)(LeaderBoard);
