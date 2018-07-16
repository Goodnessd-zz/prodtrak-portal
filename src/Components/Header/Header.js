import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

export default class Header extends Component {
  render() {
    return (
        <ul className ="header">
          <li id = "home-btn"> <Button> ProdTrak </Button> </li>
          <div className= "header-group">
            <li id = "auth-btn"> <Button> Login </Button> </li>
            <li id = "about-btn"> <Button>About </Button> </li>
          </div>
        </ul>
    )
  }
}
