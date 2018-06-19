import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import { Link } from "react-router-dom";


const home={
  backgroundImage: 'url("https://media.istockphoto.com/photos/wood-texture-with-natural-patterns-background-picture-id483367692?k=6&m=483367692&s=612x612&w=0&h=_EKmrYs-PmHZAJaC5VyQXwRcqM_68jr5WsEsnNtqoc8=")',

  width:' 90%' ,
  height: '90%' ,
  textAlign: 'center',
  margin : '50px',
  padding: '40px 40px '
} 
class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: ""
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
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <div style={home}>
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <p>
                <Button  primary style={{width:'8em' ,display:'inline-block', backgroundColor:'#D19275'  }}>Reset </Button>
<Link   to="/login"><p style={{width:'8em',textAlign: 'center',fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
 color:'white'}} >Cancel </p></Link>
 </p>
      
      </Form>
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
