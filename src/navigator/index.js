  
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      </View>
    );
  }

  function DetailScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
      </View>
    );
  }

  function SettingScreen() {


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
      </View>
    );
  }

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;