import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutContext from './Contexts/LayoutContext';
import Layout from './Component/Layout';
import routes, { IRoute } from './routes';

const App: React.FC = () => {
 
  return (
    <Router>
      <LayoutContext>
        <Layout>
          <div style={{ padding: 10 }}>
            <Switch>
              {/* <Route path="/blogs/:id">
              </Route> */}
              {routes.map((route: IRoute) => <Route exact path={route.link} component={route.component} key={route.text} />)}
            </Switch>
          </div>
        </Layout>
      </LayoutContext>
    </Router>
  );
}

export default App;
