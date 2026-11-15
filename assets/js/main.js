/* =========================================================
   Ascending Star — site script
   ---------------------------------------------------------
   EDIT THIS BLOCK to connect the real contact details.
   Leave a value as "" and the site falls back gracefully.
   ========================================================= */
const SITE_CONFIG = {
  phoneDisplay: "",   // what visitors see, e.g. "+55 (85) 91234-5678"
  phoneHref: "",      // international format for tap-to-call, e.g. "+5585912345678"
  whatsapp: "",       // digits only, e.g. "5585912345678" (defaults to phoneHref if empty)
  bookingUrl: "",     // Calendly / Cal.com / Google Calendar booking page URL
  youtubeId: "",      // YouTube video ID of the explainer, e.g. "dQw4w9WgXcQ"
  instagram: "",      // full profile URL once created, e.g. "https://instagram.com/ascendingstar"
  ownerPhoto: "",     // drop the photo in assets/img/ and set e.g. "assets/img/owner.jpg"
};

/* ---------------- Portuguese copy ----------------
   English lives in the HTML. Each key below matches a data-i18n="key". */
const PT = {
  "meta.title": "Ascending Star | Sites e SEO Local para Pequenos Negócios — Fortaleza e Flórida",
  "meta.desc": "A Ascending Star cria sites, configura o Perfil da Empresa no Google e faz SEO local para pequenos negócios em Fortaleza e na Flórida serem encontrados no Google. Agende uma consulta gratuita.",
  "a11y.skip": "Pular para o conteúdo",
  "a11y.menu": "Abrir menu",
  "a11y.close": "Fechar menu",
  "nav.services": "Serviços",
  "nav.how": "Como funciona",
  "nav.packages": "Pacotes",
  "nav.faq": "Dúvidas",
  "cta.call": "Ligue agora",
  "cta.bookShort": "Agende uma ligação grátis",
  "cta.book": "Agende sua ligação grátis",

  "hero.eyebrow": "Sites · SEO local · Perfil da Empresa no Google — Fortaleza e Flórida",
  "hero.title": 'Seu trabalho é de primeira. <span class="hl">Vamos fazer o Google saber disso.</span>',
  "hero.sub": "Criamos seu site, configuramos seu Perfil da Empresa no Google e fazemos o SEO local que coloca você na frente de quem procura seu serviço na sua cidade — para que o trabalho de que você se orgulha finalmente traga ligações.",
  "hero.chip1": "Site no ar em cerca de 1 dia",
  "hero.chip3": "Consulta gratuita",

  "serp.query": "serviço de limpeza perto de mim",
  "serp.cat": "Serviço de limpeza",
  "serp.cat2": "Serviço de limpeza",
  "serp.cat3": "Serviço de limpeza",
  "serp.you": "Seu Negócio",
  "serp.badge": "É você",
  "serp.open": "Aberto agora · Ligar",
  "serp.caption": "Ilustração",

  "marquee.label": "Serviços",
  "mq.1": "Sites",
  "mq.2": "SEO local",
  "mq.3": "Perfil da Empresa no Google",
  "mq.4": "Páginas por cidade",
  "mq.5": "Redes sociais",
  "mq.7": "Domínios",
  "mq.8": "Mais avaliações",

  "problem.eyebrow": "Parece familiar?",
  "problem.title": 'Seu trabalho é 5 estrelas. <span class="hl-blue">Sua presença online, não.</span>',
  "problem.beforeTitle": "Hoje",
  "problem.b1": "Sem site, ou com um site que nunca faz o telefone tocar",
  "problem.b2": "Algumas ótimas avaliações, escondidas onde ninguém olha",
  "problem.b3": "Quase todo cliente vem do boca a boca",
  "problem.b4": "Sem tempo para entender Google, SEO e redes sociais",
  "problem.afterTitle": "Com a Ascending Star",
  "problem.a1": "Um site rápido e profissional, feito para trazer ligações",
  "problem.a2": "Um Perfil da Empresa no Google que aparece no Maps e nas buscas locais",
  "problem.a3": "SEO trabalhando para subir você na sua cidade, mês após mês",
  "problem.a4": "Alguém cuidando de tudo, para você continuar fazendo o que faz de melhor",

  "services.eyebrow": "O que fazemos",
  "services.title": 'Tudo o que você precisa para aparecer, <span class="hl">em um só lugar.</span>',
  "svc.1t": "Sites que trazem clientes",
  "svc.1d": "Sites rápidos e otimizados para celular, com seus serviços, suas fotos e um botão de “me ligue” bem grande. Também compramos e configuramos o seu domínio.",
  "svc.2t": "SEO local",
  "svc.2d": "Otimizamos seu site e seus perfis para você subir nos resultados do Google na sua cidade e na região.",
  "svc.3t": "Perfil da Empresa no Google e avaliações",
  "svc.3d": "Criado e otimizado para você aparecer no Google Maps, com um jeito simples de pedir avaliações 5 estrelas aos clientes satisfeitos.",
  "svc.4t": "Páginas por cidade",
  "svc.4d": "Uma página dedicada para cada cidade próxima, para clientes de toda a região encontrarem você, não só os do seu bairro.",
  "svc.5t": "Gestão de redes sociais",
  "svc.5d": "Mantemos seu Instagram e outras redes ativos com posts que mostram o seu trabalho.",
  "svc.6t": "Google Ads, quando vale a pena",
  "svc.6d": "Precisa de ligações rápido? Podemos rodar anúncios. Mas anúncios ficam caros, então geralmente recomendamos SEO primeiro. Ele continua funcionando mesmo sem você pagar por clique.",
  "svc.ctaT": "Não sabe do que precisa?",
  "svc.ctaD": "É para isso que serve a ligação grátis. Conte sobre o seu negócio e diremos com sinceridade o que vai ajudar.",

  "video.eyebrow": "Assista",
  "video.title": "Veja como fazemos negócios locais aparecerem no Google",
  "video.play": "Assistir ao vídeo explicativo",
  "video.soon": "Vídeo explicativo em breve",

  "pk.eyebrow": "Pacotes",
  "pk.title": 'Escolha um pacote. <span class="hl-blue">A gente ajusta ao seu orçamento.</span>',
  "pk.lead": "Cada negócio é diferente, por isso o preço é definido na ligação gratuita. Ficou acima do orçamento? Tiramos alguns itens e o preço cai. Você só paga pelo que realmente precisa.",
  "pk.1tag": "Fique online, rápido",
  "pk.1a": "Site profissional, otimizado para celular",
  "pk.1b": "Compra e configuração do domínio",
  "pk.1c": "Configuração do Perfil da Empresa no Google",
  "pk.1d": "Botões de ligar e agendar",
  "pk.1time": "Site no ar em cerca de 1 dia",
  "pk.price": "Preço definido na sua ligação gratuita",
  "pk.cta": "Perguntar sobre este pacote",
  "pk.reco": "Nossa recomendação",
  "pk.2tag": "Apareça na sua cidade",
  "pk.2a": "<strong>Tudo do pacote Launch</strong>",
  "pk.2b": "SEO local para a sua cidade",
  "pk.2c": "Páginas de serviço otimizadas para o Google",
  "pk.2d": "Um sistema para conseguir mais avaliações 5 estrelas",
  "pk.2time": "Tudo pronto em menos de uma semana",
  "pk.3tag": "Domine sua região",
  "pk.3a": "<strong>Tudo do pacote Ascend</strong>",
  "pk.3b": "Páginas para as cidades ao seu redor",
  "pk.3c": "Gestão de redes sociais",
  "pk.3d": "Google Ads, se fizer sentido para você",
  "pk.3time": "Crescimento contínuo, mês após mês",

  "how.eyebrow": "Como funciona",
  "how.title": 'Da primeira ligação até <span class="hl">aparecer no Google.</span>',
  "how.1t": "Agende uma ligação grátis",
  "how.1d": "Escolha o horário que for melhor para você. Sem custo, sem pressão.",
  "how.2t": "A gente pergunta, você conta",
  "how.2d": "Perguntamos sobre seu negócio, seus clientes e seus objetivos. Se não pudermos ajudar de verdade, diremos na hora.",
  "how.3t": "Escolha seu pacote",
  "how.3d": "Você vê as opções e escolhe o que encaixa. Quer mais barato? A gente tira alguns itens.",
  "how.4t": "A gente cria. O Google mostra você.",
  "how.4d": "Seu site fica no ar em cerca de um dia e a configuração completa fica pronta em menos de uma semana. Depois, o SEO continua trabalhando para subir você.",

  "owner.photo": "Foto do responsável",
  "owner.eyebrow": "Quem está por trás",
  "owner.title": "Oi, eu sou Davi.",
  "owner.p1": "Criei a Ascending Star para quem é excelente no que faz, mas é invisível na internet. Já faço SEO local e páginas por cidade para o negócio do meu pai, e agora levo o mesmo método para o seu.",
  "owner.p2": "Antes de aceitar qualquer cliente, faço muitas perguntas. Se eu não puder ajudar de verdade, prefiro te dizer a pegar o seu dinheiro. Se eu puder ajudar, eu me dedico 100%.",
  "owner.pt1": "<strong>Honestidade desde o primeiro dia.</strong> Nada de promessas falsas.",
  "owner.pt2": "<strong>Rapidez.</strong> Sites no ar em cerca de um dia.",
  "owner.pt3": "<strong>Bilíngue.</strong> Português e inglês.",
  "owner.pt4": "<strong>Direto.</strong> Você fala comigo, não com um call center.",

  "faq.eyebrow": "Dúvidas",
  "faq.title": "Respostas diretas.",
  "faq.1q": "Quanto tempo demora?",
  "faq.1a": "A maioria dos sites fica no ar em cerca de 1 dia. Um pacote completo (site, Perfil da Empresa no Google e configuração de SEO) costuma ficar pronto em menos de uma semana. Os resultados de SEO vão crescendo nas semanas e meses seguintes.",
  "faq.2q": "É caro?",
  "faq.2a": "Depende do que você precisa, e quem decide é você. Na ligação gratuita mostramos as opções. Se o preço ficar alto, tiramos alguns itens até caber no seu orçamento. E também avisamos quando você não precisa de algo, como anúncios caros.",
  "faq.3q": "Vale a pena?",
  "faq.3a": "Se as pessoas procuram seu serviço na sua cidade e não encontram você, elas ligam para outra empresa. Um bom site e uma boa presença no Google trabalham por você 24 horas por dia. E somos sinceros: se acharmos que não podemos ajudar seu negócio, diremos isso na ligação.",
  "faq.4q": "Google Ads ou SEO: o que é melhor para mim?",
  "faq.4a": "Anúncios podem trazer ligações rápido, mas ficam caros e param no momento em que você para de pagar. O SEO demora um pouco mais, mas continua trazendo clientes. Para a maioria dos pequenos negócios, recomendamos começar pelo SEO.",
  "faq.5q": "Ainda não tenho domínio. Tem problema?",
  "faq.5a": "Nenhum. Nós compramos e configuramos o domínio para você. Um .com costuma custar mais do que opções como .shop, e explicamos as escolhas na ligação.",
  "faq.6q": "Onde vocês atendem, e em qual idioma?",
  "faq.6a": "Atendemos pequenos negócios no Brasil, começando por Fortaleza, e na Flórida, nos EUA. Tudo pode ser feito em português ou inglês.",

  "book.eyebrow": "Consulta gratuita",
  "book.title": "Vamos colocar seu negócio no mapa?",
  "book.lead": "Escolha um horário para uma ligação gratuita. Vamos perguntar sobre o seu negócio, mostrar suas opções e dizer com sinceridade se podemos ajudar.",
  "book.p1": "100% gratuita, sem compromisso",
  "book.p2": "Conselhos sinceros, sem pressão",
  "book.p3": "Em português ou inglês",
  "book.alt": "Prefere falar agora?",
  "book.fbT": "O agendamento online está quase pronto",
  "book.fbD": "Por enquanto, ligue ou mande uma mensagem e marcamos sua consulta gratuita no horário que for melhor para você.",
  "book.fbCta": "Ligue para agendar",

  "footer.tag": "Sites, SEO local e redes sociais para pequenos negócios em Fortaleza e na Flórida.",
  "footer.privacy": "Política de Privacidade",
  "footer.rights": "Todos os direitos reservados.",
  "mbar.call": "Ligar",

  /* privacy page */
  "privacy.metaTitle": "Política de Privacidade | Ascending Star",
  "privacy.metaDesc": "Como a Ascending Star coleta, usa e protege suas informações.",
  "privacy.back": "Voltar ao site",
};

/* Extra English strings that aren't in the HTML by default */
const EN_EXTRA = {
  "a11y.menu": "Open menu",
  "a11y.close": "Close menu",
  "video.play": "Play the explainer video",
  "video.soon": "Explainer video coming soon",
};

const WA_MSG = {
  en: "Hi! I'd like to book a free consultation with Ascending Star.",
  pt: "Oi! Quero agendar uma consulta gratuita com a Ascending Star.",
};

(function () {
  "use strict";
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentLang = "en";

  /* ---------- Language ---------- */
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function detectLang() {
    try {
      const p = new URLSearchParams(location.search).get("lang");
      if (p === "pt" || p === "en") return p;
    } catch (e) { /* ignore */ }
    const saved = store("as-lang");
    if (saved === "pt" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
  }
  function t(key) {
    if (currentLang === "pt" && PT[key] !== undefined) return PT[key];
    return EN_EXTRA[key];
  }
  function setLang(lang) {
    currentLang = lang;
    root.lang = lang === "pt" ? "pt-BR" : "en";

    $$("[data-i18n]").forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const key = el.dataset.i18n;
      el.innerHTML = lang === "pt" && PT[key] !== undefined ? PT[key] : el.dataset.en;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const cacheKey = "en" + attr.replace(/[^a-z]/gi, "");
        if (el.dataset[cacheKey] === undefined) el.dataset[cacheKey] = el.getAttribute(attr) || "";
        el.setAttribute(attr, lang === "pt" && PT[key] !== undefined ? PT[key] : el.dataset[cacheKey]);
      });
    });
    $$(".lang-switch [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    applyConfig();
    updateVideoLabel();
    updateMenuLabel();
  }

  /* ---------- Config-driven contact points ---------- */
  function applyConfig() {
    const c = SITE_CONFIG;
    const hasPhone = Boolean(c.phoneHref);

    // No phone yet → links keep their HTML fallback (the booking section).
    if (hasPhone) {
      $$("[data-call]").forEach((a) => { a.href = "tel:" + c.phoneHref.replace(/[^\d+]/g, ""); });
    }
    if (hasPhone && c.phoneDisplay) {
      $$("[data-phone-text]").forEach((el) => { el.textContent = c.phoneDisplay; });
    }

    const wa = (c.whatsapp || c.phoneHref || "").replace(/\D/g, "");
    $$("[data-whatsapp]").forEach((a) => {
      if (!wa) { a.hidden = true; return; }
      a.hidden = false;
      a.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(WA_MSG[currentLang]);
      a.target = "_blank"; a.rel = "noopener";
    });

    $$("[data-instagram]").forEach((a) => {
      if (!c.instagram) { a.hidden = true; return; }
      a.hidden = false; a.href = c.instagram;
    });
  }

  /* ---------- Booking calendar ---------- */
  function setupBooking() {
    const embed = $("#booking-embed");
    const fallback = $("#booking-fallback");
    if (!embed || !SITE_CONFIG.bookingUrl) return;
    const iframe = document.createElement("iframe");
    iframe.src = SITE_CONFIG.bookingUrl;
    iframe.title = "Book a free consultation with Ascending Star";
    iframe.loading = "lazy";
    embed.appendChild(iframe);
    embed.hidden = false;
    if (fallback) fallback.hidden = true;
  }

  /* ---------- YouTube (loads only on click) ---------- */
  function updateVideoLabel() {
    const btn = $("#video-play");
    if (!btn) return;
    const label = $(".video-label", btn);
    if (!SITE_CONFIG.youtubeId) {
      label.textContent = t("video.soon");
      btn.setAttribute("aria-disabled", "true");
    } else {
      label.textContent = t("video.play");
    }
  }
  function setupVideo() {
    const btn = $("#video-play");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (!SITE_CONFIG.youtubeId) return;
      const frame = $("#video-frame");
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(SITE_CONFIG.youtubeId) + "?autoplay=1&rel=0";
      iframe.title = "Ascending Star explainer video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      frame.replaceChildren(iframe);
    });
  }

  /* ---------- Mobile menu ---------- */
  function updateMenuLabel() {
    const btn = $(".nav-toggle");
    if (!btn) return;
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-label", t(open ? "a11y.close" : "a11y.menu"));
  }
  function setupMenu() {
    const btn = $(".nav-toggle");
    const nav = $("#site-nav");
    if (!btn || !nav) return;
    const close = () => { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); updateMenuLabel(); };
    btn.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      updateMenuLabel();
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { close(); btn.focus(); } });
    window.matchMedia("(min-width: 980px)").addEventListener("change", (m) => { if (m.matches) close(); });
  }

  /* ---------- Header shadow + mobile bar ---------- */
  function setupScrollUI() {
    const header = $(".site-header");
    const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const bar = $(".mobile-bar");
    const heroCtas = $(".hero-ctas");
    const book = $("#book");
    if (!bar) return;
    if (!heroCtas || !("IntersectionObserver" in window)) { bar.classList.add("is-visible"); return; }
    let heroVisible = true, bookVisible = false;
    const sync = () => bar.classList.toggle("is-visible", !heroVisible && !bookVisible);
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }).observe(heroCtas);
    if (book) new IntersectionObserver(([e]) => { bookVisible = e.isIntersecting; sync(); }, { threshold: 0.25 }).observe(book);
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const siblings = $$(".reveal", el.parentElement).filter((s) => s.parentElement === el.parentElement);
        el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 70 + "ms";
        el.classList.add("is-in");
        // Once revealed, hand transitions back to the component (hover effects etc.)
        setTimeout(() => { el.classList.remove("reveal", "is-in"); el.style.transitionDelay = ""; }, 1200);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Hero: "Your Business" ascends to #1 ---------- */
  function setupSerp() {
    const list = $("#serp-results");
    if (!list) return;
    if (reduceMotion) { list.classList.add("is-ranked"); return; }
    setTimeout(() => list.classList.add("is-ranked"), 1500);
  }

  /* ---------- Owner photo (SITE_CONFIG.ownerPhoto) ---------- */
  function setupOwnerPhoto() {
    const fig = $("#owner-photo");
    if (!fig || !SITE_CONFIG.ownerPhoto) return;
    const img = new Image();
    img.onload = () => {
      img.alt = "Davi, owner of Ascending Star";
      img.width = 880; img.height = 1100;
      const ph = $(".owner-placeholder", fig);
      if (ph) ph.replaceWith(img);
    };
    img.src = SITE_CONFIG.ownerPhoto;
  }

  /* ---------- Init ---------- */
  function init() {
    setLang(detectLang());
    $$(".lang-switch [data-lang]").forEach((b) =>
      b.addEventListener("click", () => { setLang(b.dataset.lang); store("as-lang", b.dataset.lang); })
    );
    setupBooking();
    setupVideo();
    setupMenu();
    setupScrollUI();
    setupReveal();
    setupSerp();
    setupOwnerPhoto();
    const y = $("#year"); if (y) y.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
