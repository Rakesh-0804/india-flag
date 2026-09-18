# National Flag of India | Tiranga Portal 🇮🇳

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](manifest.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An interactive, responsive, and modern web application dedicated to the **National Flag of India (Tiranga)**. Built with HTML5, CSS3 Custom Properties, Progressive Web App (PWA) Offline Service Worker, Canvas API, Web Audio API, Vector SVG graphics, and vanilla JavaScript.

---

## ✨ Features

- 📱 **Progressive Web App (PWA) & Offline Mode**: Installable on Android, iOS, Windows, and Mac with offline caching via `sw.js` and `manifest.json`.
- 🔗 **Web Share API**: One-click sharing of portal link and details across native social share sheets or instant clipboard copying.
- 🚩 **Flag Hoisting Ceremony**: Interactive flag hoisting experience complete with a metallic flagpole, rising flag animation, National Anthem playback, and celebratory falling marigold & rose flower petal particles.
- 📜 **Flag Code Protocols Modal**: Quick reference guide on display rules, Flag Code of India 2002 amendments, and dignified disposal protocols.
- 🇮🇳 **Official Flag Proportions**: Rendered with exact 3:2 width-to-height aspect ratio and equal horizontal tricolor bands.
- 🎨 **Official Color Specifications**:
  - **India Saffron (`#FF9933`)**: Courage, strength, and sacrifice.
  - **White (`#FFFFFF`)**: Peace, truth, and purity.
  - **India Green (`#138808`)**: Faith, prosperity, and chivalry.
  - **Navy Blue (`#000080`)**: Universal truth and eternal progress.
- 🎵 **National Anthem Audio Player**: Integrated Web Audio API synthesized audio player for *Jana Gana Mana* with play/pause controls, progress bar, mute button, and animated equalizer bars.
- 🖼️ **High-Resolution PNG Flag Exporter**: One-click export that generates a 1800×1200 HD PNG image of the Indian Flag with crisp Ashoka Chakra details.
- ⚙️ **Vector Ashoka Chakra**: High-resolution, scalable SVG with 24 precise spokes.
- 🌊 **Realistic Waving Flag Animation**: Toggleable 3D perspective waving cloth effect powered by CSS keyframes.
- 🎡 **24-Spoke Virtue Explorer**: Interactive wheel explorer showcasing the 24 principles of Dharma represented by the Ashoka Chakra.
- 📋 **One-Click Color Code Copy**: Instant clipboard copying for HEX color codes with toast feedback.
- 🌙 **Dark/Light Mode**: Smooth theme toggling with `localStorage` preference persistence.
- 🧠 **Interactive Heritage & Quiz Page**: Discover the history of Pingali Venkayya and test your knowledge with the National Tricolor Quiz.

---

## 📁 Repository Structure

```text
india-flag-main/
├── assets/
│   ├── ashoka_chakra.svg   # Vector graphic of the 24-spoke Ashoka Chakra
│   ├── chakara.jpeg        # Original image asset
│   └── comdey.webp         # Heritage media asset
├── index.html              # Main Flag Portal, Anthem Player, Flag Hoisting, PWA & Flag Code Modal
├── fun.html                # Heritage, History & National Knowledge Quiz Page
├── style.css               # Modern responsive CSS design system, flagpole & modal styles
├── script.js               # PWA SW registration, Web Share API, theme, hoisting & quiz logic
├── manifest.json           # Web App Manifest for PWA installation
├── sw.js                  # Service Worker script for offline caching
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

---

## 🚀 Quick Start & Local Preview

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/Rakesh-0804/india-flag.git
   cd india-flag
   ```

2. **Open in Browser**:
   - Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
   - Or serve using Python HTTP server:
     ```bash
     python -m http.server 8000
     ```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE). Jai Hind! 🇮🇳
