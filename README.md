## Sobre este Repositório

Este repositório é responsável pela conexão do **NativeModules do React Nactive**, com ele é possível instalar e usar os artefatos do Liveness3D da Oititec disponíveis em aplicativos híbridos.

### Saiba mais sobre Liveness2D, Liveness3D e Documentoscopia:

- [Descrição e Resultados Liveness 2D](Documentation/Liveness2D-Description.md)
- [Descrição e Resultados Liveness 3D](Documentation/Liveness3D-Description.md)
- [Descrição e Resultados Documentoscopia](Documentation/Documentoscopy-Description.md)

### O que é Bridge?

A Bridge no React Native é a camada que permite que os módulos JavaScript e Nativo interajam entre si e é principalmente uma camada transportadora que conduz mensagens de feedback agrupadas cronológicas não paralelas de JavaScript para módulos Nativos.

![alt text](https://github.com/oititec/liveness3d-bridge-rn/blob/master/Documentation/assets/bridge.png?raw=true)

### Liveness 3D Bridge Sumário

As instruções de uso, integração, implementação e customização do **Liveness 3D** podem ser acessadas através do sumário abaixo:

**Android**

- [Configuração no Android;](Documentation/androidCONFIGURATION.md);
- [Criar Módulo e Pacote (JAVA);](Documentation/moduleandPackageJAVA.md);
- [Criar Módulo e Pacote (KOTLIN);](Documentation/moduleandPackageKOTLIN.md);
- [Como fazer a estilização dos Textos?(KOTLIN);](Documentation/liveness3DTextCUSTOMIZATIONKOTLIN.md);
- [Como fazer a estilização dos Textos?(JAVA);](Documentation/liveness3DTextCUSTOMIZATION.md);
- [Como fazer a estilização do XML?;](Documentation/xmlCUSTOMIZATION.md);
- [Guia de customização do Liveness3DTheme;](Documentation/liveness3DThemeAndroidCUSTOMIZATION.md);
- [Guia de implementação de view customizada;](Documentation/customViewANDROID.md);

**iOS:**

- [Configuração no iOS](Documentation/iosCONFIGURATION.md);
- [Criar Módulo e Pacote no iOS](Documentation/moduleandPackageIOS.md);
- [Guia de customização do Liveness3DTheme](Documentation/liveness3DThemeiOSCUSTOMIZATION.md);
- [Guia de implementação de view customizada;](Documentation/customViewIOS.md);

**React Native:**

- [Utilizando NativeModules do React](Documentation/reactnativeUSAGE.md).
  - [Exemplo de Uso](https://github.com/oititec/liveness3d-bridge-rn/Liveness3D)

### Como executar o clone do Repositório?

Execute o clone do repositório abaixo para baixar o código de exemplo:

```sh
git clone https://github.com/oititec/liveness3d-bridge-rn
```

### Como rodar o Script?

Para rodar o script desse repositório você deve instalar as dependências do projeto, então na pasta root do projeto clonado rodar o comando.

#### Dependências

utilizando yarn:

```sh
yarn
```

ou utilizando NPM:

```sh
npm i
```

### Como executar o projeto?

> Executar sempre em dispositivos físicos e não no simulador do iOS e Android

Yarn

```sh
yarn android
```

```sh
yarn ios
```

React Native Cli:

```sh
npx react-native run-android
```

```sh
npx react-native run-ios
```
