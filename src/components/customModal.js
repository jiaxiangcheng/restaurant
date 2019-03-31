import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform,
	Dimensions,
	TouchableOpacity,
	TextInput,
	Button,
	Alert
} from 'react-native';
import Modal from 'react-native-modalbox';
import validator from '../utilities/validate_wrapper';

var screen = Dimensions.get('window');

export default class CustomModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			platNameError: '',
			platPriceError: '',
			platCategoryError: ''
		}
	}

	showModal = () => {
		this.refs.myModal.open();
	}

	isValidForm() {
		return this.state.platNameError == null && this.state.platPriceError == null;
	}

    render() {
    	return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 365
                }}
                position='center'
                backdrop={true}
                animationDuration={50}
                backdropPressToClose={false}
                onClosed={() => {
                  console.log('modal closed');
                }}
            >
              <View>
								<Text style={{
										fontSize: 16,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 40
									}}>
               		New Plat:
                </Text>
              </View>

              <View style={{ justifyContent: 'center', alignItems: 'center'}}>
								<Text>Plat name:</Text>
                <TextInput 
                  ref={dishName => { this.textInput = dishName }}
                  style={styles.textInput} 
                  onChangeText={(name) => {
                    this.props.onInputChanged(name); 
                    this.setState({
                      platNameError: validator('platName', name)
                    });
                  }}
                />
								
								{this.state.platNameError ? 
								<Text style={{color: 'red', textAlign: 'center',}}>{this.state.platNameError}</Text>
								: null}

								<Text>Plat price:</Text>
								<TextInput 
                  ref={dishPrice => { this.textInput = dishPrice }}
                  style={styles.textInput} 
                  onChangeText={(price) => {
                    this.props.onInputChanged2(price); 
                    this.setState({
                      platPriceError: validator('platPrice', price)
                    });
                  }}
                />

                {this.state.platPriceError ? 
								<Text style={{color: 'red', textAlign: 'center',}}>{this.state.platPriceError}</Text>
								: null}

								<Text>Plat category:</Text>
								<TextInput 
                  ref={category => { this.textInput = category }}
                  style={styles.textInput} 
                  onChangeText={(category) => {
                    this.props.onInputChanged3(category); 
                    this.setState({
                      platCategoryError: validator('platCategory', category)
                    });
                  }}
                />

                {this.state.platCategoryError ? 
								<Text style={{color: 'red', textAlign: 'center',}}>{this.state.platCategoryError}</Text>
								: null}

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={styles.saveButton} onPress={() => {
                    if (this.isValidForm()) {
                      this.props.addNewPlat();
                      this.refs.myModal.close();
                    }
                    else {
                      Alert.alert('Invalid form, please try again!');
                    }
                  }}>
                      <Text>Save</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.cancelButton} onPress={() => this.refs.myModal.close()}>
                      <Text>Cancel</Text>
                  </TouchableOpacity>
                </View>

              </View>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'flex-start',
		backgroundColor: "#F5FCFF",
	},
	topControls: {
		flexDirection: 'row',
		height: 50
	},
	content: {
		marginTop: 25
	},
	bottomControls: {

	},
	textInput: {
		width: 150,
		height: 50,
		borderWidth: 1,
	},
	rowItem: {
		borderWidth: 1,
		height: 40,
		padding: 10
	},
	saveButton: {
		alignItems: 'center',
		backgroundColor: 'green',
		padding: 10,
	},
	cancelButton: {
		alignItems: 'center',
		backgroundColor: 'grey',
		padding: 10
	}
});