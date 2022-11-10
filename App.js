import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert, TextInput} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey = '';

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
      {/* <View style={styles.line}>
        <TextInput
          style={styles.input}
          onChangeText={text => setAppKeyText(text)}
          value={appKeyText}
          placeholder="APPKEY"
        />
      </View> */}
      <View style={styles.button}>
        <Button
          onPress={() => {
            startLiveness3d(appKey).then(result => {
              console.log(result);
            });
          }}
          title="Liveness 3D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginVertical: 20,
  },
  line: {
    width: '90%',
  },
  input: {
    backgroundColor: '#c2c2c2',
  },
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
