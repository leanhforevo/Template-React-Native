import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
import Routers from './routers';
import {Provider} from 'mobx-react'

import Todo from './stores/todo';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider stores={'red'} Todo={Todo}>
         <Routers />
      </Provider>
     
    </View>
  );
}
