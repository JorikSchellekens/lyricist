/**
 * Manifest template
 */

const {
  existsSync,
  mkdirSync,
  writeFileSync,
} = require('fs');

const {
  join,
} = require('path');

const {
  version,
} = require('./package.json');

const buildFolder = join(__dirname, 'build');

const buildExists = existsSync(buildFolder);

const manifest = {
  "manifest_version": 2,
  "name": "lyricist",
  "version": version,
  "description": "Youtube lyric injector.",
  "content_scripts": [
    {
      "matches": [
        "https://*.youtube.com/*",
        "http://*.youtube.com/*",
      ],
      "js": ["./content.js"]
    }
  ],
};

if (!buildExists) {
  mkdirSync(buildFolder);
}

writeFileSync(join(buildFolder, 'manifest.json'), JSON.stringify(manifest, undefined, 4));