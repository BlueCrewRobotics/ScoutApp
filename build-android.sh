#!/bin/bash

ionic cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../../../Desktop/Extra/scout.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk scout
~/Library/Android/sdk/build-tools/27.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk ~/Desktop/Scout.apk
