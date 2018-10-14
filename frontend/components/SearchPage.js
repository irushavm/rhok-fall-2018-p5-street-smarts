import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextLink from './styles/TextLink'
import ContextProvider, { AppContext } from './ContextProvider'
import Link from 'next/link'

export default class SearchPage extends Component {
  render() {
    let searchType;
    let filtered;
    const {type} = this.props.query;
    switch(type) {
      case 'sponsor':
      case 'job':
        searchType = type;
        break;
      default:
        return <div>ERROR</div>
    }
    return (
      <ContextProvider>
        <AppContext.Consumer>
          {context => {

            if(searchType === 'sponsor') {
              const { users, profilePics } = context.state;
              return(
              <div>
                <List>
                  {users.filter(e=> e.type === searchType).map(({name, candidateAgency, id, email}, ind) => 
                    <ListItem key={`${ind}`}>
                      <Card style={{width:"100%"}} raised>
                        <Grid container justify="center" alignItems="center" spacing={12}>
                          <Grid item xs={4} align="center" style={{position: "relative"}}>
                            <img src={profilePics[Math.floor(Math.random()*profilePics.length)]} style={{width:"60%", borderRadius: "50%", border: '5px solid #3f51b5'}}/>
                          </Grid>
                          <Grid container item xs={8}>
                            <Grid item xs={12} align="left">
                              <h1>{name}</h1>
                            </Grid>
                            <Grid item xs={12} align="left">
                              <p>{candidateAgency}</p>
                              <Divider/>
                            </Grid>
                            <Grid container item xs={12}>
                              <Grid item xs={6} align="center">
                                <Link href={`/sponsor?id=${id}`}><TextLink>More Info</TextLink></Link>
                              </Grid>
                              <Grid item xs={6} align="center">
                                <a href={`mailto:${email}`}><TextLink>Get in Touch</TextLink></a>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Card>
                    </ListItem>
                  )}
                    </List>
                    </div>
              )
              }
              // since each job only has an employee ID in the mocked data, the rendering will search for the
              // job creater (employer) and put that information with the rest of the job object
              const employerList = context.state.users.filter(e=> e.type === 'employer')
              return(
                <div>
                  <List> 
                  {
                  // finding the employer ID of each job and inserting the employer name in the job object
                  context.state.jobs.map(jobObject => ({
                    ...jobObject, 
                    employerName: employerList.find(employerObject=> employerObject.id === employerObject.id).name
                  }))
                  .map(({id, title, description, status, employerName}, ind) => 
                  <ListItem key={`${ind}`}>
                    <Card style={{width:"100%"}}>
                      <Grid container justify="center" alignItems="center" spacing={12}>
                        <Grid item xs={12} align="left">
                          <h1>{title}</h1>
                        </Grid>
                        <Grid item xs={12} align="left">
                          <p>{employerName}</p>
                          <Divider/>
                        </Grid>
                        <Grid item xs={12} align="left">
                          <p>{description.substring(0,20)}</p>
                          <Divider/>
                        </Grid>
                        <Grid container item xs={12}>
                          <Grid item xs={6} align="center">
                            <Link href={`/job?id=${id}`}><TextLink>More Info</TextLink></Link>
                          </Grid>
                          <Grid item xs={6} align="center">
                            <a href={`/job?id=${id}`}><TextLink>Apply</TextLink></a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </ListItem>
                )}
                </List>
                </div>
            )
          }}
          </AppContext.Consumer>
        </ContextProvider>
    )
  }
}
