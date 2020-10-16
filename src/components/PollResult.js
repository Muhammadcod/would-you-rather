import React, {Component} from "react";
import {connect} from "react-redux";
import {formatQuestion, percentage} from "../utils/helpers";

class PollResult extends Component {
    render() {
        const {question} = this.props;
        const {
            name,
            avatar,
            per,
            optionOne,
            optionTwo,
            UsersWhoVotedOne, // No of users who picked option one
            UsersWhoVotedTwo, // No of users who picked option two
            hasAnsweredOne,
            hasAnsweredTwo,
            totalVotes,
        } = question;

        const perPeopleWhoVotedOne = percentage(UsersWhoVotedOne, totalVotes, per);
        // Percentage of people who voted for option one

        const perPeopleWhoVotedTwo = percentage(UsersWhoVotedTwo, totalVotes, per);
        // Percentage of people who voted for option two

        return (
            <div className="polls">
                <h5 className="questioner"> Asked by {name}</h5>
                <div className="poll">
                    <img src={avatar} alt="" className="avatar"/>
                    <div className="poll-info ">
                        <div className="mb-2 result">Results:</div>
                        {hasAnsweredOne ? (
                            <div className="option-one border" style={{background: `#83c283`}} >
                                <span className='stamp small'><p className='small'>your <br /> vote</p></span>
                                <p>Would you rather {optionOne.text}</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${perPeopleWhoVotedOne}%`,
                                        }}
                                        aria-valuenow={perPeopleWhoVotedOne}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {perPeopleWhoVotedOne.toFixed(1)}%
                                    </div>
                                </div>
                                <p className="text-center">
                                    {UsersWhoVotedOne} of {totalVotes}
                                </p>
                            </div>
                        ) : (
                            <div className="option-one border">
                                <p>Would you rather {optionOne.text}</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${perPeopleWhoVotedOne}%`,
                                        }}
                                        aria-valuenow={perPeopleWhoVotedOne}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {perPeopleWhoVotedOne.toFixed(1)}%
                                    </div>
                                </div>
                                <p className="text-center">
                                    {UsersWhoVotedOne} of {totalVotes}
                                </p>
                            </div>
                        )}
                        {hasAnsweredTwo ? (
                            <div className="option-two border" style={{background: `#83c283`}}>
                                <span className='stamp small'><p className='small'>your <br />vote</p></span>

                                <p>Would you rather {optionTwo.text}</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${perPeopleWhoVotedTwo}%`,
                                        }}
                                        aria-valuenow={perPeopleWhoVotedTwo}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {perPeopleWhoVotedTwo.toFixed(1)}%
                                    </div>
                                </div>
                                <p className="text-center">
                                    {UsersWhoVotedTwo} of {totalVotes}
                                </p>
                            </div>
                        ) : (
                            <div className="option-two border">
                                <p>Would you rather {optionTwo.text}</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${perPeopleWhoVotedTwo}%`,
                                        }}
                                        aria-valuenow={perPeopleWhoVotedTwo}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {perPeopleWhoVotedTwo.toFixed(1)}%
                                    </div>
                                </div>
                                <p className="text-center">
                                    {UsersWhoVotedTwo} of {totalVotes}
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props.match.params;
    const question = questions[id];

    return {
        id,
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
    };
}

export default connect(mapStateToProps)(PollResult);
