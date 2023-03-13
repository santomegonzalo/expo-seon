import 'react-native-get-random-values';

import { StyleSheet, Text, View } from 'react-native';

import * as ExpoSeon from 'expo-seon';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [fingerprint, setFingerprint] = useState('');

  useEffect(() => {
    async function checkSeon() {
      const seonSessionId = uuidv4();

      const fingerprintBase64 = await ExpoSeon.fingerprintBase64(seonSessionId);

      setFingerprint(fingerprintBase64);
    }

    checkSeon()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Testing Expo</Text>
      <Text>{fingerprint}</Text>
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
