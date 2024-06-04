    import React, { Component, useState } from "react";
import { View, TouchableOpacity, Modal, Text, TextInput, Platform, TouchableWithoutFeedback, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import commonStyles from "../commonStyles";

const initialState = {desc: "", date: new Date(), showDataPicker: false}

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }
        this.props.onSave && this.props.onSave (newTask)
        this.setState({...initialState})
    }

    render () {
    // const [modal, setModal] = useState(false)

    return ( 
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Informe a descrição"
                    onChangeText={desc => this.setState({desc})}
                    // value={this.state.desc}
                    />
                    {/* {this.getDatePicker()} */}
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={this.props.onCancel}
                    >
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.save}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback onPress={this.props.oonCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
}

const styles = StyleSheet.create(
    {
        background: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.70)'
        },
        container: {
            backgroundColor: '#FFF'
        },
        header: {
            fontFamily: commonStyles.fontFamily,
            backgroundColor: commonStyles.colors.today,
            color: commonStyles.colors.secundary,
            textAlign: "center",
            padding: 15,
            fontSize: 25
        },
        input: {
            fontFamily: commonStyles.fontFamily,
            height: 40,
            margin: 15,
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: "#E3E3E3",
            borderRadius: 6
        },
        buttons: {
            flexDirection: "row",
            justifyContent: 'flex-end'
        },
        button: {
            margin: 20,
            marginRight: 30,
            color: commonStyles.colors.today
        },
        date: {
            fontFamily: commonStyles.fontFamily,
            fontSize: 20,
            marginLeft: 15

        }
    }
)