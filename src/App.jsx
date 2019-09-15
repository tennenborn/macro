import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import Header from './components/Header/Header';
import Module from './Module';

export default class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Switch>
          <Suspense fallback={<h2>Loading..</h2>}>
            <Route path="/" component={ Module } />
          </Suspense>
        </Switch>
      </>
    );
  }
};