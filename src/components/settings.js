import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

class Settings extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.menu()}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={() => this.login(this.props.username, this.props.password)}>
                        <Text>xxx</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={() => this.login(this.props.username, this.props.password)}>
                        <Text>xxx</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={() => this.login(this.props.username, this.props.password)}>
                        <Text>xxx</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: 100,
        height: 100,
        margin: 50
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        paddingTop: 40,
        width: 100,
        height: 100
    },
    rowItem: {
        height: 40,
        borderWidth: 2
    },
});
  
const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);