import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
      return (
        <header className="center-text center">
          <Link to="/">
            <h1 className="header-logo"> 
              <img
                className="responsive m-em s-margin-r"
                alt={`douglasrcjames logo`}
                src={require(`../assets/images/logo/link_head.png`)}
                />
              douglasrcjames.com
            </h1>
          </Link>
          {/* <h2 className="no-margin no-padding">Hi, I'm Doug and I fix bugs.</h2> */}
          <NavLink to="/" exact={true} className="nav-link" activeClassName="nav-select">
            About Me
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to="/experience/" exact={true} className="nav-link" activeClassName="nav-select">
            Experience
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to="/gallery/" exact={true} className="nav-link" activeClassName="nav-select">
            Gallery
          </NavLink>
        </header>
      );
    }
}

export default Header;
