import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";

import todayImage from '../../assets/imgs/today.jpg'

import commonStyles from "../commonStyles";
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from "moment"
import 'moment/locale/pt-br'

const dateFormat = moment().locale('pt-br').format('LL')

export default props=> {
    return(
    <View style={Style.container}>
        <View style={Style.checkContainer}>
            {getCheckView(props.concluidaEm)}
        </View>
        <View>
            <Text style={[Style.descricao]}>{props.descricao}</Text>
            <Text style={Style.date}>{dateFormat}</Text>
        </View>
    </View>
    )
}

function getCheckView(concluidaEm) {
    if (concluidaEm != null) {
        return (
            <View style={Style.dataEstimada}>
                <Icon name="check" size={20} color="#FFF"/>
            </View>
        )
    }else {
        return (
            <View style={Style.pendente}>

            </View>
        )
    }
}

const Style = StyleSheet.create(
    {
        container:{
            flexDirection: "row",
            borderColor: "#2c2c2c",
            borderWidth: 1,
            padding: 5
        },
        checkContainer:{
            justifyContent: "center",
            alignItems: 'center',
            width: '20%'
        },
        dataEstimada:{
            height: 25,
            width: 25,
            borderRadius: 13,
            borderWidth: 1,
            backgroundColor: '#4D7031',
            alignItems: 'center',
            justifyContent: 'center'
        },
        descricao:{
            color: commonStyles.colors.mainText,
            fontSize: 15
        },
        date:{
            fontFamily: commonStyles.fontFamily,
            color: commonStyles.colors.subtitle
        }
    }
)