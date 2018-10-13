import React, { Component } from 'react';
// import { Query } from 'react-apollo';
import styled from 'styled-components';
// import { logo } from '../static/favicon.png';
import Link from 'next/link';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  background-color: #fff;
  height: 90vh;
  display: grid;
  place-items: center center;
  /* grid-auto-flow: row; */
  padding: 80px 40px;
  grid-template-rows: repeat(3, 1fr);
  .logoAndBackground {
    /* background-color: rgba(0, 0, 0, 0.2); */
    /* height: 100%; */
    width: 70%;
    img {
      width: 100%;
      /* height: auto; */
    }
  }
  .loginpanel {
    width: 100%;
    form {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-gap: 10px;
      justify-items: center;
      width: 100%;
      div {
        width: 100%;
        input {
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
        }
      }
      button {
        width: 150px;
      }
    }
  }
  .aboutusvideo {
    height: 100%;
    width: 100%;
    grid-template-rows: 24px 1fr;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 40px;
    grid-gap: 10px;
    .videoDiv {
      display: grid;
      justify-items: center;
      align-items: center;
      height: 100%;
      width: 100%;
      background: aliceblue;
    }
  }
`;

export default class FrontPage extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.table(this.state);
  };
  render() {
    return (
      <Container>
        <div className="logoAndBackground">
          <img src="https://picsum.photos/300/300" />
        </div>

        <div className="loginpanel">
          <form noValidate autoComplete="off">
            <TextField
              label="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              variant="outlined"
            />

            {/* <input type="password" /> */}
            <Link to="/welcome">
              <a>
                <Button variant="raised" type="submit">
                  Log In
                </Button>
              </a>
            </Link>
            <Link to="/welcome">
              <a>
                <Button variant="raised" type="submit">
                  First-Time Log In
                </Button>
              </a>
            </Link>
          </form>
        </div>

        <div className="aboutusvideo">
          <Link to="/about">
            <a>About Us</a>
          </Link>
          <div className="videoDiv">[video goes here]</div>
        </div>
      </Container>
    );
  }
}
