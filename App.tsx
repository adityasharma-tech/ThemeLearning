import * as React from 'react';
import HomeScreen from './source/screens/HomeScreen';
import {StatusBar, theme, useColorMode, useColorModeValue} from 'native-base';
import {RootStackParamList} from './source/lib/RootStackParamList';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  const statusBarBackgroundColor = useColorModeValue("white", "black");
  const statusBarBarStyle = useColorModeValue("dark-content", "light-content")
  const contentStyleBackgroundColor = useColorModeValue(theme.colors.warmGray[50], theme.colors.coolGray[900])
  const headerStyleTextColor = useColorModeValue(theme.colors.black, theme.colors.white)
  const headerBorderBottomColor = useColorModeValue('#e9ecef', theme.colors.coolGray[700])

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarBarStyle} />
      <Stack.Navigator
        screenOptions={{
          title: 'Theme Learning',
          animation: 'flip',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: statusBarBackgroundColor
          },
          headerTitleStyle: {
            fontSize: 16,
            color: headerStyleTextColor
          },
          headerShadowVisible: false,
          contentStyle: {
            borderTopWidth: 1,
            borderTopColor: headerBorderBottomColor,
            backgroundColor: contentStyleBackgroundColor
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
