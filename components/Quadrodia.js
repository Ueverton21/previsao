import React, { Component } from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Quadrodia extends Component {
    render() {
        console.disableYellowBox = true;
        if(this.props.num%2===0){
            return (
                <View style={[styles.quadro, { backgroundColor: '#3CB371'}]} >
                <View style={styles.quadroImagem}>
                    <Image style={styles.imagem} source={this.props.data.image.img} />
                </View>

                <View style={styles.quadroDados}>
                    <Text style={styles.textoData}>{this.props.data.date}</Text>
                    <Text style={styles.textoClima}>{this.props.data.texto.pt}</Text>
                    <Text style={styles.textoPossibilidade}>{this.props.data.rain.possibilidade}%</Text>
                    <TouchableOpacity onPress={() =>  Actions.TelaDetalhes({data: this.props.data}) } style={styles.botaoDetalhes}>
                        <Text style={styles.txtBotaoDetalhes}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
            );
        }
        return (
            <View style={styles.quadro} >
                <View style={styles.quadroImagem}>
                    <Image style={styles.imagem} source={this.props.data.image.img} />
                </View>

                <View style={styles.quadroDados}>
                    <Text style={styles.textoData}>{this.props.data.date}</Text>
                    <Text style={styles.textoClima}>{this.props.data.texto.pt}</Text>
                    <Text style={styles.textoPossibilidade}>{this.props.data.rain.possibilidade}%</Text>
                    <TouchableOpacity onPress={() =>  Actions.TelaDetalhes({data: this.props.data}) } style={styles.botaoDetalhes}>
                        <Text style={styles.txtBotaoDetalhes}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    quadro: {
        flexDirection: 'row',
        backgroundColor: '#2E8B57',
        padding: 5,
    },

    quadroImagem: {
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        height: 70,
        width: 70,
    },

    quadroDados: {
        marginLeft: 10,
    },

    textoData: {
        marginTop: 5,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },

    textoClima: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 10,
    },

    textoPossibilidade: {
        color: '#000',
        fontSize: 11,
        fontWeight: 'bold',
    },

    botaoDetalhes: {
        marginVertical: 5,
    },

    txtBotaoDetalhes: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#22F'
    },
});