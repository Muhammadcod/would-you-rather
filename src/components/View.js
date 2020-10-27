import React, {Component} from "react";
import {connect} from "react-redux";
import QuestionPage from "./QuestionPage";
import PollResult from "./PollResult";
import {formatQuestion} from "../utils/helpers";
// import {Link} from "react-router-dom";

class View extends Component {
    render() {
        const {question, id} = this.props;

        const { hasAnswered} = question;


        return (
            <>

                {hasAnswered === true ? (
                    <PollResult id={id} />
                ) : (
                    <QuestionPage />
                )}
            </>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, props) {

    const {id} = props.match.params;
    console.log('scat',id)

    const question = questions[id];

    return {
        id,
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
    };
}

export default connect(mapStateToProps)(View)
