import {NavigationContainer} from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
//import {PersistGate} from 'redux-persist/integration/react';
//import {persistStore} from 'redux-persist';
//import {Provider} from 'react-redux';
//import store from './src/redux/App/store';
import TabNavigation from './navigators/tabNavigation';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  //let persistor = persistStore(store);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
