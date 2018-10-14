import React, { Component } from 'react'
import styled from 'styled-components'

const PageTitle = styled.div`
width:100%;
p {
  font-size:36px;
  color: #000;
}
h2 {
  color: rgba(19, 1, 40, 1);
}
`
export default class ResourcesPage extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <p>Resources</p>
        </PageTitle>
        <h2>Job Search</h2>
        <ul>
          <li>Resume Tips</li>
          <li>Preparing for an Interview</li>
          <li><a href="https://www.livecareer.com/career/advice/interview/job-interview-tips">Interview tips</a></li>
        </ul>
        <h2>Mentorship</h2>
          <li>Mentorship Guides</li>
          <li>How to build rapport with your mentee</li>
        <h2>Employers</h2>
          <li>What to expect from us</li>
      </div>
    )
  }
}
