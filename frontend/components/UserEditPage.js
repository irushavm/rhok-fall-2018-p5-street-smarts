import React, { Component } from "react";
// import { Query } from 'react-apollo';
import styled from "styled-components";
// import { logo } from '../static/favicon.png';
import Link from "next/link";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Router from 'next/router';

const Container = styled.div`
  background-color: #fff;
  height: 90vh;
  place-items: center center;
  /* grid-auto-flow: row; */
  padding: 80px 40px;
  grid-template-rows: repeat(3, 1fr);
  }
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
.checkboxes{
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 100px);
  width: auto;
}
.checkboxes2{
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
}
`;

export default class UserEditPage extends Component {
  state = {
    name: this.props.query.name,
    email: this.props.query.email,
    phone: "",
    city: "",
    industries: ["management", "natural sciences", "arts & entertainment"],
    industry: "",
    agencies: ["Operation Come Home", "Covenant House"],
    agency: "",
    aboutyourself: ""
  };

  onSubmit(event) {
    event.preventDefault()
    // const {name, email, phone, city, industry, contractFT, contractPT,contractCas, contractPerm, contractTemp, willingToRelocate } = event.target.elements

    Router.push({
      pathname: '/search',
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.table(this.state);
  };
  render() {
    return (
      <Container>
        <div>
          <p>Edit Profile</p>
        </div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <TextField
              label="Full Name"
              type="name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              type="phone"
              value={this.state.phone}
              onChange={this.handleChange("phone")}
              margin="normal"
              variant="outlined"
            />
            <p>Which agency do you go to?</p>
            <Select
              value={this.state.agency}
              onChange={this.handleChange}
              inputProps={{
                name: "agency",
                id: "agency"
              }}
            >
              <MenuItem value="">
                <em>-Select an agency-</em>
              </MenuItem>
              {this.state.agencies.map(agency => (
                <MenuItem key={agency} value={agency}>
                  {agency}
                </MenuItem>
              ))}
            </Select>
            <p>Which industry are you interested in?</p>
            <Select
              value={this.state.industry}
              onChange={this.handleChange}
              inputProps={{
                name: "industry",
                id: "industry"
              }}
            >
              <MenuItem value="">
                <em>No preference</em>
              </MenuItem>
              {this.state.industries.map(industry => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>

            <p>What type(s) of contract are you interested in?</p>
            <div className="checkboxes">
              <FormControlLabel
                control={<Checkbox value="checkedC" name="contractFT"/>}
                label="Full-time"
              />
              <FormControlLabel
                control={<Checkbox value="checkedC" name="contractPT" />}
                label="Part-time"
              />
              <FormControlLabel
                control={<Checkbox value="checkedC" name="contractCas" />}
                label="Casual"
              />
              <FormControlLabel
                control={<Checkbox value="checkedC" name="contractPerm" />}
                label="Permanent"
              />
              <FormControlLabel
                control={<Checkbox value="checkedC" name="contractTemp"  />}
                label="Temporary"
              />
            </div>
            <div className="checkboxes2">
              <FormControlLabel
                control={<Checkbox value="checkedC" name="willingToRelocate" />}
                label="Are you willing to relocate?"
              />
            </div>
            <p>Tell us about yourself</p>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="8"
              defaultValue=""
              margin="normal"
              variant="outlined"
            />
            <Link to="/welcome">
              <a>
                <Button variant="raised" type="submit">
                  Save Profile
                </Button>
              </a>
            </Link>
          </form>
        </div>
      </Container>
    );
  }
}
