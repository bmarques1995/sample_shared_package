'use client'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { User, sampleCase } from 'verdaccio_sample';

export default function App() {
  const Me: User =
  {
    name: 'Bruno',
    birth: new Date("07-23-1995 20:51:48")
  }
  return (
    <View style={styles.container}>
      <Text>{Me.name} {Me.birth.toString()}</Text>
      <Text>Hook result: { sampleCase() }</Text>
      <StatusBar style="auto" />
    </View>
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
