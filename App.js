import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation';
import {persistor, store} from './src/redux/store';
import WelcomeScreen from './src/page/Welcome';

const App = () => {
  const [init, setInit] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          {init ? <WelcomeScreen /> : <AppStack />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
