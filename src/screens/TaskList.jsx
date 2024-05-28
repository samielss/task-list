import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from "react-native";
import Task from "../components/Task";
import commonStyles from "../commonStyles";

import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props=> {
    
    const today = moment().locale('pt-br').format('LL')

    return(
    <SafeAreaView style={Style.container}>
        <ImageBackground source={todayImage} style={Style.imgBg} resizeMode="cover">
            <Text style={Style.title}>Hoje</Text>
            <Text style={Style.subtitle}>{today}</Text>
        </ImageBackground>
        <View style={Style.taskList}>
            <Task descricao="Conluída" concluidaEm={true}/>
        </View>
    </SafeAreaView>
    ) 
}
const Style = StyleSheet.create(
    {
        container:{
            flex: 1
        },
        imgBg: {
            flex: 3,
            padding: 15,
            justifyContent: "flex-end",
            backgroundColor: commonStyles.colors.secundary
        },
        taskList: {
            flex: 7,
            backgroundColor: commonStyles.colors.secundary
        },
        title:{
            color: commonStyles.colors.font,
            fontSize: 52,
            fontWeight: "900",
            fontFamily: commonStyles.fontFamily
        },
        subtitle:{
            fontSize: 24,
            color: commonStyles.colors.font
        }
    }
)