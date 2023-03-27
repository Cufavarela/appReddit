import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import PostsScreen from './screens/Posts';
import PostsDetailsScreen from './screens/PostsDetailsScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'AppReddit',
            headerTintColor: '#188180',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: 'AppReddit',
            headerTintColor: '#188180',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="PostsDetails"
          component={PostsDetailsScreen}
          options={{
            title: 'AppReddit',
            headerTintColor: '#188180',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
