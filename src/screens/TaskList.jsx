import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from "react-native";
import Task from "../components/Task";

import todayImage from '../../assets/imgs/today.jpg'

export default props=> {
    
    return(
    <SafeAreaView style={Style.container}>
        <ImageBackground source={todayImage} style={Style.image} resizeMode="cover">
        </ImageBackground>
        <View style={Style.taskList}>
        <Text>Task List</Text>
        </View>
    </SafeAreaView>
    ) 
}
const Style = StyleSheet.create(
    {
        container:{
            flex: 1
        },
        image: {
            flex: 3
        },
        taskList: {
            flex: 7
        }
    }
)