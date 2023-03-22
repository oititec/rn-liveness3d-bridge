package com.liveness3drnbridge;
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise



import android.app.Activity
import android.content.Intent
import androidx.annotation.NonNull
import br.com.oiti.liveness3d.app.ui.Liveness3DActivity
//import br.com.oiti.liveness3d.theme.Liveness3DTheme
import br.com.oiti.liveness3d.data.model.ENVIRONMENT3D
import br.com.oiti.liveness3d.data.model.Liveness3DUser
import br.com.oiti.liveness3d.data.model.Liveness3DTextKey
import com.facebook.react.bridge.*



class Liveness3dReactNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val LIVENESS3D_REQUEST = 1
  private val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
  private val E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER"

  private var mLiveness3dPromisse: Promise? = null


  private val mActivityEventListener: ActivityEventListener =
  object : BaseActivityEventListener() {
    override fun onActivityResult(
      activity: Activity,
      requestCode: Int,
      resultCode: Int,
      data: Intent
    ) {
      if (requestCode == LIVENESS3D_REQUEST) {
        if (mLiveness3dPromisse != null) {
          if (resultCode == Activity.RESULT_CANCELED) {
            mLiveness3dPromisse!!.reject(E_FAILED_TO_SHOW_PICKER,"RESULT_CANCELED")
          } else if (resultCode == Activity.RESULT_OK) {
            mLiveness3dPromisse!!.resolve("RESULT_OK")
          }
          mLiveness3dPromisse = null
        }
      }
    }
  }

    //private var reactContext: ReactApplicationContext = reactContext

    init {
      reactContext.addActivityEventListener(mActivityEventListener)
    }

    override fun getName(): String {
          return "Liveness3dReactNative"
    }
    @NonNull
    @ReactMethod
    fun startliveness3d(appKey: String, promise: Promise) {
        val currentActivity = currentActivity

        if (currentActivity == null) {
          promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
          return;
        }

        mLiveness3dPromisse = promise

        try {
          val liveness3DUser = Liveness3DUser(appKey = appKey, ENVIRONMENT3D.HML, null)

          val intent = Intent(getCurrentActivity(), Liveness3DActivity::class.java).apply{
            putExtra(Liveness3DActivity.PARAM_LIVENESS3D_USER, liveness3DUser)
          }
          getCurrentActivity()?.startActivityForResult(intent, LIVENESS3D_REQUEST)
        } catch (e: Exception) {
          mLiveness3dPromisse?.reject(E_FAILED_TO_SHOW_PICKER, e)
          mLiveness3dPromisse = null
        }
    }
   /*  @ReactMethod
    fun applyTheme(){
      return Liveness3DTheme()
    }
    fun setTheme(liveness3DTheme : Liveness3DTheme?) {
      print(liveness3DTheme)
    } */
  }
