import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'stores/store';
import { Header, Content, Footer } from 'components/+Layout';
import { Toolbar, Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Header />
          <Toolbar />
          <Toolbar />
          <Content />
        </Router>
      </Container>
      <Toolbar />
      <Footer />
    </Provider>
  );
}

export default App;
