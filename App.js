import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert, TextInput} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNzc2NDI5MkQ3MDVFMjM2Rjg2QjUxMjgzRjA4QkY3NDIxfG9pdGkuZmFjZXRlYy5obWwiLCJlbXBDb2QiOiIwMDAwMDAwMDAxIiwiZmlsQ29kIjoiMDAwMDAwMjc2OSIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjEzMjUwRTY4Qjc5QUVFNUJFOUIzMUNFQjU3NDMwODgwODVFRUNCNDA4RUQ1QjQ3RUQzNzNCNDFFNDM4MzU0OTc0QzgyMzI0NUQyRDkxQzQ2MkMxRTgwNzJGREZBRjQwMEQ3RjdENTg4Q0ZDNTJBRDlFNTQ2NjNFQUE1NkQ3MTQwfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFdkg0QUVoZEJxTGVaUjBmcFY3ZllrZkEwMGhmTG1BRnlhYjhGL1hNMXJUR1dkWklaZGEvTFBlNmhRPT0iLCJrZXkiOiJRV0pzWlNCaGJpQm9iM0JsSUc5bUlHSnZaSGt1SUVGdWVTQnVZWGtnYzJoNWJtVT0iLCJleHAiOjE2NzcyNDgzNjQsImlhdCI6MTY3NzI0ODA2NH0.KVxJYtRCXWRs4Ibisr_Odk6-_56XxApD051H0Yb8Jcc';

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
