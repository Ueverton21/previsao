import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import TelaUmaSemana from './components/TelaUmaSemana';
import TelaDetalhes from './components/TelaDetalhes';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='Principal' component={Principal} initial/>
          <Scene key='TelaUmaSemana' component={TelaUmaSemana} />
          <Scene key='TelaDetalhes'  component={TelaDetalhes} />
        </Scene>
      </Router>
    );
  }
}
