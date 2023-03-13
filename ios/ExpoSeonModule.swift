import ExpoModulesCore
import SeonSDK

public class ExpoSeonModule: Module {
  public func definition() -> ModuleDefinition {
    let seonfp = SeonFingerprint()
    // seonfp.setLoggingEnabled(true)
      
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSeon')` in JavaScript.
    Name("ExpoSeon")
      
    AsyncFunction("fingerprintBase64") { (sessionId:String, promise: Promise) in
      seonfp.sessionId = sessionId
        
      seonfp.fingerprintBase64 { (seonFingerprint:String?) in
        promise.resolve(seonFingerprint)
      }
    }
  }
}
