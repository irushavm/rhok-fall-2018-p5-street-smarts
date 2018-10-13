import { Flex, Box } from 'grid-styled';
import { Div, Nav, Img, Span } from 'styled-system-html';
import Link from 'next/link';
import SiteNavLink from './SiteNavLink';
import SiteNavLinkExternal from './SiteNavLinkExternal';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ContextProvider, { AppContext } from './ContextProvider';

export default props => (
  <ContextProvider>
    <AppContext.Consumer>
      {context => (
        <Div bg="base" position="fixed" zIndex="9999" width={1}>
          <Nav bg="rgba(0,0,0,.2)" textAlign="left" px={[2, 0, 2]}>
            <Flex
              flexWrap="wrap"
              fontSize={[1, 2]}
              style={{
                display: 'grid',
                alignItems: 'center',
                gridAutoFlow: 'column',
                gridTemplateColumns: '100px repeat(auto-fill, 60px) 1fr 50px'
              }}
            >
              <SiteNavLink url="/" isCurrent={props.current === 'Index'}>
                Street Smart
              </SiteNavLink>
              <SiteNavLink url="/about" isCurrent={props.current === 'About'}>
                About
              </SiteNavLink>
              <button
                isCurrent={props.current === 'About'}
                onClick={context.toggleLoggedIn}
              >
                Login/out
              </button>
              <span />
              <Box ml="auto">
                <Div
                  position={['absolute', 'relative']}
                  top={['36px', 0]}
                  right="0"
                >
                  {context.state.isLoggedIn && (
                    <IconButton
                      aria-label="Account"
                      onClick={context.toggleLoggedIn}
                    >
                      <AccountIcon style={{ color: 'white' }} />
                    </IconButton>
                  )}
                </Div>
              </Box>
            </Flex>
          </Nav>
        </Div>
      )}
    </AppContext.Consumer>
  </ContextProvider>
);
