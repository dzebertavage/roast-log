# Roast Log

A coffee roasting companion for Android. Tap **Charge** to start the timer, **Log** to stamp each milestone (turning point, first crack, second crack, drop) with the bean temperature, and save each roast with its bean, weights and notes. Roasts are kept on the phone, drawn as a temperature curve, and can be exported to a spreadsheet.

## Install on your phone

1. Open this repository's **Releases** page on your phone and tap the newest **Roast Log build**.
2. Download the `.apk` file and open it.
3. If Android asks, allow your browser to install unknown apps, then tap **Install**.

Newer builds install over older ones and keep your roast history.

## How it's built

- `www/` is the whole app: one HTML page with its styles and script.
- Every push to `main` runs the **Build Android app** workflow, which wraps `www/` with [Capacitor](https://capacitorjs.com), builds the APK and publishes it as a release.
- The spreadsheet library and fonts are bundled at build time (`scripts/copy-vendor.js`), so the app works offline.
- `assets/` holds the app icon source images.
- `signing/debug.keystore` signs every build with the same key so updates install over each other. It is only meant for personal installs; use a private release key before publishing to the Play Store.

## Moving roasts from the Claude version

In the Claude version, open **History**, then **Spreadsheet > New spreadsheet** to save your roasts. In this app, open **History > Import roasts** and pick that file. Roasts already in your history are skipped.
