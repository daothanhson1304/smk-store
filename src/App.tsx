import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import { TopSection } from './containers/TopSection/TopSection';
import { Footer } from './components/footer';
import { Home } from './features/Home/Home';
const AppContainer = tw.div`
flex
flex-col
w-full
h-full
overflow-hidden
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
