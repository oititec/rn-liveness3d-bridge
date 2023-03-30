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
import FaceCaptcha

@objc(Liveness3dReactNative)
class Liveness3dReactNative: NSObject, Liveness3DDelegate {
    
    var resolve: RCTPromiseResolveBlock!
    
    func handleLiveness3DValidation(validateModel: Liveness3DSuccess) {
        resolve("RESULT_OK")
    }
    
    func handleLiveness3DError(error: Liveness3DError) {
        resolve("RESULT_CANCELLED")
    }
    
    @objc(startliveness3d:withResolver:withRejecter:)
    func startliveness3D(appKey: String, resolve: @escaping RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        
        self.resolve = resolve
        
        let APP_KEY = appKey
        
        DispatchQueue.main.async {
            let vc = Liveness3DViewController(
                liveness3DUser: Liveness3DUser(
                    appKey: APP_KEY,
                    environment: .HML
                ),
                delegate: self
            )
            
            RCTPresentedViewController()?.present(vc, animated: true)
        }
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
