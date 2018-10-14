import React, { Component } from 'react';
import Link from 'next/link';
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
  .backButton {
    width: 150px;
  }
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
    grid-template-columns: 1fr;
    padding: 0 50px;
    * {
      font-size: 14px;
    }
  }
  .cardDetails {
    display: grid;
    grid-auto-flow: row;
    .subtitle {
      padding: 10px 0;
      font-size: 15px;
      font-family: 'Roboto';
    }
    .cardContent .image {
      margin: 15px 0 20px 0;
      display: grid;
      justify-items: center;
    }
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
    // console.log(this.props.query);
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
                  {isCandidatesPage
                    ? 'Candidate Information'
                    : 'Sponsor Information'}
                </h2>
                <PersonCard>
                  <Card className="card">
                    <img
                      src={
                        isCandidatesPage
                          ? people[0].candidate.image
                          : people[0].sponsor.image
                      }
                      alt={
                        isCandidatesPage
                          ? people[0].candidate.subtitle
                          : people[0].sponsor.subtitle
                      }
                    />
                    <div className="contentAndActions">
                      <CardContent className="cardContent">
                        <Typography component="h3" variant="h3">
                          {isCandidatesPage
                            ? people[0].candidate.name
                            : people[0].sponsor.name}
                        </Typography>
                        <Typography
                          className="subtitle"
                          variant="subtitle2"
                          color="textSecondary"
                        >
                          {isCandidatesPage
                            ? people[0].candidate.subtitle
                            : people[0].sponsor.subtitle}
                        </Typography>
                        <Divider />
                      </CardContent>
                      <CardActions className="cardActions">
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

                  <Card className="cardDetails">
                    <CardContent className="cardContent">
                      <div className="image">
                        <img src="https://i.imgur.com/fdxn9x3.png" />
                      </div>
                      <Typography component="h3" variant="h3">
                        Interests
                      </Typography>
                      <Typography
                        className="subtitle"
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        <ul>
                          <li>I like things, I have many interests</li>
                          <li>
                            I am a hard worker sit amet consectetur adipisicing
                            elit. Facilis, sequi!
                          </li>
                          <li>
                            In my spare time I ipsum dolor sit amet, consectetur
                            adipisicing elit. Deleniti, libero.
                          </li>
                        </ul>
                      </Typography>
                      <Divider />
                    </CardContent>
                  </Card>
                </PersonCard>
                <Link href="/search?type=sponsor&city=">
                  <a>
                    <Button variant="contained" className="backButton">
                      Back to Search
                    </Button>
                  </a>
                </Link>
              </Container>
            );
          }}
        </AppContext.Consumer>
      </ContextProvider>
    );
  }
}
