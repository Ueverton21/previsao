import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image,
    View
} from 'react-native';

import Barra from './Barra';


export default class TelaDetalhes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Barra titulo='Detalhes' voltar />
                <ImageBackground source={require('../img/bgdetalhes.png')} style={styles.quadroDetalhes}>
                    <View style={styles.quadroDia}>
                        <Text style={styles.txtDia}>Dia: {this.props.data.date}</Text>
                        <View style={styles.quadroImagem}>
                            <Image style={{width: 80, height: 80}} source={this.props.data.image.img}/>
                        </View>
                        <Text style={styles.txtClima}>{this.props.data.texto.pt}</Text>
                        <Text style={styles.txtSimples}>Possibilidade: {this.props.data.rain.possibilidade}%</Text>
                        <Text style={styles.txtSimples}>Preciptação: {this.props.data.rain.precipitacao}mm</Text>
                        <Text style={styles.txtSimples}>
                            Temperatura:  {this.props.data.temperatura.max}°/{this.props.data.temperatura.min}°
                        </Text>
                        <Text style={styles.txtSimples}>
                            Vento: {this.props.data.vento.vDir}
                        </Text>
                        <Text style={styles.txtSimples}>
                            Velocidade:  {this.props.data.vento.vMax}KM/h - {this.props.data.vento.vMin}KM/h
                        </Text>

                        <View style={styles.quadroGeralPeriodo}>
                            <Text style={styles.txtTitulo}>Manhã</Text>
                            <View style={styles.quadroPeriodo}>
                                <View>
                                    <Image style={{width: 40, height: 40}} source={this.props.data.image.imgMorning}/>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.txtPeriodo}>{this.props.data.texto.manha}</Text>  
                                    <Text style={styles.txtPeriodo}>
                                        Temperatura: {this.props.data.temperatura.manha.max}°/{this.props.data.temperatura.manha.min}°
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.txtTitulo}>Tarde</Text>
                            <View style={styles.quadroPeriodo}>
                                <View>
                                    <Image style={{width: 40, height: 40}} source={this.props.data.image.imgAfternoon}/>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.txtPeriodo}>{this.props.data.texto.tarde}</Text>  
                                    <Text style={styles.txtPeriodo}>
                                        Temperatura:  {this.props.data.temperatura.tarde.max}°/{this.props.data.temperatura.tarde.min}°
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.txtTitulo}>Noite</Text>
                            <View style={styles.quadroPeriodo}>
                                <View>
                                    <Image style={{width: 40, height: 40}} source={this.props.data.image.imgNight}/>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.txtPeriodo}>{this.props.data.texto.noite}</Text>  
                                    <Text style={styles.txtPeriodo}>
                                        Temperatura:  {this.props.data.temperatura.noite.max}°/{this.props.data.temperatura.noite.min}°
                                    </Text>
                                </View>
                            </View>
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
    quadroDetalhes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quadroDia: {
        width: '96%',
        padding: 10,
        backgroundColor: 'rgba(0,139,139,0.8)',
        borderRadius: 5,
    },
    txtDia: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    quadroImagem:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtClima: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 5,
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtSimples: {
        margin: -2,
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold'
    },

    quadroGeralPeriodo: {
        marginTop: 10,
    },

    quadroPeriodo: {
        flexDirection: 'row',
        marginTop: 0,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    txtTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000',
    },
    txtPeriodo: {
        marginTop: -1,
        fontSize: 13,
        color: '#FFF',
        fontWeight: 'bold',
    }
});