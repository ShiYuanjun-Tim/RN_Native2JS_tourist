package com.timsapp.sample;


import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by syjmac on 2017/11/12.
 */
//@ReactModule(name = "ToastSamp")
public class ToastSampNativeModle extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";


    public ToastSampNativeModle(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        System.out.println("--Tim--"+ToastSampNativeModle.class.getName()+" getName()");
        return "ToastSamp";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> map=new HashMap<>();
        map.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        map.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);

        return map;
    }

    @ReactMethod
    public void show(String txt,int duration){
        System.out.println("--Tim--"+ToastSampNativeModle.class.getName()+" show("+txt+")");

        Toast.makeText(getReactApplicationContext(), txt, duration).show();

    }

    @ReactMethod
    public void callbackInv(Callback cb){
        System.out.println("--Tim--"+ToastSampNativeModle.class.getName()+" callbackInv()");

        cb.invoke("the message is from ToastSampNativeModle.callbackInv");

    }

    @ReactMethod
    public void promiseInv(Promise promise){
        System.out.println("--Tim--"+ToastSampNativeModle.class.getName()+" promiseInv()");

        WritableArray arr= Arguments.createArray();
        arr.pushBoolean(true);
        arr.pushString("string");
        arr.pushInt(111);
        promise.resolve(arr);

    }

    @ReactMethod
    public void sendEvent(){
        System.out.println("--Tim--"+ToastSampNativeModle.class.getName()+" sendEvent()");
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("shiyuanjunEvent","event data from native");
    }
}
