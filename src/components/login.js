import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello sssss</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    rowItem: {
        height: 40,
        borderWidth: 2
    },
});
  
const mapStateToProps = (state) => {
    console.log(state);
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (name) => dispatch(setUsername(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);