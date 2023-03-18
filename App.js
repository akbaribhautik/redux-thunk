import React from 'react'
import { LogBox } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';


LogBox.ignoreAllLogs()
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App