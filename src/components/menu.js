import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { addPlat, setPlatName, setPlatPrice, setPlatCategory } from '../actions';
import CustomModal from './customModal';

class Menu extends React.Component {

    constructor(props) {
        super(props);       
    }

    setPlatName = (name) => {
        this.props.setPlatName(name);
    }

    setPlatPrice = (price) => {
        this.props.setPlatPrice(price);
    }

    setPlatCategory = (category) => {
        this.props.setPlatCategory(category);
    }

    addNewPlat = () => {
        console.log(this.props.platCategory);
        console.log(this.props.platName);
        this.props.addPlat(this.props.platName, this.props.platPrice, this.props.platCategory);
    }

    listConent () {
        if (this.props.menu && this.props.menu.length > 0) {
          return (
            <View>
                <FlatList
                  data={this.props.menu}
                  renderItem={({item, index}) => (
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 4}}>
                        <Text style={styles.rowItem}>{item.name}</Text>
                      </View>
                      <View style={{flex: 4}}>
                        <Text style={styles.rowItem}>{item.price}</Text>
                      </View>
                      <View style={{flex: 4}}>
                        <Text style={styles.rowItem}>{item.category}</Text>
                      </View>
                      <View style={{flex: 2}}>
                        <TouchableOpacity style={styles.button} onPress={() => this.editSelectTask(index)}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex: 1}}>
                        <TouchableOpacity style={styles.button} onPress={() => this.deleteSelectTask(index)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
            </View>
          );
        } else return null;
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topControls}>
                    <TouchableOpacity style={styles.button} onPress={() => this.refs.customModal.showModal()}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 4}}>
                        <Text>Name</Text>
                    </View>
                    <View style={{flex: 4}}>
                        <Text>Price</Text>
                    </View>
                    <View style={{flex: 4}}>
                        <Text>Category</Text>
                    </View>
                </View>

                {this.listConent()}

                <CustomModal 
                    ref={'customModal'} 
                    onInputChanged={this.setPlatName} 
                    onInputChanged2={this.setPlatPrice}
                    onInputChanged3={this.setPlatCategory} 
                    addNewPlat={this.addNewPlat}                  
                >

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
        padding: 10,
        height: 35
    },
    rowItem: {
        padding: 10,
        height: 35,
        borderWidth: 1
    },
});

// each change on the reducer, will call this function
const mapStateToProps = (state) => {
    console.log(state);
    return {
        menu: state.menuReducer.menu,
        platName: state.menuReducer.platName,
        platPrice: state.menuReducer.platPrice,
        platCategory: state.menuReducer.platCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlat: (name, price, category) => dispatch(addPlat(name, price, category)),
        setPlatName: (name) => dispatch(setPlatName(name)),
        setPlatPrice: (price) => dispatch(setPlatPrice(price)),
        setPlatCategory: (category) => dispatch(setPlatCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);