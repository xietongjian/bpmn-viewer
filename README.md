# bpmn-viewer

[![npm version](https://img.shields.io/npm/v/bpmn-viewer)](https://www.npmjs.com/package/bpmn-viewer)
[![npm downloads](https://img.shields.io/npm/dm/bpmn-viewer)](https://www.npmjs.com/package/bpmn-viewer)
[![license](https://img.shields.io/npm/l/bpmn-viewer)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/xietongjian/bpmn-viewer)](https://github.com/xietongjian/bpmn-viewer)

A Vue 3 BPMN diagram viewer component with preset viewer and token simulation support.

> Built on top of [bpmn-js](https://github.com/bpmn-io/bpmn-js), providing rich diagram interaction and process simulation capabilities.

## ✨ Features

- 🎨 **BpmnViewer** — Basic BPMN diagram viewer with toolbar (zoom, download, fullscreen)
- 🔄 **BpmnPresetViewer** — Preset viewer that auto-loads diagrams by process instance / model key
- 🎭 **BpmnMocker** — Token simulation for process validation
- 🌓 **Dark / Light Theme** — Built-in theme switching
- 🌍 **i18n** — Chinese and English support out of the box

## 📦 Installation

```bash
npm install bpmn-viewer
# or
pnpm add bpmn-viewer
# or
yarn add bpmn-viewer
```

## 🚀 Quick Start

```vue
<template>
  <BpmnViewer
    :xml="xmlStr"
    theme="light"
    local="zh_CN"
    :toolbar="true"
    @viewer-init="handleInit"
    @element-hover="handleHover"
  />
</template>

<script setup>
import { BpmnViewer } from 'bpmn-viewer';
import 'bpmn-viewer/lib/bpmn-viewer.css';

const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" ...>
  <!-- Your BPMN XML content -->
</definitions>`;

function handleInit() {
  console.log('Viewer initialized');
}

function handleHover(element) {
  console.log('Element hovered:', element.id);
}
</script>
```

## 📖 Components

### BpmnViewer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xml | `string` | — | BPMN XML content |
| theme | `'dark' \| 'light'` | `'light'` | Theme mode |
| local | `'zh_CN' \| 'en_US'` | `'zh_CN'` | Language |
| translatePrefix | `string` | `''` | Internationalization key prefix |
| loading | `boolean` | `false` | Loading state |
| toolbar | `boolean` | `true` | Show toolbar |
| inPreset | `boolean` | `false` | Used internally by BpmnPresetViewer |
| fullElement | `HTMLDivElement` | — | Target container for fullscreen mode |
| showDownload | `boolean` | `false` | Show download button |
| fileName | `string` | `''` | Default file name for download |

| Event | Payload | Description |
|-------|---------|-------------|
| viewer-init | `(viewer: Viewer)` | Viewer initialized |
| viewer-destroy | `(viewer: Viewer)` | Viewer destroyed |
| element-hover | `(element: BpmnElement, gfx: SVGElement)` | Element hovered |

| Method | Parameters | Description |
|--------|-----------|-------------|
| toggleTheme | `(theme?: 'dark' \| 'light')` | Toggle dark/light theme |
| toggleLang | `(lang?: 'zh_CN' \| 'en_US')` | Toggle Chinese/English |
| downloadProcess | `(type?, name?)` | Download diagram as XML/SVG/PNG |
| downloadProcessAsPng | `(name: string)` | Download diagram as PNG |
| getModeler | — | Get bpmn-js Viewer instance |
| createNewProcess | `(xml: string)` | Load new BPMN XML into canvas |
| setPassedNodes | `(nodeIds: string[])` | Mark nodes as completed (green) |
| setFutureNodes | `(nodeIds: string[])` | Mark future nodes |
| setActiveNodes | `(nodeIds: string[])` | Mark active nodes (orange) |
| setProcessingMarker | `(nodeIds: string[])` | Mark processing nodes |
| resetViewerMarkers | — | Reset all node markers |
| isPassedNode | `(node)` | Check if node is completed |
| isActiveNode | `(node)` | Check if node is active |
| isProcessingNode | `(node)` | Check if node is processing |

### BpmnPresetViewer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| procInstId | `string` | `''` | Process instance ID |
| modelKey | `string` | `''` | Process model key |
| defId | `string` | `''` | Process definition ID |
| theme | `'dark' \| 'light'` | `'light'` | Theme mode |
| local | `'zh_CN' \| 'en_US'` | `'zh_CN'` | Language |
| translatePrefix | `string` | `''` | Internationalization key prefix |
| toolbar | `boolean` | `true` | Show toolbar |
| showDownload | `boolean` | `false` | Show download button |
| fileName | `string` | `''` | Default file name for download |

> **Note**: At least one of `procInstId`, `modelKey`, or `defId` must be provided. Priority: `procInstId` > `defId` > `modelKey`.

| Event | Payload | Description |
|-------|---------|-------------|
| viewer-init | `(viewer: Viewer)` | Viewer initialized |
| element-hover | `(element: BpmnElement, gfx: SVGElement)` | Element hovered |
| data-change | `(data: any)` | Process data loaded |

| Method | Parameters | Description |
|--------|-----------|-------------|
| reloadViewerXML | `(modelKey?, procInstId?, procDefId?)` | Reload diagram and refresh highlights |
| downloadProcess | `(type?, name?)` | Download diagram as XML/SVG/PNG |
| downloadProcessAsPng | `(name: string)` | Download diagram as PNG |
| toggleTheme | `(theme?)` | Toggle dark/light theme |
| toggleLang | `(lang?)` | Toggle Chinese/English |

### BpmnMocker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xml | `string` | — | BPMN XML content |
| loading | `boolean` | `false` | Loading state |
| theme | `'dark' \| 'light'` | `'light'` | Theme mode |
| local | `'zh_CN' \| 'en_US'` | `'zh_CN'` | Language |

| Event | Payload | Description |
|-------|---------|-------------|
| mocker-init | `(mocker: NavigatedViewer)` | Mocker initialized |
| mocker-destroy | `(mocker: NavigatedViewer)` | Mocker destroyed |

| Method | Description |
|--------|-------------|
| createNewProcess(xml) | Load new BPMN XML into canvas |
| setSequenceFlows(flows) | Set gateway flow paths for simulation |
| setTaskUserInfos(userInfos) | Set user task assignees for simulation |
| getSimulationPath() | Get current simulation path data |
| toggleTheme(theme?) | Toggle dark/light theme |
| toggleLang(lang?) | Toggle Chinese/English |
| resetViewport() | Reset canvas to fit viewport |
| playMock() | Start/continue simulation |
| pauseMock() | Pause simulation |
| resetMock() | Reset simulation state |

### TippyPopover

A tooltip popover component based on Tippy.js, used internally by the viewer components for node detail tooltips.

## 🤝 Peer Dependencies

Ensure these are installed in your project:

```json
{
  "vue": "^3.2.0",
  "vue-i18n": "^9.0.0",
  "bpmn-js": "^18.0.0",
  "bpmn-js-i18n-zh": "^1.0.0",
  "diagram-js-grid-bg": "^1.0.0"
}
```

> **Note**: `vue-i18n`, `bpmn-js-i18n-zh`, and `diagram-js-grid-bg` are optional — they can be omitted if their features are not needed.

## 🛠️ Development

```bash
git clone https://github.com/xietongjian/bpmn-viewer.git
cd bpmn-viewer
pnpm install
pnpm dev     # Development with hot-reload
pnpm build   # Build for production demo
pnpm build:compo   # Build library bundle (for npm publish)
pnpm lint    # Lint and format
```

## 📄 License

[MIT](LICENSE)