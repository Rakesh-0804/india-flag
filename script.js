// Indian Flag Interactive Portal Script

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCopyColor();
    initWaveToggle();
    initHoistCeremony();
    initDiyaTribute();
    initFlagCodeModal();
    initQuoteCardCreator();
    initPNGExport();
    initAnthemPlayer();
    initAnthemLyrics();
    initFlagCalculator();
    initSpokesExplorer();
    initShareButton();
    initQuiz();
    registerServiceWorker();
});

// Iconic Patriotic Quotes
const patrioticQuotes = [
    { quote: "Give me blood, and I shall give you freedom!", author: "Netaji Subhash Chandra Bose" },
    { quote: "Satyameva Jayate — Truth Alone Triumphs.", author: "Mundaka Upanishad / National Motto" },
    { quote: "Where the mind is without fear and the head is held high...", author: "Rabindranath Tagore" },
    { quote: "They may kill me, but they cannot kill my ideas.", author: "Bhagat Singh" },
    { quote: "A country's greatness lies in its undying ideals of love and sacrifice.", author: "Sarojini Naidu" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "A flag is a necessity for all nations. Millions have died for it.", author: "Pingali Venkayya" },
    { quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. A. P. J. Abdul Kalam" }
];

let currentQuoteIdx = 0;

// Feature: Patriotic Greeting Card Creator
function initQuoteCardCreator() {
    const openBtn = document.getElementById('quote-open-btn');
    const closeBtn = document.getElementById('quote-close-btn');
    const modal = document.getElementById('quote-modal');
    const nextBtn = document.getElementById('next-quote-btn');
    const exportBtn = document.getElementById('export-card-btn');
    const recipientInput = document.getElementById('custom-recipient-input');

    const quoteDisplay = document.getElementById('quote-text-display');
    const authorDisplay = document.getElementById('quote-author-display');
    const recipientDisplay = document.getElementById('quote-recipient-display');

    if (!openBtn || !modal) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        updateQuoteCardDisplay();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuoteIdx = (currentQuoteIdx + 1) % patrioticQuotes.length;
            updateQuoteCardDisplay();
        });
    }

    if (recipientInput && recipientDisplay) {
        recipientInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            recipientDisplay.textContent = val ? `Greetings for ${val}! Jai Hind! 🇮🇳` : 'Warm Patriotic Wishes & Jai Hind! 🇮🇳';
        });
    }

    if (exportBtn) {
        exportBtn.addEventListener('click', exportGreetingCardPNG);
    }
}

function updateQuoteCardDisplay() {
    const q = patrioticQuotes[currentQuoteIdx];
    const quoteDisplay = document.getElementById('quote-text-display');
    const authorDisplay = document.getElementById('quote-author-display');

    if (quoteDisplay) quoteDisplay.textContent = `"${q.quote}"`;
    if (authorDisplay) authorDisplay.textContent = `— ${q.author}`;
}

function exportGreetingCardPNG() {
    const q = patrioticQuotes[currentQuoteIdx];
    const recipientInput = document.getElementById('custom-recipient-input');
    const recipientName = recipientInput && recipientInput.value.trim() ? recipientInput.value.trim() : 'Friends & Family';

    const width = 1200;
    const height = 700;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(1, '#F8FAFC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Tricolor Top Accent Banner
    ctx.fillStyle = '#FF9933';
    ctx.fillRect(0, 0, width, 18);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 18, width, 18);
    ctx.fillStyle = '#138808';
    ctx.fillRect(0, 36, width, 18);

    // Outer Border Frame
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Header Badge
    ctx.fillStyle = '#000080';
    ctx.fillRect(width / 2 - 120, 80, 240, 36);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('INSPIRING PATRIOTIC QUOTE', width / 2, 104);

    // Quote Text
    ctx.fillStyle = '#0F172A';
    ctx.font = 'italic bold 28px "Segoe UI", sans-serif';
    
    // Wrap quote text into lines
    const words = q.quote.split(' ');
    let line = '';
    let y = 220;
    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > 900 && n > 0) {
            ctx.fillText(line, width / 2, y);
            line = words[n] + ' ';
            y += 42;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, width / 2, y);

    // Author
    y += 50;
    ctx.fillStyle = '#E6801A';
    ctx.font = 'bold 22px "Segoe UI", sans-serif';
    ctx.fillText(`— ${q.author}`, width / 2, y);

    // Footer Message
    y += 100;
    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, y - 30);
    ctx.lineTo(1000, y - 30);
    ctx.stroke();

    ctx.fillStyle = '#138808';
    ctx.font = 'bold 24px "Segoe UI", sans-serif';
    ctx.fillText(`Greetings for ${recipientName}! Jai Hind! 🇮🇳`, width / 2, y);

    // Download PNG
    const link = document.createElement('a');
    link.download = `Patriotic_Greeting_Card_${recipientName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('Downloaded Customized Patriotic Greeting Card! 💌🇮🇳');
}

// PWA Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').then((reg) => {
                console.log('Tiranga Portal Service Worker registered:', reg.scope);
            }).catch((err) => {
                console.log('Service Worker registration failed:', err);
            });
        });
    }
}

// Web Share API Handler
function initShareButton() {
    const shareBtn = document.getElementById('share-btn');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', () => {
        const shareData = {
            title: 'Tiranga — National Flag of India Portal',
            text: 'Explore the official proportions, 24 spokes of Ashoka Chakra, Flag Hoisting ceremony, and National Anthem tune!',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Copied Portal Link to Clipboard! 🇮🇳');
            }).catch(() => {
                showToast('Share Link: ' + window.location.href);
            });
        }
    });
}

// Theme Management
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Anthem Lyrics & Sing-Along Highlighting
function initAnthemLyrics() {
    const toggleBtn = document.getElementById('lyrics-toggle-btn');
    const lyricsBox = document.getElementById('anthem-lyrics-box');
    if (!toggleBtn || !lyricsBox) return;

    toggleBtn.addEventListener('click', () => {
        const isHidden = lyricsBox.style.display === 'none';
        lyricsBox.style.display = isHidden ? 'block' : 'none';
        toggleBtn.textContent = isHidden ? '📜 Hide Lyrics' : '📜 Lyrics';
    });
}

function updateLyricsHighlight(currentSec) {
    const lyricsBox = document.getElementById('anthem-lyrics-box');
    if (!lyricsBox || lyricsBox.style.display === 'none') return;

    const lines = lyricsBox.querySelectorAll('.lyrics-line');
    let activeLine = null;

    lines.forEach(line => {
        const start = parseInt(line.getAttribute('data-start') || '0');
        if (currentSec >= start) {
            activeLine = line;
        }
        line.classList.remove('active');
    });

    if (activeLine) {
        activeLine.classList.add('active');
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Light Diya & Pay Respects Tribute
function initDiyaTribute() {
    const diyaBtn = document.getElementById('diya-btn');
    const diyaGlow = document.getElementById('diya-glow');
    if (!diyaBtn || !diyaGlow) return;

    diyaBtn.addEventListener('click', () => {
        const isVisible = diyaGlow.style.display !== 'none';
        diyaGlow.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            triggerPetalShower();
            showToast('Offered Tribute: Brass Diya Lighted at Flag Base! 🪔');
        } else {
            showToast('Tribute Diya Extinguished');
        }
    });
}

// Flag Dimensions Calculator
function initFlagCalculator() {
    const input = document.getElementById('flag-height-input');
    const widthVal = document.getElementById('calc-width-val');
    const bandVal = document.getElementById('calc-band-val');
    const chakraVal = document.getElementById('calc-chakra-val');
    const areaVal = document.getElementById('calc-area-val');

    if (!input) return;

    function recalculate() {
        const h = parseFloat(input.value) || 0;
        const w = h * 1.5;
        const b = h / 3;
        const c = b * 0.75;
        const area = h * w;

        if (widthVal) widthVal.textContent = `${w.toFixed(1)} cm`;
        if (bandVal) bandVal.textContent = `${b.toFixed(1)} cm`;
        if (chakraVal) chakraVal.textContent = `${c.toFixed(1)} cm`;
        if (areaVal) areaVal.textContent = `${area.toLocaleString()} cm²`;
    }

    input.addEventListener('input', recalculate);
    recalculate();
}

// Copy Color Code
function initCopyColor() {
    const colorCards = document.querySelectorAll('.color-card');
    colorCards.forEach(card => {
        card.addEventListener('click', () => {
            const hex = card.getAttribute('data-color');
            if (hex) {
                navigator.clipboard.writeText(hex).then(() => {
                    showToast(`Copied ${hex} to clipboard!`);
                }).catch(err => {
                    showToast(`Failed to copy: ${err}`);
                });
            }
        });
    });
}

// Toast Notification
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Flag Waving Toggle
function initWaveToggle() {
    const waveToggleBtn = document.getElementById('wave-toggle');
    const flagContainer = document.getElementById('flag-container');
    if (!waveToggleBtn || !flagContainer) return;

    waveToggleBtn.addEventListener('click', () => {
        const isWaving = flagContainer.classList.toggle('waving');
        waveToggleBtn.setAttribute('aria-pressed', isWaving);
        waveToggleBtn.innerHTML = isWaving 
            ? '<span class="icon">🛑</span> Pause Flag Wave' 
            : '<span class="icon">🌊</span> Toggle Flag Wave';
    });
}

// Interactive Flag Hoisting Ceremony & Celebratory Flower Petals
function initHoistCeremony() {
    const hoistBtn = document.getElementById('hoist-btn');
    const flagpoleWrapper = document.getElementById('flagpole-wrapper');
    const flagContainer = document.getElementById('flag-container');
    if (!hoistBtn || !flagpoleWrapper) return;

    hoistBtn.addEventListener('click', () => {
        // Trigger Hoisting Animation
        flagpoleWrapper.classList.remove('hoisting');
        void flagpoleWrapper.offsetWidth; // Force reflow
        flagpoleWrapper.classList.add('hoisting');

        // Automatically start waving flag & play Anthem
        if (flagContainer) flagContainer.classList.add('waving');
        if (typeof startAnthem === 'function' && !isPlaying) {
            startAnthem();
        }

        // Spawn falling flower petals
        triggerPetalShower();
        showToast('Flag Hoisted with Pride & Honor! Jai Hind! 🇮🇳');
    });
}

function triggerPetalShower() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    container.innerHTML = '';
    const petalColors = ['#FF9933', '#138808', '#FFFFFF', '#E11D48', '#F59E0B'];

    for (let i = 0; i < 45; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';

        const size = Math.random() * 14 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.3}px`;
        petal.style.backgroundColor = petalColors[Math.floor(Math.random() * petalColors.length)];
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 2 + 3.5}s`;
        petal.style.animationDelay = `${Math.random() * 1.5}s`;

        container.appendChild(petal);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 6500);
}

// Flag Code Protocol Modal
function initFlagCodeModal() {
    const openBtn = document.getElementById('flagcode-open-btn');
    const closeBtn = document.getElementById('flagcode-close-btn');
    const modal = document.getElementById('flagcode-modal');

    if (!openBtn || !modal) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// High-Resolution PNG Flag Exporter
function initPNGExport() {
    const exportBtn = document.getElementById('export-png-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
        const width = 1800;
        const height = 1200; // 3:2 Ratio Aspect

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Band 1: Saffron
        ctx.fillStyle = '#FF9933';
        ctx.fillRect(0, 0, width, height / 3);

        // Band 2: White
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, height / 3, width, height / 3);

        // Band 3: Green
        ctx.fillStyle = '#138808';
        ctx.fillRect(0, (height / 3) * 2, width, height / 3);

        // Center Ashoka Chakra
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = (height / 3) * 0.43; // ~172px

        ctx.strokeStyle = '#000080';
        ctx.fillStyle = '#000080';
        ctx.lineWidth = 12;

        // Outer Rim Circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Rim Circle
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.9, 0, Math.PI * 2);
        ctx.stroke();

        // Central Hub
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.17, 0, Math.PI * 2);
        ctx.fill();

        // White Pin
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.07, 0, Math.PI * 2);
        ctx.fill();

        // Navy Center Dot
        ctx.fillStyle = '#000080';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.03, 0, Math.PI * 2);
        ctx.fill();

        // 24 Spokes & Outer Rim Dots
        for (let i = 0; i < 24; i++) {
            const angle = (i * 15 * Math.PI) / 180;
            const innerR = radius * 0.17;
            const outerR = radius * 0.9;

            // Spoke Polygon (Triangular pointed)
            const tipX = centerX + outerR * Math.cos(angle);
            const tipY = centerY + outerR * Math.sin(angle);

            const perpAngle1 = angle + Math.PI / 2;
            const perpAngle2 = angle - Math.PI / 2;

            const baseWidth = 4.5;
            const b1X = centerX + innerR * Math.cos(angle) + baseWidth * Math.cos(perpAngle1);
            const b1Y = centerY + innerR * Math.sin(angle) + baseWidth * Math.sin(perpAngle1);
            const b2X = centerX + innerR * Math.cos(angle) + baseWidth * Math.cos(perpAngle2);
            const b2Y = centerY + innerR * Math.sin(angle) + baseWidth * Math.sin(perpAngle2);

            ctx.beginPath();
            ctx.moveTo(b1X, b1Y);
            ctx.lineTo(tipX, tipY);
            ctx.lineTo(b2X, b2Y);
            ctx.closePath();
            ctx.fill();

            // Decorative Rim Dot
            const dotR = radius * 0.95;
            const dotX = centerX + dotR * Math.cos(angle);
            const dotY = centerY + dotR * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Trigger Download
        const link = document.createElement('a');
        link.download = 'Tiranga_National_Flag_India.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        showToast('Downloaded High-Resolution PNG Flag! 🇮🇳');
    });
}

// National Anthem Audio Synthesizer & Player
let audioCtx = null;
let isPlaying = false;
let anthemTimer = null;
let anthemTimeSec = 0;
const anthemDurationSec = 52;
let isMuted = false;

function initAnthemPlayer() {
    const playBtn = document.getElementById('anthem-play-btn');
    const playIcon = document.getElementById('anthem-play-icon');
    const statusText = document.getElementById('anthem-status-text');
    const equalizer = document.getElementById('equalizer');
    const progressSlider = document.getElementById('anthem-progress');
    const currentTimeText = document.getElementById('anthem-current-time');
    const durationText = document.getElementById('anthem-duration');
    const muteBtn = document.getElementById('anthem-mute-btn');

    if (!playBtn) return;

    durationText.textContent = formatTime(anthemDurationSec);

    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            startAnthem();
        } else {
            stopAnthem();
        }
    });

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            muteBtn.textContent = isMuted ? '🔇' : '🔊';
            showToast(isMuted ? 'Muted Audio' : 'Unmuted Audio');
        });
    }

    if (progressSlider) {
        progressSlider.addEventListener('input', (e) => {
            anthemTimeSec = Math.floor((e.target.value / 100) * anthemDurationSec);
            currentTimeText.textContent = formatTime(anthemTimeSec);
            updateLyricsHighlight(anthemTimeSec);
        });
    }
}

function startAnthem() {
    const playIcon = document.getElementById('anthem-play-icon');
    const statusText = document.getElementById('anthem-status-text');
    const equalizer = document.getElementById('equalizer');
    const progressSlider = document.getElementById('anthem-progress');
    const currentTimeText = document.getElementById('anthem-current-time');

    isPlaying = true;
    if (playIcon) playIcon.textContent = '⏸';
    if (statusText) statusText.textContent = 'Playing National Anthem — Jana Gana Mana';
    if (equalizer) equalizer.classList.add('playing');

    // Synthesize Jana Gana Mana tune notes via Web Audio API
    playSynthesizedAnthemNotes();

    anthemTimer = setInterval(() => {
        if (!isPlaying) return;
        anthemTimeSec++;
        if (anthemTimeSec > anthemDurationSec) {
            stopAnthem();
            return;
        }
        if (currentTimeText) currentTimeText.textContent = formatTime(anthemTimeSec);
        if (progressSlider) progressSlider.value = (anthemTimeSec / anthemDurationSec) * 100;
        updateLyricsHighlight(anthemTimeSec);
    }, 1000);
}

function stopAnthem() {
    isPlaying = false;
    if (anthemTimer) clearInterval(anthemTimer);
    const playIcon = document.getElementById('anthem-play-icon');
    const statusText = document.getElementById('anthem-status-text');
    const equalizer = document.getElementById('equalizer');

    if (playIcon) playIcon.textContent = '▶';
    if (statusText) statusText.textContent = 'Click play to listen to the National Anthem tune';
    if (equalizer) equalizer.classList.remove('playing');

    if (audioCtx) {
        audioCtx.close().catch(() => {});
        audioCtx = null;
    }
}

function playSynthesizedAnthemNotes() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        // Frequency mapping for Jana Gana Mana melody (Key of C Major)
        const notes = [
            { note: 261.63, duration: 0.4 }, // C4 - Ja
            { note: 293.66, duration: 0.4 }, // D4 - na
            { note: 329.63, duration: 0.4 }, // E4 - Ga
            { note: 329.63, duration: 0.4 }, // E4 - na
            { note: 329.63, duration: 0.4 }, // E4 - Ma
            { note: 329.63, duration: 0.4 }, // E4 - na
            { note: 329.63, duration: 0.4 }, // E4 - Ad
            { note: 329.63, duration: 0.4 }, // E4 - hi
            { note: 329.63, duration: 0.4 }, // E4 - na
            { note: 329.63, duration: 0.4 }, // E4 - ya
            { note: 329.63, duration: 0.6 }, // E4 - ka
            { note: 293.66, duration: 0.4 }, // D4 - Jay
            { note: 329.63, duration: 0.4 }, // E4 - a
            { note: 349.23, duration: 0.8 }, // F4 - He
            { note: 329.63, duration: 0.4 }, // E4 - Bha
            { note: 329.63, duration: 0.4 }, // E4 - rat
            { note: 293.66, duration: 0.4 }, // D4 - Bha
            { note: 293.66, duration: 0.4 }, // D4 - gya
            { note: 293.66, duration: 0.4 }, // D4 - Vi
            { note: 246.94, duration: 0.4 }, // B3 - dha
            { note: 293.66, duration: 0.4 }, // D4 - ta
            { note: 261.63, duration: 0.8 }  // C4 - ...
        ];

        let now = audioCtx.currentTime;
        notes.forEach(n => {
            if (isMuted) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(n.note, now);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + n.duration - 0.05);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(now);
            osc.stop(now + n.duration);
            now += n.duration;
        });
    } catch (e) {
        console.log('Audio Context Error:', e);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// 24 Spokes Virtue Explorer Data
const spokeVirtues = [
    { num: 1, name: "Love", desc: "Love towards all living beings and humanity." },
    { num: 2, name: "Courage", desc: "Bravery to stand up for justice and truth." },
    { num: 3, name: "Patience", desc: "Endurance, composure, and inner strength." },
    { num: 4, name: "Peace", desc: "Harmonious co-existence and tranquility." },
    { num: 5, name: "Kindness", desc: "Compassion and warmth for every soul." },
    { num: 6, name: "Goodness", desc: "Purity of thought, action, and character." },
    { num: 7, name: "Faithfulness", desc: "Devotion and loyalty to duties and principles." },
    { num: 8, name: "Gentleness", desc: "Mildness, humility, and consideration." },
    { num: 9, name: "Self-Control", desc: "Mastery over desires and emotions." },
    { num: 10, name: "Selflessness", desc: "Prioritizing collective welfare over ego." },
    { num: 11, name: "Self-Sacrifice", desc: "Willingness to sacrifice for the nation." },
    { num: 12, name: "Truthfulness", desc: "Unwavering commitment to honesty and Satyameva Jayate." },
    { num: 13, name: "Righteousness", desc: "Adherence to moral integrity and virtue." },
    { num: 14, name: "Justice", desc: "Fairness, equality, and unbiased judgment." },
    { num: 15, name: "Mercy", desc: "Forgiveness and empathy towards all." },
    { num: 16, name: "Grace", desc: "Elegance, dignity, and spiritual poise." },
    { num: 17, name: "Humility", desc: "Modesty and absence of arrogance." },
    { num: 18, name: "Loyalty", desc: "Unflinching dedication to the motherland." },
    { num: 19, name: "Sympathy", desc: "Sensitivity to the suffering of others." },
    { num: 20, name: "Spiritual Knowledge", desc: "Understanding the higher truths of existence." },
    { num: 21, name: "Moral Values", desc: "Upholding ethical standards in daily life." },
    { num: 22, name: "Wisdom", desc: "Discernment, foresight, and sound judgment." },
    { num: 23, name: "Goodwill", desc: "Benevolence and positive intent towards all." },
    { num: 24, name: "Love for All Creation", desc: "Reverence for nature, life, and the universe." }
];

function initSpokesExplorer() {
    const grid = document.getElementById('spokes-grid');
    const detailsBox = document.getElementById('spoke-details');
    if (!grid || !detailsBox) return;

    spokeVirtues.forEach(spoke => {
        const item = document.createElement('button');
        item.className = 'spoke-chip';
        item.innerHTML = `<span class="spoke-num">${spoke.num}</span> <span class="spoke-name">${spoke.name}</span>`;
        item.setAttribute('aria-label', `Spoke ${spoke.num}: ${spoke.name}`);
        
        item.addEventListener('click', () => {
            document.querySelectorAll('.spoke-chip').forEach(c => c.classList.remove('active'));
            item.classList.add('active');
            detailsBox.innerHTML = `
                <div class="spoke-card-active">
                    <div class="spoke-header">
                        <span class="spoke-badge">Spoke #${spoke.num}</span>
                        <h3>${spoke.name}</h3>
                    </div>
                    <p>${spoke.desc}</p>
                </div>
            `;
        });
        grid.appendChild(item);
    });

    // Select first spoke by default
    const firstChip = grid.querySelector('.spoke-chip');
    if (firstChip) firstChip.click();
}

// Quiz functionality for Trivia Page
const quizQuestions = [
    {
        question: "Who designed the original National Flag of India?",
        options: ["Mahatma Gandhi", "Pingali Venkayya", "Rabindranath Tagore", "B. R. Ambedkar"],
        answer: 1,
        explanation: "Pingali Venkayya, an Indian freedom fighter and agriculturist from Andhra Pradesh, designed the Flag."
    },
    {
        question: "What is the official aspect ratio (Width : Height) of the Indian Flag?",
        options: ["2:1", "4:3", "3:2", "16:9"],
        answer: 2,
        explanation: "The Flag Code of India specifies that the ratio of the length to the height of the Flag shall be 3:2."
    },
    {
        question: "When was the National Flag of India officially adopted by the Constituent Assembly?",
        options: ["15 August 1947", "26 January 1950", "22 July 1947", "2 October 1948"],
        answer: 2,
        explanation: "It was adopted in its present form during a meeting of the Constituent Assembly held on 22 July 1947."
    },
    {
        question: "What does the Navy Blue Ashoka Chakra represent?",
        options: ["The Ocean", "The Wheel of Dharma & Motion of Progress", "Eternal Sky", "Victory in War"],
        answer: 1,
        explanation: "The Ashoka Chakra has 24 spokes depicting the eternal Wheel of Law (Dharma) and continuous motion towards progress."
    }
];

function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    let currentScore = 0;
    let answeredCount = 0;

    quizContainer.innerHTML = '';
    quizQuestions.forEach((q, idx) => {
        const qCard = document.createElement('div');
        qCard.className = 'quiz-card';
        qCard.innerHTML = `
            <h4>Q${idx + 1}. ${q.question}</h4>
            <div class="options-grid" id="options-${idx}">
                ${q.options.map((opt, oIdx) => `
                    <button class="quiz-btn" data-q="${idx}" data-opt="${oIdx}">${opt}</button>
                `).join('')}
            </div>
            <div class="quiz-feedback" id="feedback-${idx}"></div>
        `;
        quizContainer.appendChild(qCard);
    });

    quizContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('quiz-btn')) return;
        const btn = e.target;
        const qIdx = parseInt(btn.getAttribute('data-q'));
        const optIdx = parseInt(btn.getAttribute('data-opt'));
        const q = quizQuestions[qIdx];
        const optionsGrid = document.getElementById(`options-${qIdx}`);
        const feedback = document.getElementById(`feedback-${qIdx}`);

        // Disable all buttons for this question
        optionsGrid.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);

        if (optIdx === q.answer) {
            btn.classList.add('correct');
            feedback.innerHTML = `<span class="text-success">✓ Correct!</span> ${q.explanation}`;
            currentScore++;
        } else {
            btn.classList.add('incorrect');
            const correctBtn = optionsGrid.querySelector(`[data-opt="${q.answer}"]`);
            if (correctBtn) correctBtn.classList.add('correct');
            feedback.innerHTML = `<span class="text-danger">✗ Incorrect.</span> ${q.explanation}`;
        }
        answeredCount++;

        if (answeredCount === quizQuestions.length) {
            showQuizResult(currentScore, quizQuestions.length);
        }
    });
}

function showQuizResult(score, total) {
    const resultBox = document.getElementById('quiz-result');
    if (!resultBox) return;
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <div class="quiz-score-card">
            <h3>Quiz Completed! 🎉</h3>
            <p>You scored <strong>${score} / ${total}</strong></p>
            <button class="btn btn-primary" onclick="location.reload()">Retry Quiz</button>
        </div>
    `;
}
