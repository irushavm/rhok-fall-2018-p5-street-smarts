import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContextProvider, { AppContext } from './ContextProvider';
const Nav = () => {
  return (
    <ContextProvider>
      <AppContext.Consumer>
        {context => (
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Street Smart
              </Typography>
              {context.isLoggedIn && (
                <div>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                  <Link href="/resources">
                    <a>Resources</a>
                  </Link>
                  <IconButton onClick={this.handleMenu} color="inherit">
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        )}
      </AppContext.Consumer>
    </ContextProvider>
  );
};

export default Nav;
