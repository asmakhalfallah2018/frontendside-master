import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";
import { Link } from "react-router-dom";



const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg',
  width:' 90%' ,
  marginBottom:'5em',
  height: '90%' 
 }
class ForgotPasswordPage extends React.Component {

  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div style={body}>
      <br/>
      <br/>
      <br/>

        {this.state.success ? (
          <div>
          <Message>Email has been sent. Please check your mail and reset your password </Message>
          <Link   to="/"><p style={{width:'8em',textAlign: 'center'
,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
 color:'white'}} >Cancel </p></Link>
 </div>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
         <br/>
         <br/>
         <br/>
         
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
