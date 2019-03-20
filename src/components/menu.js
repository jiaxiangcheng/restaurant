import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { addPlat } from '../actions';

import CustomModal from './customModal';

class Menu extends React.Component {

    addPlat () {
        this.refs.customModal.showModal();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topControls}>
                    <TouchableOpacity style={styles.button} onPress={() => this.addPlat()}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                
                <CustomModal ref={'customModal'}>

                </CustomModal>

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
        flexWrap: 'wrap',
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
        menu: state.menuReducer.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlat: (name, price) => dispatch(addPlat(name, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);