# 1. Criar Módulo e Pacote JAVA

Após executar essas etapas você deve iniciar a criação do módulo e do pacote incluindo os arquivos [Liveness3dReactNativePackage.kt](https://github.com/oititec/liveness3d-bridge-rn/tree/master/android/app/src/main/java/com/liveness3drnbridge/Liveness3dReactNativePackage.java) e o [Liveness3dReactNativeModule.kt](https://github.com/oititec/liveness3d-bridge-rn/tree/master/android/app/src/main/java/com/liveness3drnbridge/Liveness3dReactNativeModule.java) na pasta <mark>android/app/src/main/java/com/your-app-name/</mark>

**Liveness3dReactNativePackage.java**

```java
package br.com.liveness3drnbridge;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.*;


public class Liveness3dReactNativePackage implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new Liveness3dReactNativeModule(reactContext));
    return modules;
  }

  @NonNull
  @Override
  public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

}

```

**Liveness3dReactNativeModule.java**

```java
package br.com.liveness3drnbridge;


import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import br.com.oiti.liveness3d.app.ui.Liveness3DActivity;
import br.com.oiti.liveness3d.data.model.ENVIRONMENT3D;
import br.com.oiti.liveness3d.data.model.Liveness3DUser;

public class Liveness3dReactNativeModule extends ReactContextBaseJavaModule implements ActivityEventListener {

  private int LIVENESS3D_REQUEST = 1;
  private String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
  private String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";

  private Promise mLiveness3dPromisse = null;

  private ActivityEventListener mActivityEventListener = this;

  public Liveness3dReactNativeModule(ReactApplicationContext reactApplicationContext) {
    super(reactApplicationContext);
    reactApplicationContext.addActivityEventListener(mActivityEventListener);
  }

  @NonNull
  @ReactMethod
  public void startliveness3d(String appKey, Promise promise) {
    Activity currentActivity = getCurrentActivity();

    if (currentActivity == null) {
      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
      return;
    }

    mLiveness3dPromisse = promise;

    try {
      Liveness3DUser liveness3DUser = new Liveness3DUser(appKey, ENVIRONMENT3D.HML, null);
      Intent intent = new Intent(getCurrentActivity(), Liveness3DActivity.class);
      intent.putExtra(Liveness3DActivity.PARAM_LIVENESS3D_USER, liveness3DUser);


      getCurrentActivity().startActivityForResult(intent, LIVENESS3D_REQUEST);
    } catch (Exception e) {
      mLiveness3dPromisse.reject(E_FAILED_TO_SHOW_PICKER, e);
      mLiveness3dPromisse = null;
    }
  }


  @NonNull
  @Override
  public String getName() {
     return "Liveness3dReactNative";
  }

  @Override
  public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    if (requestCode == LIVENESS3D_REQUEST) {
      if (mLiveness3dPromisse != null) {
        if (resultCode == Activity.RESULT_CANCELED) {
          mLiveness3dPromisse.reject(E_FAILED_TO_SHOW_PICKER,"RESULT_CANCELED");
        } else if (resultCode == Activity.RESULT_OK) {
          mLiveness3dPromisse.resolve("RESULT_OK");
        }
        mLiveness3dPromisse = null;
      }
    }
  }

  @Override
  public void onNewIntent(Intent intent) {

  }
}

```
