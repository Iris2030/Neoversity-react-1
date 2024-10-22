import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import RegistrationScreen from './screens/RegistrationScreen';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
  })

  useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  return (
    <RegistrationScreen></RegistrationScreen>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Yuuuhuuuo!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Roboto-Bold'
  }
});
