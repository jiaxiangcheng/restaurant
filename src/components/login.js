// essencial
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity, Alert } from "react-native";

// redux
import { connect } from 'react-redux';
import { setUsername, setPassword } from '../actions'

// router
import { Actions } from "react-native-router-flux";

// validation 
import validator from '../utilities/validate_wrapper';

class Login extends React.Component {

    constructor(props) {
		super(props)
		this.state = {
            usernameError: '',
            passwordError: ''
		}
	}

    login(username, password) {
        if (this.isValidForm()) {
            if (username == 'admin' && password == 'admin') {
                Actions.home();
            } else {
                Alert.alert('Authorization declined!');
            }
        } else {
            Alert.alert('Invalid form!');
        }
    }

    isValidForm() {
		return this.state.usernameError == null && this.state.passwordError == null;
	}

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'red', fontSize: 20, marginBottom: 20}}>Login</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={(username) => {
                        this.props.setUsername(username);
                        this.setState({
                            usernameError: validator('username', username)
                        });
                        }
                    }
                    value={this.props.username}
                    placeholder='Enter your username'
                ></TextInput>

                {this.state.usernameError ? 
                <Text style={{color: 'red', textAlign: 'center',}}>{this.state.usernameError}</Text>
                : null}

                <TextInput 
                    style={styles.textInput} 
                    onChangeText={(password) => {
                        this.props.setPassword(password);
                        this.setState({
                            passwordError: validator('password', password)
                        });
                        }
                    }
                    value={this.props.password}
                    placeholder='Enter your password'
                ></TextInput>

                {this.state.passwordError ? 
                <Text style={{color: 'red', textAlign: 'center',}}>{this.state.passwordError}</Text>
                : null}

                <TouchableOpacity style={styles.button} onPress={() => this.login(this.props.username, this.props.password)}>
                    <Text>ENTER</Text>
                </TouchableOpacity>
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
        setUsername: (name) => dispatch(setUsername(name)),
        setPassword: (password) => dispatch(setPassword(password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);