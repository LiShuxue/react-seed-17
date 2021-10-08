import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

const Page1 = React.lazy(() => import(/* webpackChunkName: 'page1' */ './pages/page1'));
const Page2 = React.lazy(() => import(/* webpackChunkName: 'page2' */ './pages/page2'));
const Page3 = React.lazy(() => import(/* webpackChunkName: 'page3' */ './pages/page3'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path="/page1">
              <Page1 />
            </Route>
            <Route exact path="/page2">
              <Page2 />
            </Route>
            <Route exact path="/page3">
              <Page3 />
            </Route>
            <Redirect to="/page1" />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
