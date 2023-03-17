package com.jsoftretail; // replace your-app-name with your app’s name
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class IminPackage implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules( ReactApplicationContext reactApplicationContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new IminPrintModule(reactApplicationContext));

    return modules;
  }


  @Override
  public List<ViewManager> createViewManagers( ReactApplicationContext reactApplicationContext) {
    return Collections.emptyList();
  }
}
