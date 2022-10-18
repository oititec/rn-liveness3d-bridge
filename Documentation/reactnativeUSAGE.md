# 1. React Native

Agora que temos toda configuração nativa executada, você precisa criar a conexão do nosso aplicativo híbrido com os nossos projetos iOS e Android.

### NativeModules

Para isso criamos um Script para conecta-los utilizando o NativeModules do react-native.

- [Documentação Oficial (Native Modules)](https://reactnative.dev/docs/native-modules-android)

### Exemplo:

- [Arquivo de Exemplo](https://github.com/oititec/liveness3d-bridge-rn/Liveness3D)

### Resgatando a função nativa startliveness3d(appKey):

```js
import {NativeModules} from 'react-native';
import qs from 'qs';

const {Liveness3dReactNative} = NativeModules;

export function startLiveness3d(appKey: string): Promise<any> {
  return Liveness3dReactNative.startliveness3d(appKey);
}
```

## 1.1 Funções do Arquivo de Exemplo

AppKey: gerada na etapa 2 da [documentação CertifaceID](https://certifaceid.readme.io/docs/integra%C3%A7%C3%A3o-atualizada 'Guia de Integração API v1.2')

| Função                      | Parâmetros | Retorno                    |
| --------------------------- | ---------- | -------------------------- |
| startLiveness3d("APP KEY"); | AppKey     | RESULT_OK, RESULT_CANCELED |

## 1.2 Exemplo de uso

Após efetuar a importação da biblioteca, deve ser aplicada a app Key gerada dentro da função startLiveness3d("APP KEY"). No exemplo abaixo chamamos a função quando clicamos no botão "Liveness 3D":

```js

import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {startLiveness3d} from './Liveness3d';

export default function App() {
  const [result, setResult] = React.useState<any | undefined>();
  const appKey = 'APP KEY';

  return (
    <View>
      <Button
        onPress={() => {
            startLiveness3d(appKey).then(
              result => {
                result && getResult(appKey);
              },
              error => {
                console.log(error);
              },
            );
          }}
        title="Liveness 3D"
      />
    </View>
  );
}
```
