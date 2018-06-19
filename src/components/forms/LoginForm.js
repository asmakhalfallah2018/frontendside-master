import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
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
const forg ={
   
Color: '#D19275',  
marginTop:'5em'
}
/*
const but = {
  backgroundColor:'#D19275' ,
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%' ,
    opacity: '0.9',
    
  }
  
 */

class LoginForm extends React.Component {
  
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
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (data.password.length<6 ) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div>
      <Form style={fr} onSubmit={this.onSubmit} loading={loading}>
      <h1 > Welcome! Please sign in </h1>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label  htmlFor="email" >Email</label>
          <input  style={inp}
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
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
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
      
       <div>
        <Button  id="submit" primary style={{width:'8em' ,display:'inline-block', backgroundColor:'#D19275'  }}>Login</Button>
        <Link   to="/"><p style={{width:'8em',textAlign: 'center'
,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
 color:'white'}} >Cancel </p></Link>

        </div>
        <div >
        <Link   to="/forgot_password"><p style={forg}>Forgot Password? </p></Link>
        </div>
        </Form>
</div>
      
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
