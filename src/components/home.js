import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topControls}>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.settings()}>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        backgroundColor: "#F5FCFF",
    },
    topControls : {
        flexDirection: 'row',
        height: 50
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

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);