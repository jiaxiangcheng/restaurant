/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';

// // Screens
import Login from './src/components/login';
import Home from './src/components/home';
import Settings from './src/components/settings';

// Router
import { Router, Stack, Scene } from 'react-native-router-flux';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './src/reducers/index';

const store = createStore(rootReducers);
console.log(store.getState());

const AppContainer = () =>  
    <Provider store={store}>
        <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login" /*initial={true} hideNavBar={true}*//>
                <Scene key="home" component={Home} title="Home"/>
                <Scene key="settings" component={Settings} title="Settings" initial={true}/>
            </Stack>
        </Router>
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
