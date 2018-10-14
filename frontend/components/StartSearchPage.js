import React, { Component } from 'react';
// import { Query } from 'react-apollo';
import styled from 'styled-components';
// import { logo } from '../static/favicon.png';
import Link from 'next/link';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const Container = styled.div`
  background-color: #fff;
  height: 90vh;
  display: grid;
  place-items: start center;
  /* grid-auto-flow: row; */
  padding: 80px 40px;
  .loginpanel {
    width: 100%;
    form {
      display: grid;
      grid-template-rows: 50px auto 50px 100px 50px auto 50px;
      grid-gap: 20px;
      justify-items: center;
      width: 100%;
      .dropdown {
        margin: 10px 0 0 0;
        height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
      div {
        width: 100%;
        input {
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
        }
      }
      button {
        color: rgba(0, 0, 0, 0.9);
        font-size: 14px;
        background-color: #93ceff;
      }
    }
  }
`;

export default class StartSearchPage extends Component {
  state = {
    sponsorsCity: '',
    jobsCity: '',
    cities: ['Ottawa', 'Toronto', 'Vancouver']
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit(event) {
    event.preventDefault();
    const {sponsorsCity, jobsCity} = event.target.elements;
    if(jobsCity === undefined) {
      Router.push({
        pathname: '/search',
        query: {
          type: 'sponsor',
          city: sponsorsCity.value
        }
      });
    }
    else if(sponsorsCity === undefined) {
      Router.push({
        pathname: '/search',
        query: {
          type: 'job',
          city: jobsCity.value
        }
      });
    }
    
  }
  render() {
    return (
      <Container>
        <div className="loginpanel">
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <h2>View Sponsors by City</h2>
            <Select
              className="dropdown"
              value={this.state.sponsorCity}
              onChange={this.handleChange}
              displayEmpty
              name="sponsorsCity"
            >
              <MenuItem value="''">-- All Cities --</MenuItem>
              {this.state.cities.map(city => (
                <MenuItem key={`${city}_sponsor_dropdown_item`} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>

            <Button fullWidth variant="raised" type="submit">
              Search
            </Button>

          </form>
          <span />
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
          
            <h2>View Jobs by City</h2>

            <Select
              className="dropdown"
              value={this.state.jobCity}
              onChange={this.handleChange}
              displayEmpty
              name="jobsCity"
            >
              <MenuItem value="''">-- All Cities --</MenuItem>
              {this.state.cities.map(city => (
                <MenuItem key={`${city}_sponsor_dropdown_item`} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>

            <Button fullWidth variant="raised" type="submit">
              Search
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
