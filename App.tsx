import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Navigator } from './src/router/Navigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
};

export default App;