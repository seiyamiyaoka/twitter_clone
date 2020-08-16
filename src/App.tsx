import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from './actions/authenticate'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import TweetForm from './pages/TweetForm'
import './App.css';

export default function App() {
  return (
    <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home title="hello"/>
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route path="/tweets"
                   render={( { match: { url } } ) => (     
              <>
                <Route path={`${url}/`} component={Users} exact />
                <Route path={`${url}/new`} component={TweetForm} />
              </>
            )}
            />
          </Switch>
        </Router>
    </AuthProvider>
  );
}

function Users() {
  return <h2>Users</h2>;
}
