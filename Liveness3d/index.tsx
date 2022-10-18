import React from 'react';
import {NativeModules} from 'react-native';
import qs from 'qs';

const {Liveness3dReactNative} = NativeModules;

export function startLiveness3d(appKey: string) {
  return Liveness3dReactNative.startliveness3d(appKey);
  //console.log(NativeModules);
}
