import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import { Link } from "react-router-dom";

const fr ={
  textAlign: 'center',
  marginTop:'8em'
}
const inp ={

  textAlign: 'center',
  width:' 40%' ,
  backgroundColor: '#FFFAFA'
}



   
class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (data.password.length<6) errors.password = 
    "Password should contain at least six letters ";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form  style={fr} onSubmit={this.onSubmit} loading={loading}>
       <h1> Welcome! Please sign up </h1>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input style={inp}
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input style={inp}
            type="password"
            id="password"
            name="password"
            placeholder="keep it secret"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <div>
        <Button   style={{width:'8em' ,display:'inline-block', backgroundColor:'#D19275' }} primary>Sign Up</Button>
        <Link   to="/"><p style={{width:'8em',textAlign: 'center'
,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
 color:'white'}} > Cancel </p></Link>
 </div>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
