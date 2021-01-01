
import React from 'react';
import { Provider } from 'react-redux';
import { object } from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react'


import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorView from './components/ErrorView';

import { configureStore,  } from './store';

const { store, persistor } = configureStore({});
import Routes from './routes';

function App({ history }) {
  return (
    <Provider store={store}>
      	<PersistGate loading={null} persistor={persistor}>
    		<ErrorBoundary render={() => <ErrorView />}>
   				<Router history={history}>
        			<Routes />
        		</Router>
    		</ErrorBoundary>
      	</PersistGate>
    </Provider>
  );
}

App.propTypes = {
  history: object.isRequired,
};

export default App;
