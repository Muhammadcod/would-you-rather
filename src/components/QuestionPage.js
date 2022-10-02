import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleAddAnswerToQuestion } from '../actions/questions';
import { Redirect, withRouter } from 'react-router-dom';
import NoMatch from './NoMatch';

class QuestionPage extends Component {
  //Radio Buttons in React.js
  //http://react.tips/radio-buttons-in-reactjs/
  state = {
    selectedOption: ''
  };

  handleOptionChange = (e) => {
    const selectedOption = e.target.value;

    this.setState(() => ({
      selectedOption
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch, id, authedUser } = this.props;
    if (selectedOption !== '') {
      dispatch(handleAddAnswerToQuestion(authedUser, id, selectedOption));
    }

    this.setState(() => ({
      selectedOption: ''
    }));

    this.props.history.push(`/question/${id}`);
  };

  render() {
    const { question } = this.props;
    const { selectedOption } = this.state;

    const { name, avatar, optionOne, optionTwo, hasAnswered } = question;

    if (hasAnswered) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h3 className="my-5">Question > Question Detail</h3>

        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="polls mx-auto">
              <h5 className="questioner"> {name} asks:</h5>
              <div className="poll">
                <img
                  src={avatar}
                  alt={`Avatar of ${name}`}
                  className="avatar"
                />
                <div className="poll-info">
                  <div className="poll-info__text">
                    <span>Would you rather</span>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-check options">
                        <label className="">
                          <input
                            type="radio"
                            value="optionOne"
                            onChange={this.handleOptionChange}
                            checked={this.state.selectedOption === 'optionOne'}
                            className="form-check-input"
                          />
                          {optionOne.text}
                        </label>
                      </div>
                      <p className="options">or</p>
                      <div className="form-check options">
                        <label>
                          <input
                            type="radio"
                            value="optionTwo"
                            onChange={this.handleOptionChange}
                            checked={this.state.selectedOption === 'optionTwo'}
                            className="form-check-input"
                          />
                          {optionTwo.text}
                        </label>
                      </div>

                      <div className="poll-info__button mt-3">
                        <button
                          className="btn btn-custom"
                          // disabled={selectedOption === ''}
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  if (question === undefined || question === null) {
    return <NoMatch />;
  }
  return {
    id,
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
