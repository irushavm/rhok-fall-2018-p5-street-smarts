import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ContextProvider, { AppContext } from './ContextProvider';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const PersonCard = styled.div`
  .card {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1.7fr;
    img {
      width: 100%;
    }
    .subtitle {
      padding: 10px 0;
      font-size: 15px;
      font-family: 'Roboto';
    }
  }
  .contentAndActions {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .cardActions {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export default class UserView extends Component {
  state = {
    isCandidatesPage: true,
    people: [
      {
        sponsor: {
          name: 'Diana Prince',
          subtitle: 'Management Occupations',
          image:
            'https://i.pinimg.com/originals/06/e8/10/06e81024faeca13fb353d79802105ff3.jpg'
        },
        candidate: {
          name: 'Ned Stark',
          subtitle: 'Interested in Management Occupations',
          image: 'https://image.ibb.co/kvCFr9/ned.png'
        }
      },
      {
        sponsor: {
          name: 'Sponsor 2',
          subtitle: 'Health Occupations',
          image: 'https://picsum.photos/250/250'
        },
        candidate: {
          name: 'Candidate 2',
          subtitle: 'Interested in Health Occupations',
          image: 'https://picsum.photos/251/251'
        }
      }
    ]
  };
  render() {
    // const { type } = this.props.query;
    const { people, isCandidatesPage } = this.state;
    console.log(this.props);
    return (
      <ContextProvider>
        <AppContext.Consumer>
          {context => {
            return (
              <Container>
                <h2>
                  {isCandidatesPage ? 'Candidates' : 'Sponsors'} in [City]
                </h2>
                {people.map(each => {
                  return (
                    <PersonCard key={JSON.stringify(each)}>
                      <Card className="card">
                        <img
                          src={
                            isCandidatesPage
                              ? each.candidate.image
                              : each.sponsor.image
                          }
                          alt={
                            isCandidatesPage
                              ? each.candidate.subtitle
                              : each.sponsor.subtitle
                          }
                        />
                        <div className="contentAndActions">
                          <CardContent className="cardContent">
                            <Typography component="h3" variant="h3">
                              {isCandidatesPage
                                ? each.candidate.name
                                : each.sponsor.name}
                            </Typography>
                            <Typography
                              className="subtitle"
                              variant="subtitle2"
                              color="textSecondary"
                            >
                              {isCandidatesPage
                                ? each.candidate.subtitle
                                : each.sponsor.subtitle}
                            </Typography>
                            <Divider />
                          </CardContent>
                          <CardActions className="cardActions">
                            <Button
                              size="large"
                              variant="outlined"
                              color="primary"
                            >
                              View Profile
                            </Button>
                            <Button
                              size="large"
                              variant="contained"
                              color="primary"
                            >
                              Get in Touch
                            </Button>
                          </CardActions>
                        </div>
                      </Card>
                    </PersonCard>
                  );
                })}
              </Container>
            );
          }}
        </AppContext.Consumer>
      </ContextProvider>
    );
  }
}
