import React, { Component } from 'react';
import mockedData from '../resources/mockData'

export const AppContext = React.createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      ...mockedData
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
    setTimeout(() => location.reload(), 1000);
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
