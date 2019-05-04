import React from 'react';
import { Provider } from 'react-redux';
import ReduxStore from '../store';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from './Home';
import Recommendations from './Recommendations';
import Error404 from './Error404';

const ReduxStoreInstance = ReduxStore();

const App = () => (
  <Provider store={ReduxStoreInstance}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recommendations" component={Recommendations} />
      <Route exact path="/404" component={Error404} />
      <Route component={Error404} />
    </Switch>
  </Provider>
);

export default App;