import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Quadrodia from './Quadrodia';
import Barra from './Barra';

export default class TelaUmaSemana extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Barra titulo={'Previsão 7 Dias'} voltar/>

        <ScrollView>
          {this.props.dados.data.map(dados => <Quadrodia key={dados.date} data={dados} num={dados.num}/>)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
