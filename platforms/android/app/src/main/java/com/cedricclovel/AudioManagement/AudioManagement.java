package com.cedricclovel.audiomanagement;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import android.R;
import android.content.Context;
import android.media.AudioManager;
import android.util.Log;

public class AudioManagement extends CordovaPlugin {

  public static final String ACTION_SET_MODE = "setAudioMode";
  public static final String ACTION_GET_MODE = "getAudioMode";
  public static final String ACTION_SET_VOLUME = "setVolume";
  public static final String ACTION_GET_VOLUME = "getVolume";
  public static final String ACTION_GET_MAX_VOLUME = "getMaxVolume";

  private static final int SILENT_MODE = 0;
  private static final int VIBRATE_MODE = 1;
  private static final int NORMAL_MODE = 2;

  private static final int TYPE_RING = 0;
  private static final int TYPE_MUSIC = 1;
  private static final int TYPE_NOTIFICATION = 2;
  private static final int TYPE_SYSTEM = 3;

  private static final String LABEL_NORMAL = "Normal";
  private static final String LABEL_SILENT = "Silent";
  private static final String LABEL_VIBRATE = "Vibrate";

  private static final String KEY_AUDIO_MODE = "audioMode";
  private static final String KEY_LABEL = "label";
  private static final String KEY_VOLUME = "volume";
  private static final String KEY_MAX_VOLUME = "maxVolume";

  private AudioManager manager;
  private int maxVolumeRing;
  private int maxVolumeSystem;
  private int maxVolumeNotification;
  private int maxVolumeMusic;

  public void pluginInitialize(){
      this.manager = (AudioManager) this.cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
      this.maxVolumeRing = manager.getStreamMaxVolume(AudioManager.STREAM_RING);
      this.maxVolumeNotification = manager.getStreamMaxVolume(AudioManager.STREAM_NOTIFICATION);
      this.maxVolumeSystem = manager.getStreamMaxVolume(AudioManager.STREAM_SYSTEM);
      this.maxVolumeMusic = manager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
  }

  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

    boolean returnValue = true;

    if(ACTION_SET_MODE.equals(action)){

      final int content = args.getInt(0);

      if(setAudioMode(content)){
        callbackContext.success();
      }else{
        callbackContext.error("Unknown audio mode !");
        returnValue =  false;
      }

    } else if(ACTION_GET_MODE.equals(action)){

      getAudioMode(callbackContext);

    } else if(ACTION_GET_VOLUME.equals(action)){

      final int type = args.getInt(0);

      final int volume = getVolume(type);

      if(volume != -1){
        JSONObject vol = new JSONObject();
        vol.put(KEY_VOLUME, volume);
        callbackContext.success(vol);
      }else{
        callbackContext.error("Unknown volume type !");
        returnValue =  false;
      }
    } else if(ACTION_SET_VOLUME.equals(action)){

        final int type = args.getInt(0);
        final int volume = args.getInt(1);
        setVolume(type, volume, callbackContext);

    }  else if(ACTION_GET_MAX_VOLUME.equals(action)){

      final int type = args.getInt(0);

      final int max = getMaxVolumeValue(type);

      if(max != -1){
        JSONObject maxVol = new JSONObject();
        maxVol.put(KEY_MAX_VOLUME, max);
        callbackContext.success(maxVol);
      }else{
        callbackContext.error("Unknown volume type !");
        returnValue =  false;
      }


    }  else {
      callbackContext.error("AudioManagement."+action+" not found !");
      returnValue =  false;
    }

    return returnValue;
  }

  private int getVolume(int type) {

    int volume = -1;

    switch(type){
      case TYPE_RING:
        volume = manager.getStreamVolume(AudioManager.STREAM_RING);
        break;
      case TYPE_MUSIC:
        volume = manager.getStreamVolume(AudioManager.STREAM_MUSIC);
        break;
      case TYPE_NOTIFICATION:
        volume = manager.getStreamVolume(AudioManager.STREAM_NOTIFICATION);
        break;
      case TYPE_SYSTEM:
          volume = manager.getStreamVolume(AudioManager.STREAM_SYSTEM);
          break;
    }

    return volume;
  }

  private void setVolume(final int type, final int volume, final CallbackContext callbackContext){

    new Runnable(){
            @Override
            public void run() {
              switch(type){
                case TYPE_RING:
                  manager.setStreamVolume(AudioManager.STREAM_RING, checkVolumeValue(volume, maxVolumeRing), AudioManager.FLAG_SHOW_UI);
                  break;
                case TYPE_NOTIFICATION:
                    manager.setStreamVolume(AudioManager.STREAM_NOTIFICATION, checkVolumeValue(volume, maxVolumeNotification), AudioManager.FLAG_SHOW_UI);
                    break;
                case TYPE_SYSTEM:
                    manager.setStreamVolume(AudioManager.STREAM_SYSTEM, checkVolumeValue(volume, maxVolumeSystem), AudioManager.FLAG_SHOW_UI);
                    break;
                case TYPE_MUSIC:
                    manager.setStreamVolume(AudioManager.STREAM_MUSIC, checkVolumeValue(volume, maxVolumeMusic), AudioManager.FLAG_SHOW_UI);
                    break;
              }
              callbackContext.success();
            }
        }.run();
  }

  private void getAudioMode(CallbackContext callbackContext) throws JSONException {

    final JSONObject mode = new JSONObject();
    int audioMode = NORMAL_MODE;
    String label = "Normal";

    switch(this.manager.getRingerMode()){
      case AudioManager.RINGER_MODE_SILENT:
        audioMode = SILENT_MODE;
        label = LABEL_SILENT;
        break;
      case AudioManager.RINGER_MODE_VIBRATE:
        audioMode = VIBRATE_MODE;
        label = LABEL_VIBRATE;
        break;
      case AudioManager.RINGER_MODE_NORMAL:
        audioMode = NORMAL_MODE;
        label = LABEL_NORMAL;
        break;
    }

    mode.put(KEY_AUDIO_MODE, audioMode);
    mode.put(KEY_LABEL, label);

    callbackContext.success(mode);
  }

  private boolean setAudioMode(int mode){
    switch(mode){
      case SILENT_MODE:
        if(manager.getRingerMode() != AudioManager.RINGER_MODE_SILENT){
          manager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
        }
        return true;
      case VIBRATE_MODE:
        if(manager.getRingerMode() != AudioManager.RINGER_MODE_VIBRATE){
          manager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
        }
        return true;
      case NORMAL_MODE:
        if(manager.getRingerMode() != AudioManager.RINGER_MODE_NORMAL){
          manager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
        }
        return true;
      default:
        return false;
    }
  }

  private int getMaxVolumeValue(int type){
    int max = -1;

    switch(type){
      case TYPE_RING:
        max = manager.getStreamMaxVolume(AudioManager.STREAM_RING);
        break;
      case TYPE_NOTIFICATION:
          max = manager.getStreamMaxVolume(AudioManager.STREAM_NOTIFICATION);
          break;
      case TYPE_SYSTEM:
          max = manager.getStreamMaxVolume(AudioManager.STREAM_SYSTEM);
          break;
      case TYPE_MUSIC:
          max = manager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
          break;
    }

    return max;
  }

  /**
  *  Check if the volume is not higher than max value
  * @param sourceVolume
  * @param maxVolume
  * @return
  */
  private int checkVolumeValue(int sourceVolume, int maxVolume){

    int volume = sourceVolume;

    if(sourceVolume > maxVolume){
      volume = maxVolume;
    } else if(sourceVolume < 0){
      volume = 0;
    }

    return volume;
  }

}
