# @neogeek/videoplayer.js

> 🎥 Display video in the browser with variable input sources.

[![NPM Version](http://img.shields.io/npm/v/@neogeek/videoplayer.js.svg?style=flat)](https://www.npmjs.org/package/@neogeek/videoplayer.js)

## Install

```bash
$ npm install @neogeek/videoplayer.js
```

## Usage

```html
<script
    type="module"
    src="https://unpkg.com/@neogeek/videoplayer.js@1.1.0/index.js"
></script>
<script type="module">
    import { setupVideoPlayer } from 'https://unpkg.com/@neogeek/videoplayer.js@1.1.0/index.js';

    setupVideoPlayer(document.querySelector('video'), {
        videoInputDeviceSelect: document.querySelector('#videoinput'),
        audioInputDeviceSelect: document.querySelector('#audioinput')
    });
</script>
```
