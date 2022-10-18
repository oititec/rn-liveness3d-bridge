import UIKit
import Foundation

import FaceCaptcha

@objc(Liveness3dReactNative)
class Liveness3dReactNative: NSObject, Liveness3DDelegate {
  
  var resolve:RCTPromiseResolveBlock!
  
  func handleLiveness3DValidation(validateModel: Liveness3DSuccess) {
    resolve("RESULT_OK")
  }
  
  func handleLiveness3DError(error: Liveness3DError) {
    resolve("RESULT_CANCELLED")
  }
  
  
  @objc(startliveness3d:withResolver:withRejecter:)
  func startliveness3D(appKey: String, resolve:@escaping RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
    
      self.resolve = resolve
    
      let APP_KEY = appKey
      var theme = Liveness3DTheme(Liveness3DThemeType.light)
            theme.ovarCustomizationStrokeColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.ovarCustomizationProgressColor1 = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.ovarCustomizationProgressColor2 = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundNormalColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundHighlightColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundDisabledColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 0.5)
    
      DispatchQueue.main.async {
        // MARK: - Views Customized
        let instructionView = InstructionCustomView()
        let permissionView = PermissionCustomView()
        
        let vc = Liveness3DViewController(
                    endpoint: "",
                    liveness3DUser: Liveness3DUser(
                                          appKey: APP_KEY,
                                          environment: .HML,
                                          defaultTheme: theme,
                                          lowLightTheme: theme,
                                          texts: Liveness3DStrings.values
                                      ),
                    debugOn: true,
                    customInstructionView: instructionView,
                    customPermissionView: permissionView
                  )
        vc.delegate = self
        RCTPresentedViewController()?.present(vc, animated: true)
      }
  
    
  }

  

  
}
