import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Status from "./components/Status";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from "./assets/images/instagram_logo.png";
import Icon from 'react-native-vector-icons/Fontisto';
import IconPlus from 'react-native-vector-icons/FontAwesome5';
import Post from "./components/Post" ;
import Profile from "./Screens/Profile" ;



const Stack = createStackNavigator();

function HomeScreen(props) {

  return (
    <ScrollView>

    <View style={{flexDirection:'row'  , paddingVertical:10 , justifyContent:'center' , borderBottomWidth:0.5 , borderColor:'gray'}} >
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
    <Status />
    <Status />
    <Status />
    <Status />
    <Status />
    <Status />
    
  </ScrollView>
    </View>
  <Post {...props}/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
    </ScrollView>
   )
}

function Right(props) {

  return (
    <View style={{ padding: 10, flexDirection: "row-reverse" }}>


      <Icon name="messenger" size={25} color="black" />
      <IconPlus name="plus-square" style={{ marginHorizontal: 10 }} size={25} color="black" />


    </View>
  )
}


export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerLeft: props => <View style={{ height: '100%', width: '100%', padding: 10 }}><Image source={Logo} style={{ resizeMode: "contain", height: "100%", width: 110 }} /></View>, headerTitle: "", headerRight: Right }}
        />

        <Stack.Screen name="Profile" component={Profile}
          options={{ headerLeft: props => <View style={{ height: '100%', width: '100%', padding: 10 }}><Image source={Logo} style={{ resizeMode: "contain", height: "100%", width: 110 }} /></View>, headerTitle: "", headerRight: Right }}
        />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
