import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {HomePage} from './pages/home-page';
import {Header} from "./components/header";
import { store } from './redux';
import React from "react";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/'>
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;