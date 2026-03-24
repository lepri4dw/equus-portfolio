/* ═══════════════════════════════════════
   EQUUS PORTFOLIO — Script
   ═══════════════════════════════════════ */

// ── i18n Translations ──
const translations = {
  ru: {
    'nav.projects': 'Проекты',
    'nav.tech': 'Технологии',
    'nav.advantages': 'Преимущества',
    'nav.contact': 'Контакты',

    'hero.badge': 'Разработка любой сложности',
    'hero.title1': 'Создаём цифровые',
    'hero.title2': 'продукты',
    'hero.title3': ' которые работают',
    'hero.subtitle': 'Полный цикл разработки: от лендингов и корпоративных сайтов до CRM-систем и мобильных приложений. Продакшен-проекты с реальными пользователями.',
    'hero.cta1': 'Смотреть проекты',
    'hero.cta2': 'Связаться',

    'stats.projects': 'Проектов завершено',
    'stats.mobile': 'Мобильных приложений',
    'stats.production': 'Проекта в продакшене',
    'stats.startups': 'Стартапа на запуске',

    'projects.tag': 'Портфолио',
    'projects.title': 'Проекты',
    'projects.desc': 'Реальные проекты — от лендингов до сложных CRM-платформ с мобильными приложениями',
    'projects.all': 'Все',
    'projects.landings': 'Лендинги',
    'projects.platforms': 'Платформы',
    'projects.mobileApps': 'Мобильные',

    'cat1.title': 'Лендинги и сайты-визитки',
    'cat1.desc': 'Быстрые, современные, адаптивные сайты для бизнеса — конверсия и первое впечатление',
    'cat2.title': 'Веб-платформы и CRM',
    'cat2.desc': 'Масштабные системы с админкой, ролями, бизнес-логикой и интеграциями',
    'cat3.title': 'Мобильные приложения',
    'cat3.desc': 'Кроссплатформенные приложения на Flutter с серверной частью на Django',

    'p.erai.desc': 'Корпоративный сайт-визитка для фармацевтической компании. Современный дизайн, адаптивная вёрстка, высокая скорость загрузки. Server-side rendering для SEO.',
    'p.erai.type': 'Корпоративный сайт',
    'p.zealon_land.desc': 'Промо-лендинг для мобильного приложения ZealOn — платформы быстрого найма. Анимации, продающая структура, мобильная адаптация.',
    'p.zealon_land.type': 'Промо-лендинг',
    'p.mashvara_land.desc': 'Промо-лендинг для AI-платформы Mashvara — сервиса валидации бизнес-идей. Чистый дизайн, продуманная структура для конверсии.',
    'p.mashvara_land.type': 'Промо-лендинг',
    'p.maxmetall.desc': 'Лендинг для металлургической компании с фокусом на SEO-оптимизацию. Сайт выведен в топ поисковой выдачи в своей нише. Дизайн логотипа включён в проект.',
    'p.maxmetall.type': 'Лендинг · SEO',
    'p.maxmetall.seo': '🔍 ТОП выдачи в нише',
    'p.visit': 'Посмотреть →',

    'p.live': '🟢 В продакшене',
    'p.pharmznanie.desc': 'Полноценная CRM-платформа для образовательного портала в фармацевтической отрасли. Включает систему обучения с уроками и курсами, подробную админ-панель, генерацию приказов и удостоверений, программу лояльности, многоролевую систему (куратор, производитель, администратор). Проект в продакшене 2+ месяцев с реальными пользователями. Полная миграция контента и пользователей со старой платформы.',
    'p.pharmznanie.type': 'CRM · Веб + Мобайл',
    'p.pharmznanie.f1': '📚 Система обучения',
    'p.pharmznanie.f2': '👥 Мультиролевая система',
    'p.pharmznanie.f3': '📄 Генерация документов',
    'p.pharmznanie.f4': '🎁 Программа лояльности',
    'p.pharmznanie.f5': '📱 Google Play',
    'p.pharmznanie.f6': '🔄 Миграция данных',

    'p.gallery': 'Смотреть скриншоты',
    'p.erai_app.desc': 'Мобильное приложение для фармацевтической сети. Программа лояльности, прайс-чекер, карта аптек, онлайн-магазин. Разработаны API-эндпоинты для интеграции с 1С аптечной сети.',
    'p.erai_app.type': 'Мобильное приложение',
    'p.erai_app.f1': '💳 Программа лояльности',
    'p.erai_app.f2': '🗺️ Карта аптек',
    'p.erai_app.f3': '🔗 Интеграция 1С',
    'p.erai_app.f4': '🛒 Онлайн-магазин',

    'p.zealon_app.desc': 'Стартап-приложение для быстрого найма — «Tinder для соискателей и работодателей». Свайп-механика, видеопитч, AI-функции, геолокация, анонимный просмотр против предвзятости. Многоролевая система, подписки, верификация.',
    'p.zealon_app.type': 'Стартап · Мобильное приложение',
    'p.zealon_app.f1': '👆 Свайп-найм',
    'p.zealon_app.f2': '🎥 Видео-питч',
    'p.zealon_app.f3': '🤖 AI-функции',
    'p.zealon_app.f4': '📍 Геолокация',

    'p.mashvara_app.desc': 'Стартап-платформа для валидации бизнес-идей через реальную обратную связь. AI-генерация вопросов, кластеризация ответов, нейтральная интерпретация данных. Антифрод-система, рейтинг респондентов, результаты за 72 часа.',
    'p.mashvara_app.type': 'Стартап · AI-платформа',
    'p.mashvara_app.f1': '🧠 AI-аналитика',
    'p.mashvara_app.f2': '📊 Валидация идей',
    'p.mashvara_app.f3': '🛡️ Антифрод',
    'p.mashvara_app.f4': '⚡ 72 часа до результата',

    'tech.tag': 'Стек',
    'tech.title': 'Технологии',
    'tech.desc': 'Современный стек для создания надёжных и масштабируемых продуктов',
    'tech.1c': '1С Интеграция',

    'adv.tag': 'Почему мы',
    'adv.title': 'Преимущества',
    'adv.1.title': 'Полный цикл разработки',
    'adv.1.desc': 'От идеи до продакшена — проектирование, разработка, деплой, поддержка. Не нужно искать отдельных специалистов.',
    'adv.2.title': 'Реальные проекты в продакшене',
    'adv.2.desc': 'Не макеты — работающие продукты с реальными пользователями, загруженные в сторы и приносящие результат бизнесу.',
    'adv.3.title': 'Любая сложность',
    'adv.3.desc': 'Лендинг за неделю или CRM-система с мобильным приложением — масштабируем решение под ваши задачи.',
    'adv.4.title': 'SEO и перформанс',
    'adv.4.desc': 'Оптимизация под поисковые системы, быстрая загрузка, SSR — ваш сайт будет находиться наверху выдачи.',

    'contact.tag': 'Контакт',
    'contact.title': 'Давайте обсудим ваш проект',
    'contact.desc': 'Расскажите о своей идее — мы предложим оптимальное решение',
    'contact.info_title': 'Контактная информация',
    'contact.phone': 'Телефон',
    'form.name': 'Имя',
    'form.name_ph': 'Ваше имя',
    'form.email': 'Email',
    'form.message': 'Сообщение',
    'form.message_ph': 'Расскажите о вашем проекте...',
    'form.submit': 'Отправить сообщение',
    'form.note': 'Или напишите напрямую в Telegram / WhatsApp — ответим в течение часа',
    'footer.rights': 'Все права защищены.',
  },

  en: {
    'nav.projects': 'Projects',
    'nav.tech': 'Technologies',
    'nav.advantages': 'Why Us',
    'nav.contact': 'Contact',

    'hero.badge': 'Development of any complexity',
    'hero.title1': 'We build digital',
    'hero.title2': 'products',
    'hero.title3': ' that work',
    'hero.subtitle': 'Full-cycle development: from landing pages and corporate websites to CRM systems and mobile applications. Production projects with real users.',
    'hero.cta1': 'View Projects',
    'hero.cta2': 'Get in Touch',

    'stats.projects': 'Projects Delivered',
    'stats.mobile': 'Mobile Applications',
    'stats.production': 'Projects in Production',
    'stats.startups': 'Startups Launching',

    'projects.tag': 'Portfolio',
    'projects.title': 'Projects',
    'projects.desc': 'Real projects — from landing pages to complex CRM platforms with mobile applications',
    'projects.all': 'All',
    'projects.landings': 'Landings',
    'projects.platforms': 'Platforms',
    'projects.mobileApps': 'Mobile',

    'cat1.title': 'Landing Pages & Business Sites',
    'cat1.desc': 'Fast, modern, responsive websites for business — conversion and first impression',
    'cat2.title': 'Web Platforms & CRM',
    'cat2.desc': 'Large-scale systems with admin panels, role management, business logic and integrations',
    'cat3.title': 'Mobile Applications',
    'cat3.desc': 'Cross-platform Flutter applications with Django backend',

    'p.erai.desc': 'Corporate website for a pharmaceutical company. Modern design, responsive layout, fast loading. Server-side rendering for SEO optimization.',
    'p.erai.type': 'Corporate Website',
    'p.zealon_land.desc': 'Promo landing page for ZealOn mobile app — a fast hiring platform. Animations, sales-oriented structure, mobile-first.',
    'p.zealon_land.type': 'Promo Landing',
    'p.mashvara_land.desc': 'Promo landing page for Mashvara AI platform — a business idea validation service. Clean design, conversion-focused structure.',
    'p.mashvara_land.type': 'Promo Landing',
    'p.maxmetall.desc': 'Landing page for a metallurgical company with SEO-first approach. Website ranked among top search results in its niche. Logo design included.',
    'p.maxmetall.type': 'Landing · SEO',
    'p.maxmetall.seo': '🔍 TOP search results in niche',
    'p.visit': 'View →',

    'p.live': '🟢 In Production',
    'p.pharmznanie.desc': 'Full-featured CRM platform for an educational portal in the pharmaceutical industry. Includes learning management system with courses and lessons, detailed admin panel, document generation (orders, certificates), loyalty program, multi-role system (curator, manufacturer, admin). Flutter mobile app published on Google Play. In production 2+ months with real users. Full content and user migration from legacy platform.',
    'p.pharmznanie.type': 'CRM · Web + Mobile',
    'p.pharmznanie.f1': '📚 Learning System',
    'p.pharmznanie.f2': '👥 Multi-role System',
    'p.pharmznanie.f3': '📄 Document Generation',
    'p.pharmznanie.f4': '🎁 Loyalty Program',
    'p.pharmznanie.f5': '📱 Google Play',
    'p.pharmznanie.f6': '🔄 Data Migration',

    'p.gallery': 'View Screenshots',
    'p.erai_app.desc': 'Mobile app for a pharmaceutical chain. Loyalty program, price checker, pharmacy map, online store. API endpoints developed for 1C pharmacy integration.',
    'p.erai_app.type': 'Mobile Application',
    'p.erai_app.f1': '💳 Loyalty Program',
    'p.erai_app.f2': '🗺️ Pharmacy Map',
    'p.erai_app.f3': '🔗 1C Integration',
    'p.erai_app.f4': '🛒 Online Store',

    'p.zealon_app.desc': 'Startup app for fast hiring — "Tinder for job seekers and employers". Swipe mechanics, video pitch, AI features, geolocation, anonymous browsing against bias. Multi-role system, subscriptions, verification. Preparing for launch.',
    'p.zealon_app.type': 'Startup · Mobile App',
    'p.zealon_app.f1': '👆 Swipe Hiring',
    'p.zealon_app.f2': '🎥 Video Pitch',
    'p.zealon_app.f3': '🤖 AI Features',
    'p.zealon_app.f4': '📍 Geolocation',

    'p.mashvara_app.desc': 'Startup platform for validating business ideas through real feedback. AI-generated questions, answer clustering, neutral data interpretation. Anti-fraud system, respondent ratings, results within 72 hours. Preparing for launch.',
    'p.mashvara_app.type': 'Startup · AI Platform',
    'p.mashvara_app.f1': '🧠 AI Analytics',
    'p.mashvara_app.f2': '📊 Idea Validation',
    'p.mashvara_app.f3': '🛡️ Anti-fraud',
    'p.mashvara_app.f4': '⚡ 72h to Results',

    'tech.tag': 'Stack',
    'tech.title': 'Technologies',
    'tech.desc': 'Modern stack for building reliable and scalable products',
    'tech.1c': '1C Integration',

    'adv.tag': 'Why Us',
    'adv.title': 'Advantages',
    'adv.1.title': 'Full-Cycle Development',
    'adv.1.desc': 'From idea to production — design, development, deployment, support. No need to hire separate specialists.',
    'adv.2.title': 'Real Production Projects',
    'adv.2.desc': 'Not mockups — working products with real users, published to app stores and delivering business results.',
    'adv.3.title': 'Any Complexity',
    'adv.3.desc': 'A landing page in a week or a CRM system with mobile app — we scale the solution to your needs.',
    'adv.4.title': 'SEO & Performance',
    'adv.4.desc': 'Search engine optimization, fast loading, SSR — your website will rank at the top.',

    'contact.tag': 'Contact',
    'contact.title': "Let's Discuss Your Project",
    'contact.desc': "Tell us about your idea — we'll suggest the optimal solution",
    'contact.info_title': 'Contact Information',
    'contact.phone': 'Phone',
    'form.name': 'Name',
    'form.name_ph': 'Your name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.message_ph': 'Tell us about your project...',
    'form.submit': 'Send Message',
    'form.note': 'Or message us directly on Telegram / WhatsApp — we reply within an hour',
    'footer.rights': 'All rights reserved.',
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const langToggle = document.getElementById('langToggle');
  langToggle.textContent = lang === 'ru' ? 'EN' : 'RU';

  // Title
  document.title = lang === 'ru'
    ? 'Equus — Full-Stack Разработка'
    : 'Equus — Full-Stack Development';

  // Apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// ── Theme Toggle ──
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// ── Scroll Reveal ──
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ── Counter Animation ──
function initCounters() {
  const counters = document.querySelectorAll('.stats__number[data-count]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out quad
    const eased = 1 - (1 - progress) * (1 - progress);
    el.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ── Active Nav Link ──
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

// ── Mobile Menu ──
function initBurger() {
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Nav background on scroll ──
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Project Filters ──
function initFilters() {
  const filters = document.querySelectorAll('.projects__filter');
  const cards = document.querySelectorAll('.project-card[data-category]');
  const categories = document.querySelectorAll('.projects__category');

  const categoryMap = {
    'landing': 'cat-landings',
    'platform': 'cat-platforms',
    'mobile': 'cat-mobile',
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((f) => f.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.removeAttribute('data-hidden');
          card.style.display = '';
        } else {
          card.setAttribute('data-hidden', 'true');
          card.style.display = 'none';
        }
      });

      categories.forEach((cat) => {
        if (filter === 'all') {
          cat.removeAttribute('data-hidden');
          cat.style.display = '';
        } else {
          const catId = cat.id;
          const filterKey = Object.keys(categoryMap).find((k) => categoryMap[k] === catId);
          if (filterKey === filter) {
            cat.removeAttribute('data-hidden');
            cat.style.display = '';
          } else {
            cat.setAttribute('data-hidden', 'true');
            cat.style.display = 'none';
          }
        }
      });

      // Also handle the featured grid
      const featuredGrids = document.querySelectorAll('.projects__grid--featured');
      featuredGrids.forEach((grid) => {
        const innerCards = grid.querySelectorAll('.project-card[data-category]');
        let hasVisible = false;
        innerCards.forEach((c) => {
          if (!c.hasAttribute('data-hidden')) hasVisible = true;
        });
        grid.style.display = hasVisible ? '' : 'none';
      });
    });
  });
}

// ── Contact Form ──
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    // If FormSubmit is not configured (action contains YOUR_EMAIL_HERE), prevent submit
    const action = form.getAttribute('action');
    if (action.includes('YOUR_EMAIL_HERE')) {
      e.preventDefault();
      // Fallback: open mailto
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const message = form.querySelector('#message').value;
      const subject = encodeURIComponent('Новая заявка с портфолио Equus');
      const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`);
      window.location.href = `mailto:info@equus.dev?subject=${subject}&body=${body}`;
    }
  });
}

// ── Gallery Modal ──
function initGallery() {
  const modal = document.getElementById('galleryModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  const slidesContainer = document.getElementById('modalSlides');
  const dotsContainer = document.getElementById('modalDots');
  const counterEl = document.getElementById('modalCounter');
  const titleEl = document.getElementById('modalTitle');

  let currentSlide = 0;
  let images = [];

  function openGallery(galleryData, title) {
    images = JSON.parse(galleryData);
    currentSlide = 0;
    titleEl.textContent = title || '';

    // Build slides
    slidesContainer.innerHTML = '';
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${title} - ${i + 1}`;
      img.loading = 'lazy';
      if (i === 0) img.classList.add('active');
      slidesContainer.appendChild(img);
    });

    // Build dots
    dotsContainer.innerHTML = '';
    images.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('modal__dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    updateCounter();
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeGallery() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function goToSlide(index) {
    const slides = slidesContainer.querySelectorAll('img');
    const dots = dotsContainer.querySelectorAll('.modal__dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (index + images.length) % images.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    updateCounter();
  }

  function updateCounter() {
    counterEl.textContent = `${currentSlide + 1} / ${images.length}`;
  }

  // Event listeners
  closeBtn.addEventListener('click', closeGallery);
  backdrop.addEventListener('click', closeGallery);
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
  });

  // Attach click to gallery cards
  document.querySelectorAll('[data-gallery]').forEach((card) => {
    const clickableImage = card.querySelector('.project-card__image--clickable');
    if (clickableImage) {
      clickableImage.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openGallery(card.getAttribute('data-gallery'), card.getAttribute('data-gallery-title'));
      });
    }
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Language
  setLanguage(currentLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
  });

  // Features
  initReveal();
  initCounters();
  initActiveNav();
  initBurger();
  initNavScroll();
  initFilters();
  initContactForm();
  initGallery();
});
