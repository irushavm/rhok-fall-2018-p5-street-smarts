import { Div, H2, Text, A } from 'styled-system-html';
import SiteFooter from '../components/SiteFooter';
import styled from 'styled-components';

const BackgroundImage = styled.img`
  width: 100%;
`;

export default props => (
  <Div>
    <Div p={6} maxWidth="1200px" mx="auto" textAlign="center">
      <BackgroundImage
        src="../../static/images/streetsmart04_final.jpg"
        alt="streetsmarts logo"
      />
      <H2 pt={5} pb={4}>
        Street Smart
      </H2>
      <Text pb={5}>
        For more info, go to the{' '}
        <A href="https://johnpolacek.github.io/styled-starter/">
          Styled Starter Project
        </A>
      </Text>
    </Div>
    <SiteFooter />
  </Div>
);
