Aplicativo

nome da keystone: MEPI_APP
chave da Keystone: 17at*9A

Passos para deploy:

//Alterar a versão do app

ionic cordova platform remove android

ionic cordova build android --prod --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore MEPI_APP.keystore  C:\apps\ionic\mepi\app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk MEPI_APP

zipalign -v 4 C:\apps\ionic\mepi\app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk apkmepi_22333.apk
