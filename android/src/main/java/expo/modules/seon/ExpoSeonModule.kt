package expo.modules.seon

import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import io.seon.androidsdk.service.SeonBuilder

class ExpoSeonModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {    
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSeon')` in JavaScript.
    Name("ExpoSeon")

    AsyncFunction("fingerprintBase64") { sessionId: String, promise: Promise ->
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext

      if (applicationContext != null) {
        val sfp = SeonBuilder().withContext(applicationContext).withSessionId(sessionId).build()

        sfp.getFingerprintBase64 { seonFingerprint: String? ->
          promise.resolve(seonFingerprint)
        }
      } else {
        promise.reject("500", "ApplicationContext is not valid", null);
      }
    }
  }
}
