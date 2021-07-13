/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, StyleSheet, Text} from 'react-native';
 import Navigator from './src/navigator/index'
 
 class App extends React.Component {
   render() {
     return (
       <SafeAreaView style={styles.scrollView}>
         <Navigator />
       </SafeAreaView>
     );
   }
 }
 
 export default App;
 
 const styles = StyleSheet.create({
   scrollView: {
     flex:1
   },
 });