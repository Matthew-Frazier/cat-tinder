import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

const Navbar = (props) => {

  const rightNavItems = ({ user, handleLogout }) => {
    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item 
            name="Logout"
            onClick={ () => handleLogout(props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item 
              name="Login"
              active={props.location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item 
              name="Register"
              active={props.location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      )
    }
  };

  return (
    <AuthConsumer>
      {/* auth has the value of everything in AuthContext */}
      { auth => 
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
              active={props.location.pathname === "/"}
              />
          </Link>
          { rightNavItems(auth) }
        </Menu>
      }
    </AuthConsumer>
  )
};

// withRouter allows access to the location and other props that come with <Route />
export default withRouter(Navbar);