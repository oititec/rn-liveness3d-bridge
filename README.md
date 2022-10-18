# 1. Sobre o Repositório

Este repositório é responsável pela conexão do NativeModules do React Nactive, com ele é possível instalar e usar os artefatos do Liveness3D da Oititec disponíveis em aplicativos híbridos.

# 2. O que é a Bridge?

A Bridge no React Native é a camada que permite que os módulos JavaScript e Nativo interajam entre si e é principalmente uma camada transportadora que conduz mensagens de feedback agrupadas cronológicas não paralelas de JavaScript para módulos Nativos.

# 3. Uso

### Liveness 3D Bridge Sumário

As instruções de uso, integração, implementação e customização do **Liveness 3D** podem ser acessadas através do sumário abaixo:

Andorid

- [Configuração no Android](Documentation/androidCONFIGURATION.md);
- [Criar Módulo e Pacote (JAVA)](Documentation/moduleandPackageJAVA.md);
- [Criar Módulo e Pacote (KOTLIN)](Documentation/moduleandPackageKOTLIN.md);

iOS:

- [Configuração no iOS](Documentation/iosCONFIGURATION.md);

React Native:

- [Exemplo de Projeto: criação e inicialização](https://github.com/oititec/liveness3d-sample).

# 4. Como executar o clone do Repositório?

Execute o clone do repositório abaixo para baixar o código de exemplo:

```sh
git clone https://github.com/oititec/liveness3d-rn-bridge
```

# 5. Como rodar o Script?

Para rodar o script desse repositório você deve instalar as dependências do projeto, então na pasta root do projeto clonado rodar o comando.

## 5.1 Dependências

utilizando yarn:

```sh
yarn
```

ou utilizando NPM:

```sh
npm i
```

## 4.2 Executar Projeto

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