import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <AllMeetups />
        </Route>
        <Route exact path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
};
