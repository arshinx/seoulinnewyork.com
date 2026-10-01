(function () {
  var T = {
    en: {
      'nav-about': 'About',
      'nav-projects': 'Projects',
      'nav-founder': 'Founder',
      'nav-support': 'Support',

      'hero-eyebrow': 'A non-profit production company · New York',
      'hero-title': 'Films made to travel.',
      'hero-sub': 'We make short films with festival ambition and long memory, by and about the people who cross between Seoul and New York.',
      'hero-cta': 'Support our next film',

      'about-h': 'About',
      'about-lede': 'Seoul in New York is a non-profit film production company. We develop and produce original short films built for the festival circuit, and we fund them through the generosity of people who believe a small film can go a long way.',
      'about-p1': 'Our stories live in the space between two cities: immigrants, strangers, families, and the languages that pass between them. We shoot at the edges of the day, work with small crews, and spend every dollar on what ends up on screen.',
      'about-p2': 'Every project is chosen for one reason: it deserves a room full of people watching it in the dark.',

      'projects-h': 'Projects',
      'qb-status': 'In production · Arriving Fall 2026',
      'qb-title': 'On the Queensboro Bridge',
      'qb-meta': 'A short film · Written & directed by Minae Kim · Co-produced by Minae Kim and Arshin Jain',
      'qb-desc': 'One evening, two strangers meet on the bridge that joins Queens and Manhattan. A quiet study of distance, memory, and the city between two immigrants, shot at the edges of the day.',
      'qb-link': 'Visit the film site',
      'next-status': 'In development',
      'next-title': 'The next one',
      'next-desc': 'We are reading, writing, and raising. If you would like to be part of what comes after the bridge, the door below is open.',

      'founder-h': 'Founder',
      'founder-role': 'Actress · Director · Producer',
      'founder-p1': 'Trained in psychology, disciplined by judo, sharpened on stand-up stages in New York, Los Angeles, and London. She is drawn to characters who say less than they mean.',
      'founder-p2': 'Her credits include Netflix’s <em>Kinda Pregnant</em>, the Amazon Prime feature <em>Indian Cowboy</em>, and <em>Green Night</em>, which premiered at the Berlinale and screened at the Busan International Film Festival. <em>On the Queensboro Bridge</em> is her first short film as writer and director.',
      'founder-link': 'minaekim.nyc',

      'support-h': 'Support',
      'support-lede': 'We are raising funds for our next festival-bound film. Every contribution goes directly into the production: crew, locations, sound, color, and the festival submissions that carry the film out into the world.',
      'support-p1': 'Whether you are an individual patron, a foundation, or a company that wants its name in the credits of something lasting, we would love to talk.',
      'support-cta': 'Get in touch to give',
      'support-note': 'Seoul in New York has applied for 501(c)(3) status, with a determination expected by November 15, 2026. Once granted, exemption is typically retroactive to the date of incorporation, so contributions made now are expected to be tax-deductible. Please consult your tax advisor.',

      'footer-city': 'New York',
      'footer-np': 'A non-profit production company'
    },

    ko: {
      'nav-about': '소개',
      'nav-projects': '작품',
      'nav-founder': '설립자',
      'nav-support': '후원',

      'hero-eyebrow': '비영리 영화 제작사 · 뉴욕',
      'hero-title': '멀리 가는 영화를 만듭니다.',
      'hero-sub': '서울과 뉴욕을 오가는 사람들의, 그리고 그들에 관한 단편 영화를 만듭니다. 영화제를 향한 야심과 오래 남는 기억을 담아서.',
      'hero-cta': '다음 영화 후원하기',

      'about-h': '소개',
      'about-lede': '서울 인 뉴욕은 비영리 영화 제작사입니다. 영화제를 목표로 하는 오리지널 단편 영화를 기획·제작하며, 작은 영화가 멀리 갈 수 있다고 믿는 분들의 후원으로 제작비를 마련합니다.',
      'about-p1': '우리의 이야기는 두 도시 사이의 공간에 있습니다. 이민자, 낯선 이들, 가족, 그리고 그 사이를 오가는 언어들. 하루의 경계에서 촬영하고, 작은 크루로 일하며, 모든 예산을 스크린에 남는 것에 씁니다.',
      'about-p2': '모든 프로젝트는 하나의 이유로 선택됩니다. 어두운 극장에서 관객이 함께 볼 가치가 있는 영화인가.',

      'projects-h': '작품',
      'qb-status': '제작 중 · 2026년 가을 공개',
      'qb-title': '퀸즈보로 브릿지 위에서',
      'qb-meta': '단편 영화 · 각본·연출 김민애 · 공동 제작 김민애·아신 자인',
      'qb-desc': '어느 저녁, 퀸즈와 맨해튼을 잇는 다리 위에서 두 이방인이 만납니다. 두 이민자 사이의 거리, 기억, 그리고 도시의 이면을 하루의 경계에서 담아낸 조용한 이야기입니다.',
      'qb-link': '영화 사이트 보기',
      'next-status': '기획 중',
      'next-title': '다음 작품',
      'next-desc': '읽고, 쓰고, 모으고 있습니다. 다리 그 다음의 이야기에 함께하고 싶으시다면, 아래의 문은 열려 있습니다.',

      'founder-h': '설립자',
      'founder-role': '배우 · 감독 · 프로듀서',
      'founder-p1': '심리학을 공부하고, 유도로 단련되었으며, 뉴욕·로스앤젤레스·런던의 스탠드업 무대에서 다져졌습니다. 말보다 더 많은 것을 품고 있는 인물에 끌립니다.',
      'founder-p2': '넷플릭스 「Kinda Pregnant」, 아마존 프라임 「Indian Cowboy」, 그리고 베를린국제영화제에서 초연되고 부산국제영화제에서 상영된 「그린 나이트」에 출연했습니다. 「퀸즈보로 브릿지 위에서」는 각본과 연출을 맡은 첫 단편입니다.',
      'founder-link': 'minaekim.nyc',

      'support-h': '후원',
      'support-lede': '다음 영화제 출품작의 제작비를 모으고 있습니다. 모든 후원금은 크루, 로케이션, 사운드, 색보정, 그리고 영화를 세상으로 내보내는 영화제 출품에 직접 쓰입니다.',
      'support-p1': '개인 후원자든, 재단이든, 오래 남을 작품의 크레딧에 이름을 올리고 싶은 기업이든, 언제든 이야기 나누고 싶습니다.',
      'support-cta': '후원 문의하기',
      'support-note': '서울 인 뉴욕은 미국 501(c)(3) 비영리 지위를 신청했으며, 2026년 11월 15일까지 승인이 예상됩니다. 승인 시 면세 지위는 일반적으로 법인 설립일로 소급 적용되므로, 지금 하시는 후원도 세액 공제 대상이 될 것으로 예상됩니다. 자세한 사항은 세무 전문가와 상담하시기 바랍니다.',

      'footer-city': '뉴욕',
      'footer-np': '비영리 영화 제작사'
    }
  };

  var KEY = 'siny-lang';
  var HTML_KEYS = { 'founder-p2': true };

  function get() {
    try { return localStorage.getItem(KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function set(lang) {
    if (!T[lang]) lang = 'en';
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  }

  function apply(lang) {
    var dict = T[lang];
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in dict)) return;
      if (HTML_KEYS[k]) el.innerHTML = dict[k]; else el.textContent = dict[k];
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { set(b.getAttribute('data-lang')); });
  });

  var initial = get();
  if (initial !== 'en') apply(initial);

  window.__lang = { get: get, set: set, T: T };
})();
