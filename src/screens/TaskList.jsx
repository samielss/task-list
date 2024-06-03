import React, { Component } from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, FlatList, Platform, Alert } from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import commonStyles from "../commonStyles";
import { ListItem, Avatar, Theme, BackgroundImage } from "@rneui/base";

import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import data from "../data/data";
import { Button } from "react-native";


export default class TaskList extends Component {
    render () {
    const today = moment().locale('pt-br').format('LL') 

    function getTaskList({item : datalist}) {  
        return (
                <Task descricao={datalist.tarefa} dataEstimada={datalist.estimada} concluidaEm={datalist.conclusao} />
        )
    }


    return (
        <SafeAreaView style={Style.container}>
            <AddTask
                
            />
            <ImageBackground source={todayImage} style={Style.imgBg} resizeMode="cover">
                <Text style={Style.title}>Hoje</Text>
                <Text style={Style.subtitle}>{today}</Text>
            </ImageBackground>
            <View style={Style.taskList}>
            <FlatList
                keyExtractor={datalist => datalist.id.toString()}
                data={data}
                renderItem={getTaskList}
            />
            </View>
        </SafeAreaView>
    )
}
}
const Style = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        imgBg: {
            flex: 3,
            padding: 15,
            justifyContent: "flex-end",
            backgroundColor: commonStyles.colors.secundary,
        },
        taskList: {
            flex: 7,
            backgroundColor: commonStyles.colors.secundary
        },
        title: {
            color: commonStyles.colors.font,
            fontSize: 52,
            fontWeight: "900",
            fontFamily: commonStyles.fontFamily
        },
        subtitle: {
            fontSize: 24,
            color: commonStyles.colors.font
        }
    }
)