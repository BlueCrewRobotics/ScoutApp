cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-app-preferences.apppreferences",
        "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
        "pluginId": "cordova-plugin-app-preferences",
        "clobbers": [
            "plugins.appPreferences"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-app-preferences": "0.99.3",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-ionic-webview": "1.1.16",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-sqlite-storage": "2.1.4",
    "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});