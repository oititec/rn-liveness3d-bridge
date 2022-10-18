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
