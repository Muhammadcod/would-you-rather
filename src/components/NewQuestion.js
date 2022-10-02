import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  };
  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;

    this.setState({
      [nam]: val
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: !id
    }));
  };

  render() {
    const { toHome, optionOne, optionTwo } = this.state;
    const conditions = [optionOne, optionTwo];

    const isDisabled = !conditions.every((condition) => condition.length);

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h3 className="my-5">New Question</h3>
        <div className="new-polls mt-5">
          <h3 className="center questioner">Create</h3>
          <div className="new-polls__input">
            <p className="text">Complete the question:</p>
            <span className="text-two">Would you rather...</span>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Option One Text Here"
                  name="optionOne"
                  // value={optionOne}
                  onChange={this.handleChange}
                />
              </div>
              <p className="text-two text-center mt-4 mb-0">OR</p>
              <div className="mb-3">
                <label
                  htmlFor="formGroupExampleInput2"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Option Two Text Here"
                  name="optionTwo"
                  // value={optionTwo}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={isDisabled}
                className="btn btn-custom"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
