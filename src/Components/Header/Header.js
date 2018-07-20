import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import { NavLink} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <ul className ="header">
          <li id = "home-btn"> <NavLink to = "/"> <Button>ProdTrak</Button> </NavLink> </li>
          <div className= "header-group">
            <li id = "auth-btn"> <NavLink to = "/"> <Button>Login</Button> </NavLink> </li>
            <li id = "about-btn"> <NavLink to = "/about"><Button>About</Button> </NavLink> </li>
          </div>
        </ul>
    )
  }
}
