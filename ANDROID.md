# BrainX Android app (Capacitor)

One codebase: the Android app bundles the same HTML/CSS/JS as brainxiq.com (`tools/build-web.mjs` → `www/`).

## Get a test APK (recommended: cloud build)
Push to the `android-app` branch (or GitHub → Actions → **Android build** → *Run workflow*).
The run publishes a private download page (expires in 7 days) — the link is in the run summary.
Open it on the Android phone, download, install. The APK is also kept as a run artifact for 14 days.

Why cloud: the corporate network blocks the Gradle download (GitHub-hosted archives), so local
builds only work off that network.

## Local build (off the corporate network, or once Gradle is cached)
Requires Android Studio (bundled JDK 21+ and SDK) and Node 22+.
```bash
npm run android:apk    # → dist/android/brainx-v<N>-debug.apk
npm run android:aab    # → dist/android/brainx-v<N>-release.aab (needs the upload key)
```
Builds run in `~/.brainx-build` (outside Google Drive). Version = `APP_VERSION` in `version.js`.

## Release signing (Google Play upload key) — one time
Keep the key **outside the repo and outside Google Drive**:
```bash
mkdir -p ~/.brainx-keys && cd ~/.brainx-keys
"/Applications/Android Studio.app/Contents/jbr/Contents/Home/bin/keytool" -genkeypair -v \
  -keystore brainx-upload.jks -alias brainx-upload -keyalg RSA -keysize 2048 -validity 10000
cat > keystore.properties <<EOF
storeFile=$HOME/.brainx-keys/brainx-upload.jks
storePassword=<the password you chose>
keyAlias=brainx-upload
keyPassword=<the password you chose>
EOF
chmod 600 keystore.properties brainx-upload.jks
```
Back it up somewhere safe (e.g. a password manager). With Play App Signing, a lost upload key can be reset by Google.

## What differs in the app (same code, detected at runtime)
- Speech uses the phone's text-to-speech (`@capacitor-community/text-to-speech`) — Android WebView has no Web Speech API.
- Cloud features (records, private sync) run in the app; still off for staging/localhost web copies.
- Admin sign-in is website-only (Google's popup doesn't run in a WebView).
- Privacy policy opens in the phone's browser; no service worker (files are bundled).
- Progress is stored inside the app; it is separate from progress saved in a phone browser.

## Google Play basics (implemented)
- targetSdk/compileSdk 36 (Android 16), minSdk 24.
- Permissions: INTERNET, VIBRATE only; advertising ID permission removed.
- No ads, no analytics, no sign-in for children.
