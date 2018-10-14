import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContextProvider, { AppContext } from './ContextProvider';
import styled from 'styled-components';
import React, { Component } from 'react';

const NavLinks = styled.div`
  margin-left: 30px;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  a {
    color: white;
    font-size: 11px;
    font-weight: normal;
  }
`;

const NavItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center center;
  width: 100%;
  grid-template-columns: 30px 150px 50px;
  .menuButton {
    justify-self: end;
  }
`;

class Nav extends Component {
  state = {
    anchorEl: null,
    open: false,
    accountMenuVisible: false
  };
  handleClose = event => {
    this.setState({ open: false });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  // hack the account button on
  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.setState({ accountMenuVisible: true });
    }
    setTimeout(this.setState(this.state), 1000);
  }

  render() {
    return (
      <ContextProvider>
        <AppContext.Consumer>
          {context => {
            // console.log(JSON.stringify(context));

            return (
              <AppBar position="static">
                <Toolbar>
                  <NavItems>
                    <IconButton color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                      <Link href="/">
                        <a
                          style={{
                            color: 'white',
                            marginLeft: '-30px'
                          }}
                        >
                          Street Smart
                        </a>
                      </Link>
                    </Typography>
                    <NavLinks>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                      <Link href="/resources">
                        <a>Resources</a>
                      </Link>
                    </NavLinks>
                    {/* {context.state.isLoggedIn && ( */}
                    {this.state.accountMenuVisible && (
                      <div className="menuButton">
                        <IconButton onClick={this.handleMenu} color="inherit">
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                          }}
                          open={this.state.open}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={this.handleClose}>
                            My account
                          </MenuItem>
                        </Menu>
                      </div>
                    )}
                  </NavItems>
                </Toolbar>
              </AppBar>
            );
          }}
        </AppContext.Consumer>
      </ContextProvider>
    );
  }
}
export default Nav;
