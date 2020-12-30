
import React from 'react';
import { Provider } from 'react-redux';
import { object } from 'prop-types';


import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorView from './components/ErrorView';

import { configureStore } from './store';
// import Routes from '@route-gateway';

const store = configureStore({});
import Routes from './routes';

function App({ history }) {
  return (
    <Provider store={store}>
    	<ErrorBoundary render={() => <ErrorView />}>
   			<Router history={history}>
        	<Routes />
        </Router>
    	</ErrorBoundary>
    </Provider>
  );
}

App.propTypes = {
  client: object.isRequired,
  history: object.isRequired,
};

export default App;
