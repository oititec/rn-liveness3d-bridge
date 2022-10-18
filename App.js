import * as React from 'react';

import {StyleSheet, View, Text, Button, Alert} from 'react-native';

import {startLiveness3d, resultFaceCaptcha} from './Liveness3d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiREI1QzlCN0QwMUI0MUNGODc1RTM5QTk2M0IyQ0ZEMTUzQjQ5fHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IkMyMjU3NEMxNUU1MTZCQkQ4Q0E5OEEwODA5MTNENDFDRkYxREU5RTIwNDRBNzc0NzE5RTJFMUYzNjFEOUI4NDZFQ0JFMkQ0MTYxN0Y4NDVFRjk5MDhCNjZEQUQzM0U4RTc4QUJDNjNBNzM4MzkzMzA4NEEzRjQyRkEwMzNBNkRCfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFclU4dTYvTk15dlYyd3RlSVFVaWgyR2YvZGxBVjhZU28vZXZDUU1zZEJBS3JXM0pKaE94ZTZYcU93PT0iLCJrZXkiOiJRV3hzYjNkaGJtTmxJSEpsY0hWc2MybDJaU0J6WlhnZ2JXRjVJR052Ym5SaGFXND0iLCJleHAiOjE2NjYwNTQxMTIsImlhdCI6MTY2NjA1MjMxMn0.lhD1z-ga4IXMt0Tb3lEDNtrxVs9wQ4Qc8LOtxb_ZbxQ';

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
