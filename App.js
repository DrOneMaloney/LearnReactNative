import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View, SafeAreaView, Image, Alert, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={{backgroundColor: "orange"}}>
      <Button
        title="Click Me"
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
