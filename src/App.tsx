import React from 'react';
import logo from './logo.svg';

import {AppContainer, HeaderWrapper, AppLink, LogoWrapper, Content, CodeWrapper} from "./styles";

function App() {
  return (
    <AppContainer>
      <HeaderWrapper>
        <LogoWrapper src={logo} alt="logo" />
        <Content>
          Edit <CodeWrapper>src/App.tsx</CodeWrapper> and save to reload.
        </Content>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </HeaderWrapper>
    </AppContainer>
  );
}

export default App;
