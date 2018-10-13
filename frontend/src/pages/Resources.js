import React, { Component } from 'react'
import Page from '../containers/Page'
export default class Resources extends Component {
  render() {
    return (
      <div>
          <h1>Resources</h1>
        <h2>Job Search</h2>
        <ul>
            <li><a href="https://www.greatresumesfast.com/blog/2017/11/13/resume-writing-tips-for-2018-2/">Resume Tips</a></li>
            <li><a href="https://www.livecareer.com/career/advice/interview/job-interview-tips">Interview Tips</a></li>
            </ul>
        
        <h2>Mentorship Resources</h2>
        <ul>
          <li>Mentoship guides</li>
          <li>How to build rapport with your mentee</li>
        </ul>
        <h2>Resources for Employers</h2>
          <ul>
            <li>What to expect from us</li>
            <li>Code of conduct</li>
            </ul>
      </div>
    )
  }
}
