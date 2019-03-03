import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Barra extends Component {

  render() {
    if(this.props.voltar){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.botao} onPress={() => Actions.Principal()}>
              <Text style={styles.txtBotao}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.txtheader}>{this.props.titulo}</Text>
          </View>
        </View>
      );
    }
    if(this.props.pesquisar){
      return (
        <View style={styles.container}>
          <View style={styles.headerPesquisar}>
            <Text style={styles.txtheader}>{this.props.titulo}</Text>
            <TouchableOpacity>
              <Image style={{width: 30, height: 30, marginRight: 20}} source={require('../img/pesquisar.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={ styles.header}>
          <Text style={styles.txtheader}>{this.props.titulo}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  botao: {
    marginLeft: 15,
  },
  txtBotao: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#2E8B57',
    elevation: 5,
  },
  txtheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 15,
  },

  headerPesquisar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#2E8B57',
    elevation: 5,
    justifyContent: 'space-between',
  }
});
