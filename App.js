import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert, TextInput} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiQzkzRTQ4MEY5NDJFRUQ1NTI1NDhGNTNFOUZCN0NCMTNDfG1vYmlsZS5hcGlnbG9iYWwiLCJlbXBDb2QiOiIwMDAwMDAwNjc5IiwiZmlsQ29kIjoiMDAwMDAwMjc3NCIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjcyQzU1NEM1RDc5NDZGMzVFNEFFRjkxMzcxMDQwODQ5NUJEMDYyN0IwRDczOTVERDAyQzExOTg0RkJEQzUyMTE4NUZCODIzM0M4OTI4REJEREQwQzVBMzAyMkI0RDRDQUQ1M0JFM0I1NkJGQ0E0OTM2NTY2MjFFNDcxODI5NkY2fEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFandmWlgxdnd5Zlg5bW9IdE9ha1FiczNISUZoU1MxcTQ0d05YTjQ3TzgvaUMrckFhRzk3UGhnUzJnPT0iLCJrZXkiOiJRV3hzYjNkaGJtTmxJSEpsY0hWc2MybDJaU0J6WlhnZ2JXRjVJR052Ym5SaGFXND0iLCJleHAiOjE2Nzk1MTExMzYsImlhdCI6MTY3OTUxMDgzNn0.fNguYVH1gKo3Q_IGMros_GKY8zjij81hLdmlCH1qCGE';

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
