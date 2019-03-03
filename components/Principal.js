import React, { Component } from 'react';
import {
  Platform,
  TextInput,
  StyleSheet,
  ToastAndroid,
  ImageBackground,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  Text,
  NetInfo,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Barra from './Barra';

const img1 = require('../img/1.png');
const img1n = require('../img/1n.png');
const img2 = require('../img/2.png');
const img2n = require('../img/2n.png');
const img2r = require('../img/2r.png');
const img2rn = require('../img/2rn.png');
const img3 = require('../img/3.png');
const img3n = require('../img/3n.png');
const img3tm = require('../img/3tm.png');
const img4 = require('../img/4.png');
const img4n = require('../img/4n.png');
const img4r = require('../img/4r.png');
const img4rn = require('../img/4rn.png');
const img4t = require('../img/4t.png');
const img4tn = require('../img/4tn.png');
const img5 = require('../img/5.png');
const img5n = require('../img/5n.png');
const img6 = require('../img/6.png');
const img6n = require('../img/6n.png');
const img7 = require('../img/7.png');
const img7n = require('../img/7n.png');
const img8 = require('../img/8.png');
const img8n = require('../img/8n.png');
const img9 = require('../img/9.png');
const img9n = require('../img/9n.png');

export default class Principal extends Component {

  state = {
    txtCidade: '', txtEstado: '',
    dados: {
      data:[
        
      ]
    },
  };
  getImagem(textoImagem){
    if(textoImagem==='1'){
      return img1;
    }
    else if(textoImagem==='1n'){
      return img1n;
    }
    else if(textoImagem==='2'){
      return img2;
    }
    else if(textoImagem==='2n'){
      return img2n;
    }
    else if(textoImagem==='2r'){
      return img2r;
    }
    else if(textoImagem==='2rn'){
      return img2rn;
    }
    else if(textoImagem==='3'){
      return img3;
    }
    else if(textoImagem==='3n'){
      return img3n;
    }
    else if(textoImagem==='3tm'){
      return img3tm;
    }
    else if(textoImagem==='4'){
      return img4;
    }
    else if(textoImagem==='4n'){
      return img4n;
    }
    else if(textoImagem==='4r'){
      return img4r;
    }
    else if(textoImagem==='4rn'){
      return img4rn;
    }
    else if(textoImagem==='4t'){
      return img4t;
    }
    else if(textoImagem==='4tn'){
      return img4tn;
    }
    else if(textoImagem==='5'){
      return img5;
    }
    else if(textoImagem==='5n'){
      return img5n;
    }
    else if(textoImagem==='6'){
      return img6;
    }
    else if(textoImagem==='6n'){
      return img6n;
    }
    else if(textoImagem==='7'){
      return img7;
    }
    else if(textoImagem==='7n'){
      return img7n;
    }
    else if(textoImagem==='8'){
      return img8;
    }
    else if(textoImagem==='8n'){
      return img8n;
    }
    else if(textoImagem==='9'){
      return img9;
    }
    else if(textoImagem==='9n'){
      return img9n;
    }
  }

  /*async componentDidMount(){
    this.setState({dados: { data: []}});

    //Pesquisa cidade e estado para obter o ID cidade
    const codigo = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=Quijingue&state=Ba&token=8a08068d35e783606ba6fc82913ac333`) || null;
    const responseCod = await codigo.json();
    
    ToastAndroid.show(responseCod[0].id+'',ToastAndroid.LONG);

    //Verifica se foi retornado indefinido
    if(responseCod[0] !== undefined){
      //Usa o código da cidade para pesquisar a previsão
      const repoCall = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${responseCod[0].id}/days/15?token=8a08068d35e783606ba6fc82913ac333`);
      const response  = await repoCall.json();
      
      //Pegar o array de dados dos dias que é retornado pela API
      const arrayData = new Array();

      var img;

      for(var i=0; i<7; i++){
        
        if(response.data[i].text_icon.text.pt==="Sol com algumas nuvens"){
          img = require('../img/2.png');
        }
        else if(response.data[i].text_icon.text.pt==="Sol, pancadas de chuva e trovoadas."){
          img = require('../img/4t.png');
        }
        else if(response.data[i].text_icon.text.pt==="Sol"){
          img = require('../img/1.png');
        }
        else if(response.data[i].text_icon.text.pt==="Sol com muitas nuvens e chuva"){
          img = require('../img/4r.png');
        }
        else if(response.data[i].text_icon.text.pt==="Sol com muitas nuvens"){
          img = require('../img/2r.png');
        }
        else if(response.data[i].text_icon.text.pt==="Chuvoso"){
          img = require('../img/5.png');
        }
        else if(response.data[i].text_icon.text.pt==="Sol e Chuva"){
          img = require('../img/4.png');
        }
        else if(response.data[i].text_icon.text.pt==="Geada"){
          img = require('../img/7.png');
        }
        else{
          img = require('../img/3tm.png');
        }

        arrayData[i] = {
          date: response.data[i].date_br,
          rain: {
            possibilidade: response.data[i].rain.probability, 
            precipitacao: response.data[i].rain.precipitation,
          },
          texto: {
            pt: response.data[i].text_icon.text.pt,
            manha: response.data[i].text_icon.text.phrase.morning,
            tarde: response.data[i].text_icon.text.phrase.afternoon,
            noite: response.data[i].text_icon.text.phrase.night,
          }, 
          temperatura: {
            min: response.data[i].temperature.min,
            max: response.data[i].temperature.max,
            manha: {
              min: response.data[i].temperature.morning.min,
              max: response.data[i].temperature.morning.max,
            },
            tarde: {
              min: response.data[i].temperature.afternoon.min,
              max: response.data[i].temperature.afternoon.max,
            },
            noite: {
              min: response.data[i].temperature.night.min,
              max: response.data[i].temperature.night.max,
            },
          },
          imagem: img,
        }
      }

      const repository = {
        cidade: response.name,
        estado: response.state,
        data: arrayData, 
      }
      this.setState({dados: repository});

      Actions.TelaUmaSemana({dados: this.state.dados});
    }
    else{
      ToastAndroid.show('Cidade não encontrada',ToastAndroid.LONG);
    } 
  }*/

  _buscaApi = async() => {

    chavesAcesso = [
      '8a08068d35e783606ba6fc82913ac333',
      'd9b34a89f41da52be16bde48f9a7ae91',
      '859a2b75ec2a65480740d15c8a9259cd'
    ];

    sortChave = Math.floor(Math.random()*3);

    this.setState({dados: { data: []}, num: 0}); 

    //Pesquisa cidade e estado para obter o ID cidade
    const codigo = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${this.state.txtCidade}&state=${this.state.txtEstado}&token=${chavesAcesso[sortChave]}`) || null;
    const responseCod = await codigo.json();
    
    //Verifica se foi retornado indefinido
    if(responseCod[0] !== undefined){
      //Usa o código da cidade para pesquisar a previsão
      const repoCall = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${responseCod[0].id}/days/15?token=${chavesAcesso[sortChave]}`);
      const response  = await repoCall.json();
      
      //Pegar o array de dados dos dias que é retornado pela API
      const arrayData = new Array();

      var img;

      for(var i=0; i<7; i++){
        arrayData[i] = {
          date: response.data[i].date_br,
          rain: {
            possibilidade: response.data[i].rain.probability, 
            precipitacao: response.data[i].rain.precipitation,
          },
          texto: {
            pt: response.data[i].text_icon.text.pt,
            manha: response.data[i].text_icon.text.phrase.morning,
            tarde: response.data[i].text_icon.text.phrase.afternoon,
            noite: response.data[i].text_icon.text.phrase.night,
          },
          vento: {
            vMax: response.data[i].wind.velocity_max,
            vMin: response.data[i].wind.velocity_min,
            vDir: response.data[i].wind.direction,
          },
          temperatura: {
            min: response.data[i].temperature.min,
            max: response.data[i].temperature.max,
            manha: {
              min: response.data[i].temperature.morning.min,
              max: response.data[i].temperature.morning.max,
            },
            tarde: {
              min: response.data[i].temperature.afternoon.min,
              max: response.data[i].temperature.afternoon.max,
            },
            noite: {
              min: response.data[i].temperature.night.min,
              max: response.data[i].temperature.night.max,
            },
          },
          num: i,
          image: {
            img: this.getImagem(response.data[i].text_icon.icon.day),
            imgMorning: this.getImagem(response.data[i].text_icon.icon.morning),
            imgAfternoon: this.getImagem(response.data[i].text_icon.icon.afternoon),
            imgNight: this.getImagem(response.data[i].text_icon.icon.night),
          }
        }
      }

      const repository = {
        cidade: response.name,
        estado: response.state,
        data: arrayData, 
      }
      this.setState({dados: repository});

      Actions.TelaUmaSemana({dados: this.state.dados});
    }
    else{
      ToastAndroid.show('Cidade não encontrada',ToastAndroid.LONG);
    } 
  }
  render() {
    return (
      <View style={styles.container}>
        <Barra titulo={'Previsão'} pesquisar/>
        <ImageBackground style={[styles.conteudo]} source={require('../img/bg.png')}>
          <View style={styles.subtopo}>
            <TextInput 
                autoCapitalize="none"
                style={styles.boxInput}
                underlineColorAndroid = "rgba(0,0,0,0)"
                placeholder="Cidade(Ex: São Paulo)"
                value={this.state.txtCidade}
                onChangeText={txtCidade => this.setState({txtCidade})}
            />
            <TextInput 
                autoCapitalize="none"
                style={styles.boxInput}
                underlineColorAndroid = "rgba(0,0,0,0)"
                placeholder="Estado(Ex: SP)"
                value={this.state.txtEstado}
                onChangeText={txtEstado => this.setState({txtEstado})}
            />

            <View style={styles.quadroBotao}>
                <TouchableOpacity  style={styles.botaoCarregar} onPress={this._buscaApi} >
                <Text style={styles.txtBotaoCarregar}>Carregar</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
  },
  subtopo: {
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 10
  },
  boxInput: {
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,.4)',
    fontSize: 16,
    fontWeight: 'bold',
  },

  quadroBotao: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoCarregar: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#3CB371',
    borderRadius: 3,
  },
  txtBotaoCarregar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
