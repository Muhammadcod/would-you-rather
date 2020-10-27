import React, {Component} from "react";
import {connect} from "react-redux";
import QuestionPage from "./QuestionPage";
import PollResult from "./PollResult";
import {formatQuestion} from "../utils/helpers";
import {Redirect} from "react-router-dom";
import NoMatch from "./NoMatch";
// import {Link} from "react-router-dom";

class View extends Component {
    render() {
        const {question, id} = this.props;

        const { hasAnswered} = question;

        if(question === false) {
            return <NoMatch />
        }

        return (
            <>

                {hasAnswered === true ? (
                    <PollResult id={id} />
                ) : (
                    <QuestionPage id={id} />
                )}
            </>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, props) {

    const {id} = props.match.params;
    console.log('scat',typeof id)

    const question = questions[id];
    console.log('scale',typeof question)

    if(question === undefined || question === null) {
        return {
            question: false,
        }
    }

    return {
        id,
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
    };
}

export default connect(mapStateToProps)(View)
