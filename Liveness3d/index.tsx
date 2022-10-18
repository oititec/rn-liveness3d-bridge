import React from 'react';
import {NativeModules} from 'react-native';
import qs from 'qs';

const {Liveness3dReactNative} = NativeModules;

export function startLiveness3d(appKey: string) {
  return Liveness3dReactNative.startliveness3d(appKey);
  //console.log(NativeModules);
}

export async function resultFaceCaptcha(appKey: string): Promise<string> {
  const dataReq = {appkey: appKey};

  const response = await fetch(
    'https://comercial.certiface.com.br:8443/facecaptcha/service/captcha/document/result',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(dataReq),
    },
  );
  const data = await response.json();
  return data.facecaptcha;
}
