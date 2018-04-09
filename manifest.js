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
  "name": "Velorum",
  "version": version,
  "description": "Saves specified messages on Facebook messenger.",
  "icons": {
	  "16":  "icons/16.png",
		"32":  "icons/32.png",
		"48":  "icons/48.png",
		"96":  "icons/96.png",
		"128": "icons/128.png",
		"192": "icons/192.png",
		"256": "icons/256.png"
	},
  "content_scripts": [
    {
      "matches": [
        "*://www.messenger.com/*",
        "*://www.facebook.com/messages/*",
      ],
      "js": ["./content.js"]
    }
  ],
  "permissions": [
      "storage"
  ]
};

if (!buildExists) {
  mkdirSync(buildFolder);
}

writeFileSync(join(buildFolder, 'manifest.json'), JSON.stringify(manifest, undefined, 4));