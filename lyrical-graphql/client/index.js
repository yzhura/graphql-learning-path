import React from 'react';
import ReactDOM from 'react-dom/client';
// import ApolloClient from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({uri:'http://localhost:4000/graphql',cache: new InMemoryCache()});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SongList}/>
          <Route path='song/new' component={SongCreate}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Root />
);
