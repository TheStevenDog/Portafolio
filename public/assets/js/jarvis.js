/**
 * J.A.R.V.I.S. PROTOCOL // STARK INDUSTRIES OS ENGINE
 * Arc Reactor Canvas, Scroll-Driven Assembly, Telemetry & Web Audio Synthesizer
 * Built for Steven Rueda Lopez Portfolio
 */

(function () {
  'use strict';

  // ==================================================================
  // 1. WEB AUDIO SYNTHESIZER (Sci-Fi Futuristic Acoustic Feedback)
  // ==================================================================
  let audioCtx = null;
  let soundEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playJarvisTone(type) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(950, now + 0.1);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'assemble') {
        // Dual laser resonance
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);

        osc.type = 'sine';
        osc2.type = 'sawtooth';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.22);
        osc2.frequency.setValueAtTime(260, now);
        osc2.frequency.exponentialRampToValueAtTime(600, now + 0.22);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        gain2.gain.setValueAtTime(0.02, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.start(now);
        osc.stop(now + 0.22);
        osc2.start(now);
        osc2.stop(now + 0.22);
      }
    } catch (e) {
      console.warn('Audio feedback failed:', e);
    }
  }

  // Audio Toggle Button Setup
  function setupAudioToggle() {
    const audioBtn = document.getElementById('hud-audio-toggle');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', function () {
      initAudio();
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        audioBtn.classList.add('sound-active');
        audioBtn.innerHTML = '<i class="bi bi-volume-up-fill"></i> AUDIO: ONLINE';
        playJarvisTone('click');
      } else {
        audioBtn.classList.remove('sound-active');
        audioBtn.innerHTML = '<i class="bi bi-volume-mute-fill"></i> AUDIO: OFF';
      }
    });

    // Add acoustic hover sounds to buttons, nav items, and cards
    document.querySelectorAll('.navmenu a, .jarvis-btn, .portfolio-links a, .social-links a, .portfolio-filters li').forEach(el => {
      el.addEventListener('mouseenter', () => playJarvisTone('hover'));
      el.addEventListener('click', () => playJarvisTone('click'));
    });
  }

  // ==================================================================
  // 2. TEXT SCRAMBLE / DECRYPT EFFECT
  // ==================================================================
  const SCRAMBLE_CHARS = '0123456789ABCDEF/\\#<>_%*+=-~[]';

  function scrambleText(element) {
    if (!element || element.dataset.scrambling === 'true') return;
    const finalPhrase = element.dataset.originalText || element.innerText.trim();
    if (!element.dataset.originalText) {
      element.dataset.originalText = finalPhrase;
    }

    element.dataset.scrambling = 'true';
    let iteration = 0;
    const maxIterations = finalPhrase.length * 2.5;

    const interval = setInterval(() => {
      element.innerText = finalPhrase
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 2.5) {
            return finalPhrase[index];
          }
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');

      iteration++;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        element.innerText = finalPhrase;
        element.dataset.scrambling = 'false';
      }
    }, 28);
  }

  // ==================================================================
  // 3. ARC REACTOR & HOLOGRAPHIC CANVAS
  // ==================================================================
  function initJarvisCanvas() {
    const canvas = document.getElementById('jarvis-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let angle = 0;
    let scrollSpeedMultiplier = 1;
    let particles = [];
    const PARTICLE_COUNT = 45;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Particle constructor
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    let lastScrollY = window.scrollY;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Arc Reactor Center Coordinates (shifted toward right in desktop, centered on mobile)
      const isDesktop = width >= 1200;
      const centerX = isDesktop ? width * 0.68 : width * 0.5;
      const centerY = height * 0.48;

      // Arc Reactor base radius
      const baseRadius = Math.min(width, height) * 0.22;

      // Draw Particles
      ctx.fillStyle = '#00f0ff';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = p.alpha * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reactor Outer Ring 1 (Segmented Dashes)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.35, 0, Math.PI * 2);
      ctx.stroke();

      // Outer Ring 2 (Counter-rotating brackets)
      ctx.rotate(-angle * 1.8);
      ctx.strokeStyle = 'rgba(0, 136, 255, 0.35)';
      ctx.lineWidth = 2;
      ctx.setLineDash([35, 45, 10, 45]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.15, 0, Math.PI * 2);
      ctx.stroke();

      // Reactor Triangular Core (Arc Reactor Emblem)
      ctx.rotate(angle * 2.5);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const theta = (i * 2 * Math.PI) / 3;
        const r = baseRadius * 0.65;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inverted Inner Triangle
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const theta = (i * 2 * Math.PI) / 3 + Math.PI;
        const r = baseRadius * 0.4;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Core Glowing Pulse
      const glowGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, baseRadius * 0.45);
      glowGrad.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
      glowGrad.addColorStop(0.5, 'rgba(0, 136, 255, 0.12)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Concentric Thin Ring
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.22, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Update rotation based on scroll delta
      const deltaY = Math.abs(window.scrollY - lastScrollY);
      scrollSpeedMultiplier = 1 + Math.min(deltaY * 0.05, 4);
      lastScrollY = window.scrollY;

      angle += 0.004 * scrollSpeedMultiplier;

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  // ==================================================================
  // 4. SCROLL-DRIVEN ASSEMBLY & HUD TELEMETRY ENGINE
  // ==================================================================
  function initScrollAssemblyEngine() {
    const assemblyPctEl = document.getElementById('hud-assembly-pct');
    const assemblyBarEl = document.getElementById('hud-assembly-bar');
    const scrollDepthEl = document.getElementById('hud-scroll-depth');
    const sectorEl = document.getElementById('hud-sector');
    const conduitBeam = document.querySelector('.scroll-energy-beam');

    // Section Sector Registry
    const sectors = [
      { id: 'hero', name: 'SEC 00 // BOOT SEQUENCE' },
      { id: 'about', name: 'SEC 01 // BIOMETRICS & OVERVIEW' },
      { id: 'stats', name: 'SEC 02 // PERFORMANCE METRICS' },
      { id: 'skills', name: 'SEC 03 // TECHNICAL MATRIX' },
      { id: 'resume', name: 'SEC 04 // MISSION TIMELINE' },
      { id: 'portfolio', name: 'SEC 05 // SYSTEM BLUEPRINTS' },
      { id: 'contact', name: 'SEC 06 // TRANSMISSION LINK' }
    ];

    function updateScrollTelemetry() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(Math.round((scrollY / docHeight) * 100), 100) : 0;

      if (assemblyPctEl) assemblyPctEl.textContent = pct + '%';
      if (assemblyBarEl) assemblyBarEl.style.width = pct + '%';
      if (scrollDepthEl) scrollDepthEl.textContent = 'Z-INDEX: ' + (1000 + Math.round(scrollY * 0.5));
      if (conduitBeam) conduitBeam.style.height = pct + '%';

      // Detect current sector
      const middleY = scrollY + window.innerHeight * 0.35;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectors[i].id);
        if (sec && middleY >= sec.offsetTop) {
          if (sectorEl && sectorEl.textContent !== sectors[i].name) {
            sectorEl.textContent = sectors[i].name;
            scrambleText(sectorEl);
          }
          break;
        }
      }
    }

    window.addEventListener('scroll', updateScrollTelemetry, { passive: true });
    updateScrollTelemetry();

    // IntersectionObserver for Module Assembly on Scroll
    const assembleElements = document.querySelectorAll('.jarvis-assemble');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('assembled');

          // Trigger sound if active
          playJarvisTone('assemble');

          // Scramble titles inside this assembled element
          el.querySelectorAll('[data-scramble="true"]').forEach(scrambleEl => {
            scrambleText(scrambleEl);
          });

          // Trigger internal power gauges
          el.querySelectorAll('.power-gauge-fill').forEach(fill => {
            const targetPct = fill.getAttribute('data-percentage') || '85%';
            fill.style.width = targetPct;
          });

          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    assembleElements.forEach(el => observer.observe(el));
  }

  // ==================================================================
  // 5. LIVE SYSTEM TIME CLOCK
  // ==================================================================
  function initClock() {
    const timeEl = document.getElementById('hud-system-time');
    if (!timeEl) return;

    function updateTime() {
      const d = new Date();
      const hrs = String(d.getHours()).padStart(2, '0');
      const mins = String(d.getMinutes()).padStart(2, '0');
      const secs = String(d.getSeconds()).padStart(2, '0');
      timeEl.textContent = `${hrs}:${mins}:${secs} STARK.T`;
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initClock();
    setupAudioToggle();
    initJarvisCanvas();
    initScrollAssemblyEngine();

    // Trigger initial scramble for page title and hero items
    document.querySelectorAll('.hero [data-scramble="true"]').forEach(el => {
      setTimeout(() => scrambleText(el), 300);
    });
  });

})();
