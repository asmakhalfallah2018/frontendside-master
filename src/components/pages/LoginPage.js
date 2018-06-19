import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg',
  width:' 90%' ,
  height: '90%' 

}

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/accueil"));

  render() {
    return (
      <div style={body}>
     <br/>
     <br/>
  
    
<p style={{marginTop:'8em'}}>
        <LoginForm submit={this.submit} />
</p>
<br/>
  
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
