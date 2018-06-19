import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const home={
  backgroundImage: 'url("https://i.pinimg.com/564x/ce/ef/bd/ceefbd868645b11a240e153244d18475.jpg")',

  width:' 90%' ,
  height: '90%' ,
  textAlign: 'center',
  margin : '50px',
  padding: '40px 40px '
}


class HomePage extends React.Component {
 
render() {
  return (
    <div style={home}>
     
        <div>
          <p style={{fontSize:'20px', textAlign:'center'}}>
          <Link   to="/login"><p style={{width:'8em',textAlign: 'center'
    ,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginTop:'7em',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
    color:'white'}} >Login </p></Link>
          </p>
          <div style={{fontSize:'20px', textAlign:'center'}}>
          <Link   to="/signup"><p style={{width:'8em',textAlign: 'center'
    ,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
    color:'white'}} >signup </p></Link>
          </div>
        </div>
      
    </div>
    );
  }
}
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
