// Placeholder contacts — replace with real ones later
const CONTACT = {
  phone: "37400000000",
  telegram: "eloriatour",
};

const ROUTES = [
  {
    id: "dilijan", img: "assets/img/dilijan.jpg",
    title: { hy: "Դիլիջան – Հաղարծին – Գոշավանք", en: "Dilijan – Haghartsin – Goshavank", ru: "Дилижан – Агарцин – Гошаванк" },
    time: { hy: "≈ 9 ժամ", en: "≈ 9 hours", ru: "≈ 9 часов" },
    text: {
      hy: "«Հայկական Շվեյցարիա»՝ անտառներում թաքնված Հաղարծինը, Գոշավանքը՝ իր ժանյակե խաչքարով, և Դիլիջանի հին թաղամասը։",
      en: "The “Armenian Switzerland”: forest-hidden Haghartsin, Goshavank with its lace-like khachkar, and the old quarter of Dilijan.",
      ru: "«Армянская Швейцария»: спрятанный в лесах Агарцин, Гошаванк с кружевным хачкаром и старый квартал Дилижана.",
    },
  },
  {
    id: "garni", img: "assets/img/garni.jpg",
    title: { hy: "Գառնի – Գեղարդ", en: "Garni – Geghard", ru: "Гарни – Гегард" },
    time: { hy: "≈ 5 ժամ", en: "≈ 5 hours", ru: "≈ 5 часов" },
    text: {
      hy: "Հեթանոսական տաճարը կիրճի եզրին, «Քարերի սիմֆոնիան» և ժայռի մեջ փորված Գեղարդավանքը՝ ՅՈՒՆԵՍԿՕ-ի ժառանգություն։",
      en: "The pagan temple on the gorge’s edge, the “Symphony of Stones” and Geghard, a UNESCO monastery carved into the rock.",
      ru: "Языческий храм на краю ущелья, «Симфония камней» и высеченный в скале Гегард — наследие ЮНЕСКО.",
    },
  },
  {
    id: "noravank", img: "assets/img/noravank.jpg",
    title: { hy: "Խոր Վիրապ – Նորավանք – Արենի", en: "Khor Virap – Noravank – Areni", ru: "Хор Вирап – Нораванк – Арени" },
    time: { hy: "≈ 8 ժամ", en: "≈ 8 hours", ru: "≈ 8 часов" },
    text: {
      hy: "Արարատը՝ ձեռքի մեկնած հեռավորությամբ, Նորավանքը կարմիր ժայռերի գրկում և գինու համտես Արենիում։",
      en: "Ararat within arm’s reach, Noravank embraced by red cliffs, and a wine tasting in Areni.",
      ru: "Арарат на расстоянии вытянутой руки, Нораванк в объятиях красных скал и дегустация вина в Арени.",
    },
  },
  {
    id: "sevan", img: "assets/img/sevan.jpg",
    title: { hy: "Սևան – Սևանավանք – Դիլիջան", en: "Sevan – Sevanavank – Dilijan", ru: "Севан – Севанаванк – Дилижан" },
    time: { hy: "≈ 8 ժամ", en: "≈ 8 hours", ru: "≈ 8 часов" },
    text: {
      hy: "Կապույտ Սևանը՝ 1900 մ բարձրության վրա, թերակղզու Սևանավանքը և զբոսանք Դիլիջանի անտառներում։",
      en: "Blue Lake Sevan at 1,900 m, Sevanavank on its peninsula, and a stroll through the forests of Dilijan.",
      ru: "Голубой Севан на высоте 1900 м, Севанаванк на полуострове и прогулка по лесам Дилижана.",
    },
  },
  {
    id: "tatev", img: "assets/img/tatev.jpg",
    title: { hy: "Ջերմուկ – Տաթև – Գորիս", en: "Jermuk – Tatev – Goris", ru: "Джермук – Татев – Горис" },
    time: { hy: "1–2 օր", en: "1–2 days", ru: "1–2 дня" },
    text: {
      hy: "Ջերմուկի ջրվեժն ու հանքային աղբյուրները, «Տաթևի թևեր» ճոպանուղին, Տաթևի վանքը և Գորիսի քարե հեքիաթը։",
      en: "Jermuk’s waterfall and mineral springs, the “Wings of Tatev” cable car, Tatev Monastery and the stone fairy tale of Goris.",
      ru: "Водопад и минеральные источники Джермука, канатная дорога «Крылья Татева», монастырь Татев и каменная сказка Гориса.",
    },
  },
];

const T = {
  hy: {
    "title": "Eloria Tour — Տուրեր Հայաստանում",
    "nav.routes": "Երթուղիներ", "nav.classes": "Մեքենաներ", "nav.book": "Ամրագրում", "nav.contacts": "Կապ", "nav.menu": "Մենյու",
    "hero.eyebrow": "Տուրեր և էքսկուրսիաներ Հայաստանում",
    "hero.title": "Ամեն ճանապարհ՝ հազարամյա պատմություն",
    "hero.lead": "Հնագույն վանքեր, լեռնային ճանապարհներ և սրտաբուխ հյուրընկալություն։ Eloria Tour-ը ձեզ կտանի այնտեղ, որտեղ քարը խոսում է, իսկ ժամանակը կանգ է առնում։",
    "hero.cta1": "Ընտրել երթուղի", "hero.cta2": "Իմ երթուղին",
    "f1.t": "Գիդեր 4 լեզվով", "f1.d": "Հայերեն, անգլերեն, ռուսերեն և իտալերեն՝ պատմությունը ձեր լեզվով։",
    "f2.t": "Մեկնում Հանրապետության հրապարակից", "f2.d": "Հանդիպում ենք Երևանի սրտում՝ հեշտ ու հասկանալի։",
    "f3.t": "Երկու դասի մեքենաներ", "f3.d": "Ստանդարտ կամ Comfort՝ ըստ ձեր ցանկության և խմբի չափի։",
    "f4.t": "Ձեր սեփական երթուղին", "f4.d": "Ասեք, թե ուր եք ուզում գնալ, և մենք կկազմենք ճանապարհը։",
    "routes.title": "Մեր երթուղիները",
    "routes.lead": "Հինգ ճանապարհ, որոնք բացում են Հայաստանի հոգին՝ վանքերից մինչև լեռնային լճեր։",
    "routes.book": "Ամրագրել",
    "custom.t": "Ձեր երազանքի երթուղին", "custom.d": "Ամբերդ, Սաղմոսավանք, Հաղպատ, թե՞ մի վայր, որի մասին քչերը գիտեն։ Գրեք մեզ, և մենք կկազմակերպենք։", "custom.btn": "Առաջարկել երթուղի",
    "classes.title": "Ընտրեք ձեր հարմարավետությունը",
    "classes.lead": "Երկու դաս՝ մեկ որակ։ Բոլոր տուրերն անցկացնում են փորձառու վարորդներ և պրոֆեսիոնալ գիդեր։",
    "classes.choose": "Ընտրել",
    "std.t": "Ստանդարտ", "std.sub": "Հուսալի և հարմար՝ ցանկացած խմբի համար",
    "std.1": "Հարմարավետ սեդաններ և միկրոավտոբուսներ", "std.2": "Փորձառու վարորդ", "std.3": "Պրոֆեսիոնալ գիդ", "std.4": "Կանգառներ լուսանկարների համար",
    "cmf.t": "Comfort", "cmf.sub": "Ամեն ինչ ստանդարտից, գումարած՝",
    "cmf.1": "Նոր արտադրության հարմարավետ մեքենաներ", "cmf.2": "Թանգարանների մուտքի տոմսերը ներառված են", "cmf.3": "Խմելու ջուր ամբողջ ճանապարհին", "cmf.4": "Wi‑Fi մեքենայում",
    "price": "Գինը՝ շուտով",
    "book.title": "Ամրագրեք կամ առաջարկեք ձեր երթուղին",
    "book.lead": "Ընտրեք տուրը կամ գրեք այն վայրերը, որոնք ցանկանում եք տեսնել։ Մենք կպատասխանենք շուտով՝ գնով և մանրամասներով։",
    "book.s1": "Լրացրեք ձևը", "book.s2": "Ուղարկեք WhatsApp-ով, Telegram-ով կամ Viber-ով", "book.s3": "Ստացեք հաստատում և ճամփա ընկեք",
    "form.name": "Անուն", "form.phone": "Հեռախոս", "form.route": "Երթուղի", "form.customOpt": "Իմ սեփական երթուղին",
    "form.custom": "Որտե՞ղ եք ուզում գնալ", "form.customPh": "Օրինակ՝ Ամբերդ, Արագած, Սաղմոսավանք",
    "form.date": "Ամսաթիվ", "form.people": "Մարդկանց քանակ", "form.class": "Մեքենայի դաս", "form.guide": "Գիդի լեզուն", "form.note": "Մեկնաբանություն",
    "form.error": "Խնդրում ենք լրացնել անունը, հեռախոսը և ամսաթիվը։",
    "lang.hy": "Հայերեն", "lang.en": "Անգլերեն", "lang.ru": "Ռուսերեն", "lang.it": "Իտալերեն",
    "msg.head": "Բարև Ձեզ, ցանկանում եմ ամրագրել տուր Eloria Tour-ում։",
    "toast.copied": "Հաղորդագրությունը պատճենված է․ տեղադրեք այն չատում։",
    "contacts.meet": "Մեկնում՝ Հանրապետության հրապարակ, Երևան",
    "credits": "Լուսանկարներ՝ Wikimedia Commons, CC BY-SA",
  },
  en: {
    "title": "Eloria Tour — Tours in Armenia",
    "nav.routes": "Routes", "nav.classes": "Cars", "nav.book": "Booking", "nav.contacts": "Contacts", "nav.menu": "Menu",
    "hero.eyebrow": "Tours and excursions in Armenia",
    "hero.title": "Every road tells a thousand-year story",
    "hero.lead": "Ancient monasteries, mountain roads and heartfelt hospitality. Eloria Tour takes you where stone speaks and time stands still.",
    "hero.cta1": "Choose a route", "hero.cta2": "My own route",
    "f1.t": "Guides in 4 languages", "f1.d": "Armenian, English, Russian and Italian — history in your language.",
    "f2.t": "Departure from Republic Square", "f2.d": "We meet in the heart of Yerevan — simple and easy to find.",
    "f3.t": "Two car classes", "f3.d": "Standard or Comfort — to suit your wishes and group size.",
    "f4.t": "Your own route", "f4.d": "Tell us where you want to go, and we will plan the journey.",
    "routes.title": "Our routes",
    "routes.lead": "Five journeys that reveal the soul of Armenia — from monasteries to mountain lakes.",
    "routes.book": "Book",
    "custom.t": "Your dream route", "custom.d": "Amberd, Saghmosavank, Haghpat — or a place few people know? Write to us and we will make it happen.", "custom.btn": "Suggest a route",
    "classes.title": "Choose your comfort",
    "classes.lead": "Two classes, one standard of care. Every tour is led by experienced drivers and professional guides.",
    "classes.choose": "Choose",
    "std.t": "Standard", "std.sub": "Reliable and convenient for any group",
    "std.1": "Comfortable sedans and minibuses", "std.2": "Experienced driver", "std.3": "Professional guide", "std.4": "Photo stops along the way",
    "cmf.t": "Comfort", "cmf.sub": "Everything in Standard, plus:",
    "cmf.1": "New, high-comfort vehicles", "cmf.2": "Museum entrance tickets included", "cmf.3": "Drinking water all the way", "cmf.4": "On-board Wi‑Fi",
    "price": "Prices coming soon",
    "book.title": "Book a tour or suggest your own",
    "book.lead": "Pick a tour or list the places you want to see. We will reply soon with the price and details.",
    "book.s1": "Fill in the form", "book.s2": "Send it via WhatsApp, Telegram or Viber", "book.s3": "Get confirmation and hit the road",
    "form.name": "Name", "form.phone": "Phone", "form.route": "Route", "form.customOpt": "My own route",
    "form.custom": "Where would you like to go?", "form.customPh": "E.g. Amberd, Aragats, Saghmosavank",
    "form.date": "Date", "form.people": "Number of people", "form.class": "Car class", "form.guide": "Guide language", "form.note": "Comment",
    "form.error": "Please fill in your name, phone and date.",
    "lang.hy": "Armenian", "lang.en": "English", "lang.ru": "Russian", "lang.it": "Italian",
    "msg.head": "Hello! I would like to book a tour with Eloria Tour.",
    "toast.copied": "Message copied — paste it into the chat.",
    "contacts.meet": "Departure: Republic Square, Yerevan",
    "credits": "Photos: Wikimedia Commons, CC BY-SA",
  },
  ru: {
    "title": "Eloria Tour — Туры по Армении",
    "nav.routes": "Маршруты", "nav.classes": "Автомобили", "nav.book": "Бронирование", "nav.contacts": "Контакты", "nav.menu": "Меню",
    "hero.eyebrow": "Туры и экскурсии по Армении",
    "hero.title": "Каждая дорога — история длиною в тысячелетия",
    "hero.lead": "Древние монастыри, горные дороги и сердечное гостеприимство. Eloria Tour отвезёт вас туда, где говорит камень и останавливается время.",
    "hero.cta1": "Выбрать маршрут", "hero.cta2": "Свой маршрут",
    "f1.t": "Гиды на 4 языках", "f1.d": "Армянский, английский, русский и итальянский — история на вашем языке.",
    "f2.t": "Отправление с площади Республики", "f2.d": "Встречаемся в самом сердце Еревана — легко найти.",
    "f3.t": "Два класса автомобилей", "f3.d": "Стандарт или Comfort — по вашему желанию и размеру группы.",
    "f4.t": "Ваш собственный маршрут", "f4.d": "Скажите, куда хотите поехать, а мы составим путь.",
    "routes.title": "Наши маршруты",
    "routes.lead": "Пять дорог, открывающих душу Армении — от монастырей до горных озёр.",
    "routes.book": "Забронировать",
    "custom.t": "Маршрут вашей мечты", "custom.d": "Амберд, Сагмосаванк, Ахпат — или место, о котором знают немногие? Напишите нам, и мы всё организуем.", "custom.btn": "Предложить маршрут",
    "classes.title": "Выберите свой комфорт",
    "classes.lead": "Два класса — одно качество. Все туры проводят опытные водители и профессиональные гиды.",
    "classes.choose": "Выбрать",
    "std.t": "Стандарт", "std.sub": "Надёжно и удобно для любой группы",
    "std.1": "Удобные седаны и микроавтобусы", "std.2": "Опытный водитель", "std.3": "Профессиональный гид", "std.4": "Остановки для фото",
    "cmf.t": "Comfort", "cmf.sub": "Всё из Стандарта, плюс:",
    "cmf.1": "Новые комфортабельные автомобили", "cmf.2": "Входные билеты в музеи включены", "cmf.3": "Питьевая вода всю дорогу", "cmf.4": "Wi‑Fi в машине",
    "price": "Цены скоро",
    "book.title": "Забронируйте тур или предложите свой",
    "book.lead": "Выберите тур или напишите места, которые хотите увидеть. Мы скоро ответим с ценой и деталями.",
    "book.s1": "Заполните форму", "book.s2": "Отправьте через WhatsApp, Telegram или Viber", "book.s3": "Получите подтверждение — и в путь",
    "form.name": "Имя", "form.phone": "Телефон", "form.route": "Маршрут", "form.customOpt": "Свой маршрут",
    "form.custom": "Куда бы вы хотели поехать?", "form.customPh": "Например: Амберд, Арагац, Сагмосаванк",
    "form.date": "Дата", "form.people": "Количество человек", "form.class": "Класс автомобиля", "form.guide": "Язык гида", "form.note": "Комментарий",
    "form.error": "Пожалуйста, укажите имя, телефон и дату.",
    "lang.hy": "Армянский", "lang.en": "Английский", "lang.ru": "Русский", "lang.it": "Итальянский",
    "msg.head": "Здравствуйте! Хочу забронировать тур в Eloria Tour.",
    "toast.copied": "Сообщение скопировано — вставьте его в чат.",
    "contacts.meet": "Отправление: площадь Республики, Ереван",
    "credits": "Фото: Wikimedia Commons, CC BY-SA",
  },
};

let lang = localStorage.getItem("eloria-lang") || "hy";
if (!T[lang]) lang = "hy";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (k) => T[lang][k] ?? k;

function renderRoutes() {
  const cards = ROUTES.map((r, i) => `
    <article class="route reveal">
      <div class="route__media">
        <img src="${r.img}" alt="${r.title[lang]}" loading="lazy" width="900" height="600">
        <span class="route__num">${i + 1}</span>
      </div>
      <div class="route__strip" aria-hidden="true"></div>
      <div class="route__body">
        <h3>${r.title[lang]}</h3>
        <div class="route__meta"><span>${r.time[lang]}</span></div>
        <p>${r.text[lang]}</p>
        <a class="btn btn--light" href="#book" data-route="${r.id}">${t("routes.book")}</a>
      </div>
    </article>`).join("");
  const custom = `
    <article class="route route--custom reveal">
      <div class="route__body">
        <h3>${t("custom.t")}</h3>
        <p>${t("custom.d")}</p>
        <a class="btn" href="#book" data-route="custom">${t("custom.btn")}</a>
      </div>
    </article>`;
  $("#routesGrid").innerHTML = cards + custom;

  const sel = $("#f-route");
  const current = sel.value;
  sel.innerHTML = ROUTES.map((r) => `<option value="${r.id}">${r.title[lang]}</option>`).join("")
    + `<option value="custom">${t("form.customOpt")}</option>`;
  if (current) sel.value = current;
  observeReveal();
}

function applyLang(next) {
  lang = next;
  localStorage.setItem("eloria-lang", lang);
  document.documentElement.lang = lang;
  document.title = t("title");
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderRoutes();
}

// Reveal on scroll
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 })
  : null;
function observeReveal() {
  $$(".reveal:not(.is-in)").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));
}

// Mobile menu
const burger = $(".burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) { burger.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
});

$$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

// Pre-fill the form from route / class buttons
const routeSel = $("#f-route");
const customField = $("#customField");
const syncCustom = () => { customField.hidden = routeSel.value !== "custom"; };
routeSel.addEventListener("change", syncCustom);

document.addEventListener("click", (e) => {
  const r = e.target.closest("[data-route]");
  if (r) { routeSel.value = r.dataset.route; syncCustom(); }
  const c = e.target.closest("[data-class]");
  if (c) { const radio = $(`input[name="class"][value="${c.dataset.class}"]`); if (radio) radio.checked = true; }
});

// Booking: build a message and open the chosen messenger
const form = $("#bookForm");
const dateInput = $("#f-date");
dateInput.min = new Date().toISOString().slice(0, 10);

function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("is-on");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("is-on"), 4000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const via = e.submitter?.dataset.via || "whatsapp";
  const required = [$("#f-name"), $("#f-phone"), dateInput];
  let ok = true;
  required.forEach((el) => {
    const bad = !el.value.trim();
    el.classList.toggle("is-invalid", bad);
    if (bad) ok = false;
  });
  $("#formError").hidden = ok;
  if (!ok) { required.find((el) => !el.value.trim()).focus(); return; }

  const d = new FormData(form);
  const route = d.get("route") === "custom"
    ? `${t("form.customOpt")}: ${d.get("custom") || "—"}`
    : ROUTES.find((r) => r.id === d.get("route")).title[lang];
  const lines = [
    t("msg.head"),
    "",
    `${t("form.name")}: ${d.get("name")}`,
    `${t("form.phone")}: ${d.get("phone")}`,
    `${t("form.route")}: ${route}`,
    `${t("form.date")}: ${d.get("date")}`,
    `${t("form.people")}: ${d.get("people")}`,
    `${t("form.class")}: ${d.get("class") === "comfort" ? "Comfort" : t("std.t")}`,
    `${t("form.guide")}: ${t("lang." + d.get("guide"))}`,
  ];
  if (d.get("note")) lines.push(`${t("form.note")}: ${d.get("note")}`);
  const text = lines.join("\n");

  if (via === "whatsapp") {
    window.open(`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    return;
  }
  // Telegram and Viber can't pre-fill a chat, so copy the text first
  try { await navigator.clipboard.writeText(text); toast(t("toast.copied")); } catch { /* clipboard blocked */ }
  const url = via === "telegram"
    ? `https://t.me/${CONTACT.telegram}`
    : `viber://chat?number=%2B${CONTACT.phone}`;
  setTimeout(() => window.open(url, "_blank", "noopener"), 600);
});

form.addEventListener("input", (e) => {
  if (e.target.classList.contains("is-invalid") && e.target.value.trim()) e.target.classList.remove("is-invalid");
});

$("#year").textContent = new Date().getFullYear();
applyLang(lang);
syncCustom();
