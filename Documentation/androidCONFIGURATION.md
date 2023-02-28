# 1. Configuração no Android

Para iniciar a configuração nativa no android você deve seguir os passos abaixo:

## 1.1 Adicionar Repositório

Na pasta **/android** abrir o arquivo de build do seu aplicativo android, **build.gradle** e inserir as seguintes linhas em allprojects repositories;

```sh
maven { url "https://raw.githubusercontent.com/oititec/android-oiti-versions/master" }
```

## 1.2 Dependências Android

Na pasta **/app** abrir o arquivo de build do seu aplicativo android, **build.gradle** e inserir as seguintes dependências;
[Exemplo Aqui]

```sh
implementation fileTree(dir: "libs", include: ["*.jar"])

implementation 'androidx.core:core-ktx:1.7.0'
implementation 'androidx.appcompat:appcompat:1.4.1'
implementation 'com.google.android.material:material:1.6.1'
implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
implementation "org.bouncycastle:bcprov-jdk16:1.46"
implementation "com.squareup.okhttp3:logging-interceptor:4.9.3"
implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'
implementation 'androidx.fragment:fragment-ktx:1.3.6'
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0"
implementation group: 'com.google.code.gson', name: 'gson', version: '2.9.0'
implementation group: 'com.squareup.retrofit2', name: 'converter-gson', version: '2.9.0'
implementation "com.squareup.retrofit2:retrofit:2.9.0"
implementation 'androidx.databinding:databinding-runtime:4.2.2'

implementation "org.jetbrains.kotlin:kotlin-stdlib:1.7.0"

// SDK liveness3d OITI

implementation 'br.com.oiti:liveness3d-sdk:6.0'
```
