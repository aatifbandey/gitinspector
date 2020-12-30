import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import Layout from "../components/Layout";

const Routes = () => {
    const renderedRoutes = (() => {
     
      return (
        <>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </>
      );
    })();
  
    return (
        <Layout>
          {renderedRoutes}
        </Layout>
    );
  };
  
//   Routes.propTypes = {
//     history: object.isRequired,
//     location: object.isRequired,
//     match: object.isRequired,
//     /**
//      * `staticContext` is whatever we passed as context to `<StaticRouter />` during SSR process
//      * check: `poseidon/server/renderer/index.js`
//      */
//     staticContext: object,
//   };
  
//   Routes.defaultProps = {
//     staticContext: null,
//   };
  
  const RootRoutes = () => <Route component={Routes} />;
  
  export default RootRoutes;
  