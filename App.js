import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiRDlDRTlCMzM4MzUyRDMxOTJBNjU1NkJCMUM2REJBMTY1N0I5fHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IkI1QzcyMUJGOTAyQ0E5OEM1M0NEMkMzQTk1Mzg4QjYzMkQxRDYwNjQ2QzA1MjcwOENGOEQ3OTYwOTYzRTNBMzRFN0Y3MDdDNTVEMDI5OTc0M0MzM0MyMEJFNkUwMDBDQUQ3OTI0Q0UyREM1NEI4NDdGRkJGMzZDMzlERDBCMTE0fEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFcm4reU1WeWtrNXZyZmd0REt3d1gxSXI5UWlSUG5GZFdrMjVhQmxCRTh6bDZEMGExT1FZdzlJbnJnPT0iLCJrZXkiOiJUM1YwSUcxaGVTQm1aWGNnYm05eWRHaDNZWEprSUdKbGJHbGxkbWx1WnlCaGRIUT0iLCJleHAiOjE2NjYzNzg1MTEsImlhdCI6MTY2NjM3NjcxMX0.s52RduK5azun3gTAGzwxoJcOSOLPqw3PVIkU7kq_X0I';

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
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
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
