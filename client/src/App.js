import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// Import components
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Homepage from './components/Homepage';

import {
  requestAllArticles,
  receiveAllArticles,
  receiveAllArticlesError,
} from './action';

const App = () => {
  const dispatch = useDispatch();

  // Fetch top headlines articles
  React.useEffect(() => {
    dispatch(requestAllArticles());
    fetch('http://localhost:4000/top-headlines')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data.data;
        dispatch(receiveAllArticles(articles));
      })
      .catch((err) => dispatch(receiveAllArticlesError()));
  }, []);

  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/article/:id'></Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </Container>
  );
};

export default App;
