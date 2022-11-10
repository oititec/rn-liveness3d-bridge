import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert, TextInput} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNkMyM0EwQTgyMUY3NkQ3RkFDNTE2N0E4RUQzQzQ2NzA4RjlDfHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IkMwMkM0NTRFQkJEMkM0NDI4RkRCMUI2NjRDMkE5ODI2NEY4OUNBRTRFQTVDNjNCQTQ5M0UzNDQyNDNBQjZFQThENEZFOUZFNjQyQkJEMzhENjJDMEFGRDIyM0ZBRDQ3MjUwRkU2Q0MzQ0UyQzMzOThDQzFCRUY4RURFRTkxNkE3fEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFZzlnU005WE9MVm1MSWRWYnJ6Yk01dEg0a1Y2SlVnOWlIdUFYdUpXUGFTNXFMbVI5ZUxSem55YVZBPT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE2NjgwODc3NTYsImlhdCI6MTY2ODA4NTk1Nn0.s6vU7B4mEbLFtt7vOu7ejb7XsAgMAOF8jQrcLfwJntc';

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
