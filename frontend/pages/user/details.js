import React, { Component } from 'react';
import UserDetails from '../../components/UserDetails';

export default class details extends Component {
  render(props) {
    return <UserDetails {...props} />;
  }
}
