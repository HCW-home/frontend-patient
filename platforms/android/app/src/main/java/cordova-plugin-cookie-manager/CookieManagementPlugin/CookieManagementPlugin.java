package cordovaPluginCookieManager;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.webkit.CookieManager;
import android.os.Build.VERSION;

/**
 * This class makes sure cookies are moved to persistent memory.
 */
public class CookieManagementPlugin extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("flush")) {
      this.flush(callbackContext);
      return true;
    }
    return false;
  }

  private void flush(CallbackContext callbackContext) {
    if (VERSION.SDK_INT >= 21) {
      CookieManager.getInstance().flush();
    }
    callbackContext.success();
  }
}
