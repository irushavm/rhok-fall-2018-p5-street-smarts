import React, { Component } from 'react';

export const AppContext = React.createContext();

class ContextProvider extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
    setTimeout(() => console.log('hooray!', this.state), 1000);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          handleLogin: this.handleLogin
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
