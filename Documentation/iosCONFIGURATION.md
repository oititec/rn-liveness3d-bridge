# 1. Configuração no iOS

Abaixo vamos seguir a configuração nativa do iOS para utilização das funcionalidades do Liveness3D da Oiti.

## 1.1 Podfile

Adicione o Pod FaceCaptach no seu Podfile abaixo da **linha use_flipper()**.

```pod
pod 'FaceCaptcha', '~> 3.1.13-beta', :source => 'https://github.com/oititec/liveness-ios-specs.git'

```

Em seguida entre na pasta iOS e execute o seguinte comando:

```sh
pod install
```
