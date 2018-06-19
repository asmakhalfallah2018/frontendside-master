import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg',
  width:' 90%' ,
  marginBottom:'5em',
  height: '90%' 
 }
class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/login"));

  render() {
    return (
      <div style={body}>
         <br/>
         <br/>
         <br/>

        <SignupForm submit={this.submit} />
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
