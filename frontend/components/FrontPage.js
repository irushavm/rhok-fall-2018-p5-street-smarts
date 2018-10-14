import React, { Component } from 'react';
// import { Query } from 'react-apollo';
import styled from 'styled-components';
// import { logo } from '../static/favicon.png';
import Link from 'next/link';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContextProvider, { AppContext } from './ContextProvider';

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
      <ContextProvider>
        <AppContext.Consumer>
          {context => (
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

                  <Link href="/start-search">
                    <a>
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={context.handleLogin}
                      >
                        Log In
                      </Button>
                    </a>
                  </Link>
                  <Link href="/welcome?type=candidate">
                    <a>
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={context.handleLogin}
                      >
                        First-Time Log In
                      </Button>
                    </a>
                  </Link>
                </form>
              </div>

              <div className="aboutusvideo">
                <Link href="/about">
                  <a>About Us</a>
                </Link>
                <div className="videoDiv">[video goes here]</div>
              </div>
            </Container>
          )}
        </AppContext.Consumer>
      </ContextProvider>
    );
  }
}
