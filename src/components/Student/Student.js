import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {}
    };

    // this.goBackButton = this.goBackButton.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ studentInfo: response.data });
      });
  }

  goBackButton = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props.history);
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        <h3>{this.state.studentInfo.grade}</h3>
        <h3>{this.state.studentInfo.email}</h3>
        <button onClick={this.goBackButton}>Go Back</button>
      </div>
    );
  }
}
