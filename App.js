import * as React from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import Navigations from './src/navigations/Navigations';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/theme/theme';
import { AuthProvider } from './src/services/Auth/AuthContext';

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    return () => {
     LogBox.ignoreLogs([]);
     };
    
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navigations />
        </AuthProvider>
      </ThemeProvider>

    </SafeAreaView>
  );
};

export default App;
