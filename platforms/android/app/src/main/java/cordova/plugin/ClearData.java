package cordova.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import java.io.File;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;

public class ClearData extends CordovaPlugin
{
    private static final String ACTION_CACHE = "cache";
    private static final String ACTION_DATA = "data";
    private static final String TAG = ClearData.class.getSimpleName();

    private ClearData self;

    private CallbackContext callbackContext;

    /**
     * Constructor.
     */
    public ClearData() {}

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute (String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            self = this;
            this.callbackContext = callbackContext;

            if( action.equals(ACTION_CACHE) ) {
                clearCache();
            } else if( action.equals(ACTION_DATA) ) {
                clearApplicationData();
            }else{
                handleError("Unknown plugin action: " + action);
                return false;
            }
            return true;
        } catch (Exception e) {
            handleException(e);
            return false;
        }
    }

    private void clearCache(){
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                try {
                    self.webView.clearCache();
                    sendPluginSuccess();
                } catch (Exception e) {
                    handleException(e);
                }
            }
        });
    }
	
	private void clearApplicationData() {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                File cache = cordova.getActivity().getApplicationContext().getCacheDir();
                File appDir = new File(cache.getParent());
                Log.d(TAG, "AppDir = " + appDir);
                if (appDir.exists()) {
                    String[] children = appDir.list();
                    for (String s : children) {
                        if (!s.equals("lib")) {
                            Log.d(TAG, "Delete " + s);
                            deleteDir(new File(appDir, s));
                        }
                    }
                }
                sendPluginSuccess();
            }
        });
    }
    
    public static boolean deleteDir(File dir) {
        if (dir != null && dir.isDirectory()) {
            String[] children = dir.list();
            for (int i = 0; i < children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
        }
    
        return dir.delete();
    }

    private void sendPluginSuccess(){
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(false);
        callbackContext.sendPluginResult(result);
    }

    private void handleError(String msg){
        callbackContext.error(msg);
    }

    private void handleException(Exception e){
        String msg = e.getMessage();
        msg = "Exception occurred: ".concat(msg);
        handleError(msg);
    }
}