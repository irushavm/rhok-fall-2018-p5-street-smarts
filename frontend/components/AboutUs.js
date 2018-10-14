import React, { Component } from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  width: 100%;
  p {
    font-size: 36px;
    color: #000;
  }
  h2 {
    color: rgba(19, 1, 40, 1);
  }
`;
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <p>About Street Smart</p>
        </PageTitle>
        <h2>Our Story</h2>
        <p>Lorem ipsum</p>
        <h2>Our Team</h2>
        <p>Lorem ipsum</p>
        <h2>Contact Us</h2>
        <p>Phone number: 613-000-9999</p>
      </div>
    );
  }
}
