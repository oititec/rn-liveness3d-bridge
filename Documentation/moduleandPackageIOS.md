# 1 Criar Módulo e Pacote no iOS

Primeiro você deve criar um arquivo no xcode chamado Liveness3dReactNative.m com a extensão Objective-C file e adicionar o seguinte código:

```c
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Liveness3dReactNative, NSObject)

RCT_EXTERN_METHOD(startliveness3d:(NSString)appKey
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
```

Crie o arquivo Swift chamado Liveness3dReactNative.swift adicionando o código abaixo:

```swift
import UIKit
import Foundation

import FaceCaptcha

@objc(Liveness3dReactNative)
class Liveness3dReactNative: NSObject {

  @objc(startliveness3d:withResolver:withRejecter:)
  func startliveness3D(appKey: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {

      let APP_KEY = appKey
      let vc = Liveness3DViewController(endpoint: "", liveness3DUser: Liveness3DUser(appKey: APP_KEY, environment: .HML), debugOn: true)

      DispatchQueue.main.async {
          RCTPresentedViewController()?.present(vc, animated: true)
      }
      resolve("RESULT_OK")

  }
}
```

Após essa etapa altere o arquivo com o tipo de Header File Header.h adicionando o seguinte código:

```h
@import Foundation;
@import UIKit;
@import CoreLocation;
@import AVFoundation;

#import <React/RCTBridge.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTUtils.h>

```
