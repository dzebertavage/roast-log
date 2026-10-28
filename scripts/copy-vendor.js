// Copies the spreadsheet library, the Capacitor browser bundle and the fonts
// into www/ so the app works fully offline.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
const nm = path.join(root, 'node_modules');

function copy(from, to, required) {
  const src = path.join(nm, from);
  const dest = path.join(www, to);
  if (!fs.existsSync(src)) {
    if (required) throw new Error('Missing ' + from);
    console.warn('Skipped (not found): ' + from);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Copied ' + from);
}

copy('xlsx/dist/xlsx.full.min.js', 'vendor/xlsx.full.min.js', true);
copy('@capacitor/core/dist/capacitor.js', 'vendor/capacitor.js', false);

for (const w of [400, 500, 600, 700]) {
  copy(`@fontsource/figtree/files/figtree-latin-${w}-normal.woff2`, `fonts/figtree-${w}.woff2`, false);
}
for (const w of [400, 500]) {
  copy(`@fontsource/dm-mono/files/dm-mono-latin-${w}-normal.woff2`, `fonts/dm-mono-${w}.woff2`, false);
}
