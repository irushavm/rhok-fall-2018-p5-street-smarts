import React, { Component } from 'react';

export const AppContext = React.createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLoggedIn = () => {
    console.log('toggling something!');
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          toggleLoggedIn: this.toggleLoggedIn
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
