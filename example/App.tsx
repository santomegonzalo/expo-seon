import { StyleSheet, Text, View } from 'react-native';

import * as ExpoSeon from 'expo-seon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoSeon.hello()}</Text>
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
