/* ==============================================
   Hack for Social Impact Seattle — main.js
   ============================================== */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     Translations (i18n)
  ────────────────────────────────────────────── */
  const i18n = {
    en: {
      'nav-home':    'Home',
      'nav-concept': 'Concept',
      'nav-about':   'About Us',
      'nav-involve': 'Get Involved',
      'nav-contact': 'Contact Us',

      'hero-badge':   'Emerald City Hackathon',
      'hero-date':    'April 26, 2026 \u00a0|\u00a0 Seattle, WA',
      'hero-title':   'Build technology solutions that create real, measurable change for communities in need.',
      'register-btn': 'Coming Soon',

      'participants-title': 'Who Can Join?',
      'participants-h1': 'Open to Everyone',
      'participants-p1': 'Students, professionals, and everyone in between. All backgrounds and skill levels are welcome.',
      'participants-h2': 'Individual or Group',
      'participants-p2': 'Participate solo or as a group of up to 5 people.',
      'participants-h3': 'Form Your Team Early',
      'participants-p3': 'We recommend forming your group before the event day to get a head start.',

      'concept-title':    'What Is This Event?',
      'concept-c1-title': 'Collaborative Problem-Solving',
      'concept-c1-text':  'Technologists and nonprofits work side by side to tackle real community challenges in a single day.',
      'concept-c2-title': 'Open to All Skill Levels',
      'concept-c2-text':  "Whether you're a seasoned developer or a newcomer, everyone has a role to play in building solutions.",
      'concept-c3-title': 'Prototype in a Day',
      'concept-c3-text':  'Teams build functional prototypes within the event timeframe \u2014 moving from concept to working product.',
      'concept-c4-title': 'Real-World Challenges',
      'concept-c4-text':  'Challenges are sourced directly from community organizations facing genuine and pressing needs.',

      'about-title': 'About Us',
      'about-p1':    'This initiative began in San Francisco with a simple belief: technology should serve people, not just profit. We focus on practical solution building \u2014 going beyond ideation to create tools that nonprofits can actually use.',
      'about-p2':    "We're now expanding to Seattle to connect local technologists with nonprofits tackling the Pacific Northwest's most pressing social challenges. Every line of code written at this event has the potential to change lives.",
      'stat-day':    'Day',
      'stat-impact': 'Impact',

      'involve-title':         'Get Involved',
      'involve-ngo-title':     'Nonprofits',
      'involve-ngo-text':      'Submit your technology challenge and work alongside talented volunteers to build a solution your organization can use right away.',
      'involve-ngo-btn':       'Submit a Challenge',
      'involve-sponsor-title': 'Sponsors',
      'involve-sponsor-text':  'Support the event through sponsorships and donations. Your contribution directly enables nonprofits to access skilled tech talent.',
      'involve-sponsor-btn':   'Become a Sponsor',
      'involve-vol-title':     'Volunteers',
      'involve-vol-text':      'Join as a developer, designer, project manager, or mentor. All skill sets are welcome \u2014 bring your expertise to make an impact.',
      'involve-vol-btn':       'Volunteer',

      'contact-title':         'Contact Us',
      'contact-subtitle':      "Have questions? Reach out and we'll get back to you.",
      'contact-label-name':    'Name',
      'contact-label-email':   'Email',
      'contact-label-message': 'Message',
      'contact-ph-name':       'Your Name',
      'contact-ph-email':      'your@email.com',
      'contact-ph-message':    "Tell us how you'd like to get involved...",
      'contact-btn':           'Send Message',
      'contact-location':      'Seattle, WA',

      /* Modal: NGO */
      'modal-ngo-title':         'Submit a Challenge',
      'modal-ngo-sub':           "Tell us about your organization\u2019s technology challenge.",
      'modal-field-name':        'Name',
      'modal-field-email':       'Email',
      'modal-ngo-field-org':     'Organization Name',
      'modal-ngo-ph-org':        'Your Organization',
      'modal-ngo-field-challenge':'Challenge Description',
      'modal-ngo-ph-challenge':  'Describe the technology challenge your organization faces\u2026',
      'modal-ngo-btn':           'Submit Challenge',

      /* Modal: Sponsor */
      'modal-sponsor-title':    'Become a Sponsor',
      'modal-sponsor-sub':      'Let\u2019s talk about how you can support the event.',
      'modal-sponsor-field-org':'Company / Organization',
      'modal-sponsor-ph-org':   'Your Company',
      'modal-sponsor-field-msg':'Message',
      'modal-sponsor-ph-msg':   'How would you like to support the event?',
      'modal-sponsor-btn':      'Send Inquiry',

      /* Modal: Volunteer */
      'modal-vol-title':       'Volunteer Registration',
      'modal-vol-sub':         'Join our team of volunteers and make an impact.',
      'modal-vol-field-skills':'Skills / Role',
      'modal-vol-ph-skills':   'Developer, Designer, PM, Mentor\u2026',
      'modal-vol-field-msg':   'Message',
      'modal-vol-ph-msg':      'Tell us a bit about yourself\u2026',
      'modal-vol-btn':         'Register as Volunteer',

      'footer-copy': '\u00a9 2026 Hack for Social Impact Seattle. All rights reserved.',
    },

    ja: {
      'nav-home':    '\u30db\u30fc\u30e0',
      'nav-concept': '\u30b3\u30f3\u30bb\u30d7\u30c8',
      'nav-about':   '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'nav-involve': '\u53c2\u52a0\u3059\u308b',
      'nav-contact': '\u304a\u554f\u3044\u5408\u308f\u305b',

      'hero-badge':   '\u30a8\u30e1\u30e9\u30eb\u30c9\u30b7\u30c6\u30a3 \u30cf\u30c3\u30ab\u30bd\u30f3',
      'hero-date':    '2026\u5e744\u670826\u65e5 \u00a0|\u00a0 \u30b7\u30a2\u30c8\u30eb\u3001\u30ef\u30b7\u30f3\u30c8\u30f3\u5dde',
      'hero-title':   '\u56f0\u3063\u3066\u3044\u308b\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3001\u672c\u5f53\u306e\u5909\u5316\u3092\u3082\u305f\u3089\u3059\u6280\u8853\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u3088\u3046\u3002',
      'register-btn': '\u53d7\u4ed8\u6e96\u5099\u4e2d',

      'participants-title': '\u53c2\u52a0\u306b\u3064\u3044\u3066',
      'participants-h1': '\u8ab0\u3067\u3082\u53c2\u52a0\u6b53\u8fce',
      'participants-p1': '\u5b66\u751f\u3082\u793e\u4f1a\u4eba\u3082\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3084\u30b9\u30ad\u30eb\u30ec\u30d9\u30eb\u3092\u554f\u308f\u305a\u3001\u3069\u306a\u305f\u3067\u3082\u3054\u53c2\u52a0\u3044\u305f\u3060\u3051\u307e\u3059\u3002',
      'participants-h2': '\u500b\u4eba\u30fb\u30b0\u30eb\u30fc\u30d7\u53c2\u52a0OK',
      'participants-p2': '1\u4eba\u3067\u3082\u3001\u6700\u59271\u30b0\u30eb\u30fc\u30d75\u540d\u3067\u3082\u53c2\u52a0\u3067\u304d\u307e\u3059\u3002',
      'participants-h3': '\u4e8b\u524d\u306e\u30c1\u30fc\u30e0\u7d50\u6210\u3092\u63a8\u5968',
      'participants-p3': '\u30a4\u30d9\u30f3\u30c8\u5f53\u65e5\u306b\u30b9\u30e0\u30fc\u30ba\u306b\u30b9\u30bf\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u3001\u4e8b\u524d\u306b\u30b0\u30eb\u30fc\u30d7\u3092\u7d50\u6210\u3057\u3066\u306e\u3054\u53c2\u52a0\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002',

      'concept-title':    '\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u3064\u3044\u3066',
      'concept-c1-title': '\u5354\u50cd\u306b\u3088\u308b\u554f\u984c\u89e3\u6c7a',
      'concept-c1-text':  '\u6280\u8853\u8005\u3068\u975e\u55b6\u5229\u56e3\u4f53\u304c\u5354\u529b\u3057\u30011\u65e5\u3067\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306e\u672c\u7269\u306e\u8ab2\u984c\u306b\u53d6\u308a\u7d44\u307f\u307e\u3059\u3002',
      'concept-c2-title': '\u30b9\u30ad\u30eb\u30ec\u30d9\u30eb\u4e0d\u554f',
      'concept-c2-text':  '\u7d4c\u9a13\u8c4a\u5bcc\u306a\u30a8\u30f3\u30b8\u30cb\u30a2\u3082\u521d\u5fc3\u8005\u3082\u5927\u6b53\u8fce\u3002\u8ab0\u3082\u304c\u89e3\u6c7a\u7b56\u3065\u304f\u308a\u306b\u8ca2\u732e\u3067\u304d\u307e\u3059\u3002',
      'concept-c3-title': '1\u65e5\u3067\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092',
      'concept-c3-text':  '\u30c1\u30fc\u30e0\u306f\u30a4\u30d9\u30f3\u30c8\u5f53\u65e5\u4e2d\u306b\u3001\u30a2\u30a4\u30c7\u30a2\u304b\u3089\u52d5\u304f\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u307e\u3067\u3092\u4ed5\u4e0a\u3052\u307e\u3059\u3002',
      'concept-c4-title': '\u73fe\u5b9f\u306e\u8ab2\u984c\u306b\u53d6\u308a\u7d44\u3080',
      'concept-c4-text':  '\u8ab2\u984c\u306f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u56e3\u4f53\u304b\u3089\u76f4\u63a5\u96c6\u3081\u305f\u3001\u672c\u7269\u306e\u30cb\u30fc\u30ba\u306b\u57fa\u3065\u304f\u3082\u306e\u3067\u3059\u3002',

      'about-title': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'about-p1':    '\u3053\u306e\u30a4\u30cb\u30b7\u30a2\u30c6\u30a3\u30d6\u306f\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u3067\u59cb\u307e\u308a\u307e\u3057\u305f\u3002\u300c\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306f\u5229\u76ca\u3060\u3051\u3067\u306a\u304f\u3001\u4eba\u3005\u306e\u305f\u3081\u306b\u4f7f\u308f\u308c\u308b\u3079\u304d\u300d\u3068\u3044\u3046\u4fe1\u5ff5\u306e\u3082\u3068\u3001\u30a2\u30a4\u30c7\u30a2\u306b\u3068\u3069\u307e\u3089\u305a\u3001\u975e\u55b6\u5229\u56e3\u4f53\u304c\u5b9f\u969b\u306b\u6d3b\u7528\u3067\u304d\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u308b\u3053\u3068\u306b\u6ce8\u529b\u3057\u3066\u3044\u307e\u3059\u3002',
      'about-p2':    '\u79c1\u305f\u3061\u306f\u4eca\u3001\u30b7\u30a2\u30c8\u30eb\u306b\u6d3b\u52d5\u3092\u5e83\u3052\u3001\u5730\u57df\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u30ce\u30fc\u30b9\u30a6\u30a8\u30b9\u30c8\u306e\u793e\u4f1a\u8ab2\u984c\u306b\u53d6\u308a\u7d44\u3080\u975e\u55b6\u5229\u56e3\u4f53\u3092\u3064\u306a\u3054\u3046\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u3067\u66f8\u304b\u308c\u308b\u30b3\u30fc\u30c9\u306e1\u884c1\u884c\u304c\u3001\u8ab0\u304b\u306e\u4eba\u751f\u3092\u5909\u3048\u308b\u53ef\u80fd\u6027\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002',
      'stat-day':    '\u65e5\u9593',
      'stat-impact': '\u30a4\u30f3\u30d1\u30af\u30c8',

      'involve-title':         '\u53c2\u52a0\u3059\u308b',
      'involve-ngo-title':     '\u975e\u55b6\u5229\u56e3\u4f53',
      'involve-ngo-text':      '\u6280\u8853\u7684\u306a\u8ab2\u984c\u3092\u63d0\u51fa\u3057\u3001\u512a\u79c0\u306a\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u3068\u5354\u529b\u3057\u3066\u3001\u3059\u3050\u306b\u6d3b\u7528\u3067\u304d\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u4e00\u7dd2\u306b\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002',
      'involve-ngo-btn':       '\u8ab2\u984c\u3092\u63d0\u51fa\u3059\u308b',
      'involve-sponsor-title': '\u30b9\u30dd\u30f3\u30b5\u30fc',
      'involve-sponsor-text':  '\u30b9\u30dd\u30f3\u30b5\u30fc\u30b7\u30c3\u30d7\u3084\u5bc4\u4ed8\u3067\u30a4\u30d9\u30f3\u30c8\u3092\u652f\u63f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3042\u306a\u305f\u306e\u652f\u63f4\u304c\u975e\u55b6\u5229\u56e3\u4f53\u3068\u512a\u79c0\u306a\u6280\u8853\u4eba\u6750\u3092\u3064\u306a\u304e\u307e\u3059\u3002',
      'involve-sponsor-btn':   '\u30b9\u30dd\u30f3\u30b5\u30fc\u306b\u306a\u308b',
      'involve-vol-title':     '\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2',
      'involve-vol-text':      '\u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u3001PM\u3001\u30e1\u30f3\u30bf\u30fc\u306a\u3069\u3001\u3042\u3089\u3086\u308b\u30b9\u30ad\u30eb\u3092\u6301\u3064\u65b9\u3092\u6b53\u8fce\u3002\u3042\u306a\u305f\u306e\u529b\u3067\u793e\u4f1a\u306b\u30a4\u30f3\u30d1\u30af\u30c8\u3092\u3002',
      'involve-vol-btn':       '\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u767b\u9332',

      'contact-title':         '\u304a\u554f\u3044\u5408\u308f\u305b',
      'contact-subtitle':      '\u3054\u8cea\u554f\u306f\u304a\u6c17\u8efd\u306b\u3002\u62c5\u5f53\u8005\u3088\u308a\u3054\u8fd4\u4fe1\u3044\u305f\u3057\u307e\u3059\u3002',
      'contact-label-name':    '\u304a\u540d\u524d',
      'contact-label-email':   '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
      'contact-label-message': '\u30e1\u30c3\u30bb\u30fc\u30b8',
      'contact-ph-name':       '\u304a\u540d\u524d',
      'contact-ph-email':      'your@email.com',
      'contact-ph-message':    '\u53c2\u52a0\u65b9\u6cd5\u306a\u3069\u304a\u6c17\u8efd\u306b\u3054\u8a18\u5165\u304f\u3060\u3055\u3044\u2026',
      'contact-btn':           '\u9001\u4fe1\u3059\u308b',
      'contact-location':      '\u30b7\u30a2\u30c8\u30eb\u3001\u30ef\u30b7\u30f3\u30c8\u30f3\u5dde',

      /* Modal: NGO */
      'modal-ngo-title':          '\u8ab2\u984c\u3092\u63d0\u51fa\u3059\u308b',
      'modal-ngo-sub':            '\u8cb4\u56e3\u4f53\u306e\u6280\u8853\u7684\u306a\u8ab2\u984c\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002',
      'modal-field-name':         '\u304a\u540d\u524d',
      'modal-field-email':        '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
      'modal-ngo-field-org':      '\u56e3\u4f53\u540d',
      'modal-ngo-ph-org':         '\u56e3\u4f53\u540d\u3092\u5165\u529b',
      'modal-ngo-field-challenge':'\u8ab2\u984c\u306e\u8aac\u660e',
      'modal-ngo-ph-challenge':   '\u56e3\u4f53\u304c\u62b1\u3048\u308b\u6280\u8853\u7684\u306a\u8ab2\u984c\u3092\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u2026',
      'modal-ngo-btn':            '\u8ab2\u984c\u3092\u9001\u4fe1\u3059\u308b',

      /* Modal: Sponsor */
      'modal-sponsor-title':    '\u30b9\u30dd\u30f3\u30b5\u30fc\u306b\u306a\u308b',
      'modal-sponsor-sub':      '\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u652f\u63f4\u306b\u3064\u3044\u3066\u304a\u8a71\u3057\u3057\u307e\u3057\u3087\u3046\u3002',
      'modal-sponsor-field-org':'\u4f1a\u793e\u30fb\u56e3\u4f53\u540d',
      'modal-sponsor-ph-org':   '\u4f1a\u793e\u540d\u3092\u5165\u529b',
      'modal-sponsor-field-msg':'\u30e1\u30c3\u30bb\u30fc\u30b8',
      'modal-sponsor-ph-msg':   '\u30a4\u30d9\u30f3\u30c8\u3078\u306e\u652f\u63f4\u65b9\u6cd5\u306b\u3064\u3044\u3066\u304a\u6c17\u8efd\u306b\u3054\u8a18\u5165\u304f\u3060\u3055\u3044',
      'modal-sponsor-btn':      '\u304a\u554f\u3044\u5408\u308f\u305b\u3092\u9001\u4fe1',

      /* Modal: Volunteer */
      'modal-vol-title':       '\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u767b\u9332',
      'modal-vol-sub':         '\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u30c1\u30fc\u30e0\u306b\u53c2\u52a0\u3057\u3066\u30a4\u30f3\u30d1\u30af\u30c8\u3092\u3002',
      'modal-vol-field-skills':'\u30b9\u30ad\u30eb\u30fb\u5f79\u5272',
      'modal-vol-ph-skills':   '\u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u3001PM\u3001\u30e1\u30f3\u30bf\u30fc\u2026',
      'modal-vol-field-msg':   '\u30e1\u30c3\u30bb\u30fc\u30b8',
      'modal-vol-ph-msg':      '\u81ea\u5df1\u7d39\u4ecb\u3092\u304a\u6c17\u8efd\u306b\u3054\u8a18\u5165\u304f\u3060\u3055\u3044\u2026',
      'modal-vol-btn':         '\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u767b\u9332\u3059\u308b',

      'footer-copy': '\u00a9 2026 Hack for Social Impact Seattle. All rights reserved.',
    }
  };

  /* ──────────────────────────────────────────────
     Language state
  ────────────────────────────────────────────── */
  let currentLang = localStorage.getItem('hsi-lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hsi-lang', lang);
    document.documentElement.lang = lang;
    const t = i18n[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = lang === 'en' ? '\u65e5\u672c\u8a9e' : 'English';
  }

  /* ──────────────────────────────────────────────
     Language button
  ────────────────────────────────────────────── */
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLanguage(currentLang === 'en' ? 'ja' : 'en');
    });
  }

  /* ──────────────────────────────────────────────
     Navbar scroll effect
  ────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ──────────────────────────────────────────────
     Hamburger menu
  ────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ──────────────────────────────────────────────
     Smooth scroll
  ────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
      ) || 72;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  /* ──────────────────────────────────────────────
     Scroll Animations (Intersection Observer)
  ────────────────────────────────────────────── */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(function (el) {
    observer.observe(el);
  });

  /* ──────────────────────────────────────────────
     Modal logic
  ────────────────────────────────────────────── */
  function openModal(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Focus first input
    const first = overlay.querySelector('input, textarea');
    if (first) setTimeout(function () { first.focus(); }, 300);
  }

  function closeModal(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open buttons
  document.querySelectorAll('[data-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-modal'));
    });
  });

  // Close: × button or overlay background
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    const closeBtn = overlay.querySelector('[data-close]');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () { closeModal(overlay); });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });

  /* ──────────────────────────────────────────────
     Hero: Seattle Rain (generated)
  ────────────────────────────────────────────── */
  function buildRain() {
    const container = document.getElementById('hero-rain');
    if (!container) return;
    const count = 22;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      drop.style.cssText = [
        'position:absolute',
        'width:1px',
        'border-radius:2px',
        'pointer-events:none',
        'background:linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)',
        'left:' + (Math.random() * 105 - 5) + '%',
        'height:' + (24 + Math.random() * 40) + 'px',
        'top:-60px',
        'animation:rain-fall ' + (0.9 + Math.random() * 1.4) + 's linear ' + (Math.random() * 3) + 's infinite',
        'transform:rotate(10deg)',
      ].join(';');
      fragment.appendChild(drop);
    }
    container.appendChild(fragment);

    // Inject keyframe if not already present
    if (!document.getElementById('rain-style')) {
      const style = document.createElement('style');
      style.id = 'rain-style';
      style.textContent = '@keyframes rain-fall{0%{transform:translateY(0) rotate(10deg);opacity:0}8%{opacity:1}90%{opacity:0.5}100%{transform:translateY(110vh) translateX(18px) rotate(10deg);opacity:0}}';
      document.head.appendChild(style);
    }
  }

  /* ──────────────────────────────────────────────
     Hero: Seattle Mountains SVG
  ────────────────────────────────────────────── */
  function buildMountains() {
    const container = document.getElementById('hero-mountains');
    if (!container) return;
    container.innerHTML = '<svg viewBox="0 0 1440 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">'
      + '<path d="M0,180 L0,130 L80,90 L160,120 L260,55 L340,95 L420,40 L500,80 L580,25 L660,70 L740,15 L820,65 L900,30 L980,75 L1060,20 L1140,68 L1220,38 L1300,80 L1380,50 L1440,85 L1440,180 Z" fill="rgba(26,10,56,0.45)"/>'
      + '<path d="M0,180 L0,150 L100,120 L200,140 L320,100 L440,130 L560,95 L680,125 L800,90 L920,118 L1040,85 L1160,115 L1280,95 L1440,125 L1440,180 Z" fill="rgba(26,10,56,0.65)"/>'
      + '</svg>';
  }

  /* ──────────────────────────────────────────────
     Init
  ────────────────────────────────────────────── */
  buildRain();
  buildMountains();
  setLanguage(currentLang);

})();
