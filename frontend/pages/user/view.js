import React, { Component } from 'react';
import UserView from '../../components/UserView';

export default class view extends Component {
  render(props) {
    return <UserView {...props} />;
  }
}
