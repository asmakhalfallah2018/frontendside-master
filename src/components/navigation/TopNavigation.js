import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";

const body={
  backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmFW1Kv9br3HQLlfp6qtEnT-MRNy-IRBFfBZouKqfPU4l6Cm3OQ',
  width:' 90%' ,
  height: '90%' 
}

const TopNavigation = ({ user, logout }) => (
  <Menu  style={body} secondary pointing>
    
    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
