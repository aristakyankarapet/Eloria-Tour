// Placeholder contacts — replace with real ones later
const CONTACT = {
  phone: "37400000000",
  telegram: "eloriatour",
};

const ROUTES = [
  {
    id: "dilijan",
    photos: [
      { src: "assets/img/dilijan.jpg", name: { hy: "Դիլիջան", en: "Dilijan", ru: "Дилижан" } },
      { src: "assets/img/haghartsin.jpg", name: { hy: "Հաղարծին", en: "Haghartsin", ru: "Агарцин" } },
      { src: "assets/img/goshavank.jpg", name: { hy: "Գոշավանք", en: "Goshavank", ru: "Гошаванк" } },
    ],
    title: { hy: "Դիլիջան – Հաղարծին – Գոշավանք", en: "Dilijan – Haghartsin – Goshavank", ru: "Дилижан – Агарцин – Гошаванк" },
    time: { hy: "≈ 9 ժամ", en: "≈ 9 hours", ru: "≈ 9 часов" },
    text: {
      hy: "«Հայկական Շվեյցարիա»՝ անտառներում թաքնված Հաղարծինը, Գոշավանքը՝ իր ժանյակե խաչքարով, և Դիլիջանի հին թաղամասը։",
      en: "The “Armenian Switzerland”: forest-hidden Haghartsin, Goshavank with its lace-like khachkar, and the old quarter of Dilijan.",
      ru: "«Армянская Швейцария»: спрятанный в лесах Агарцин, Гошаванк с кружевным хачкаром и старый квартал Дилижана.",
    },
  },
  {
    id: "garni",
    photos: [
      { src: "assets/img/garni.jpg", name: { hy: "Գառնիի տաճար", en: "Garni Temple", ru: "Храм Гарни" } },
      { src: "assets/img/symphony.jpg", name: { hy: "Քարերի սիմֆոնիա", en: "Symphony of Stones", ru: "Симфония камней" } },
      { src: "assets/img/geghard.jpg", name: { hy: "Գեղարդ", en: "Geghard", ru: "Гегард" } },
    ],
    title: { hy: "Գառնի – Գեղարդ", en: "Garni – Geghard", ru: "Гарни – Гегард" },
    time: { hy: "≈ 5 ժամ", en: "≈ 5 hours", ru: "≈ 5 часов" },
    text: {
      hy: "Հեթանոսական տաճարը կիրճի եզրին, «Քարերի սիմֆոնիան» և ժայռի մեջ փորված Գեղարդավանքը՝ ՅՈՒՆԵՍԿՕ-ի ժառանգություն։",
      en: "The pagan temple on the gorge’s edge, the “Symphony of Stones” and Geghard, a UNESCO monastery carved into the rock.",
      ru: "Языческий храм на краю ущелья, «Симфония камней» и высеченный в скале Гегард — наследие ЮНЕСКО.",
    },
  },
  {
    id: "noravank",
    photos: [
      { src: "assets/img/khorvirap.jpg", name: { hy: "Խոր Վիրապ", en: "Khor Virap", ru: "Хор Вирап" } },
      { src: "assets/img/noravank.jpg", name: { hy: "Նորավանք", en: "Noravank", ru: "Нораванк" } },
      { src: "assets/img/areni.jpg", name: { hy: "Արենիի գինի", en: "Areni wine", ru: "Вино Арени" } },
    ],
    title: { hy: "Խոր Վիրապ – Նորավանք – Արենի", en: "Khor Virap – Noravank – Areni", ru: "Хор Вирап – Нораванк – Арени" },
    time: { hy: "≈ 8 ժամ", en: "≈ 8 hours", ru: "≈ 8 часов" },
    text: {
      hy: "Արարատը՝ ձեռքի մեկնած հեռավորությամբ, Նորավանքը կարմիր ժայռերի գրկում և գինու համտես Արենիում։",
      en: "Ararat within arm’s reach, Noravank embraced by red cliffs, and a wine tasting in Areni.",
      ru: "Арарат на расстоянии вытянутой руки, Нораванк в объятиях красных скал и дегустация вина в Арени.",
    },
  },
  {
    id: "sevan",
    photos: [
      { src: "assets/img/sevan.jpg", name: { hy: "Սևանա լիճ", en: "Lake Sevan", ru: "Озеро Севан" } },
      { src: "assets/img/sevanavank.jpg", name: { hy: "Սևանավանք", en: "Sevanavank", ru: "Севанаванк" } },
      { src: "assets/img/parz.jpg", name: { hy: "Պարզ լիճ, Դիլիջան", en: "Lake Parz, Dilijan", ru: "Озеро Парз, Дилижан" } },
    ],
    title: { hy: "Սևան – Սևանավանք – Դիլիջան", en: "Sevan – Sevanavank – Dilijan", ru: "Севан – Севанаванк – Дилижан" },
    time: { hy: "≈ 8 ժամ", en: "≈ 8 hours", ru: "≈ 8 часов" },
    text: {
      hy: "Կապույտ Սևանը՝ 1900 մ բարձրության վրա, թերակղզու Սևանավանքը և զբոսանք Դիլիջանի անտառներում։",
      en: "Blue Lake Sevan at 1,900 m, Sevanavank on its peninsula, and a stroll through the forests of Dilijan.",
      ru: "Голубой Севан на высоте 1900 м, Севанаванк на полуострове и прогулка по лесам Дилижана.",
    },
  },
  {
    id: "tatev",
    photos: [
      { src: "assets/img/jermuk.jpg", name: { hy: "Ջերմուկ", en: "Jermuk", ru: "Джермук" } },
      { src: "assets/img/tatev.jpg", name: { hy: "Տաթև", en: "Tatev", ru: "Татев" } },
      { src: "assets/img/goris.jpg", name: { hy: "Գորիս", en: "Goris", ru: "Горис" } },
    ],
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
    "title.home": "Eloria Tour — Տուրեր Հայաստանում", "title.routes": "Երթուղիներ — Eloria Tour", "title.cars": "Մեքենաներ — Eloria Tour", "title.book": "Ամրագրում — Eloria Tour", "title.contacts": "Կապ — Eloria Tour",
    "home.t": "Բացահայտեք Հայաստանը մեզ հետ", "home.d": "Ընտրեք երթուղին, մեքենայի դասը և ամրագրեք ձեր ճամփորդությունը մի քանի րոպեում։", "home.more": "Մանրամասն",
    "tile.routes": "Հինգ ընտրված երթուղի և ձեր սեփականը", "tile.cars": "Ստանդարտ կամ Comfort՝ ձեր ընտրությամբ", "tile.book": "Լրացրեք ձևը և ուղարկեք մեզ",
    "contacts.lead": "Մենք միշտ կապի մեջ ենք․ գրեք կամ զանգահարեք ձեզ հարմար ձևով։",
    "c.phone": "Հեռախոս", "c.write": "Գրեք կամ հետևեք մեզ", "c.langsT": "Գիդերի լեզուները", "c.langsD": "Հայերեն, անգլերեն, ռուսերեն և իտալերեն",
    "c.meetT": "Հանդիպման վայր", "c.meetD": "Բոլոր տուրերը մեկնում են Երևանի Հանրապետության հրապարակից։ Ճշգրիտ ժամը կհաստատենք ամրագրելիս։", "c.office": "Գրասենյակը՝ շուտով", "c.map": "Հանրապետության հրապարակ, Երևան",
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
    "routes.book": "Ամրագրել", "gallery.prev": "Նախորդ նկարը", "gallery.next": "Հաջորդ նկարը",
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
    "credits": "Լուսանկարներ՝ Wikimedia Commons, CC BY / CC BY-SA",
  },
  en: {
    "title.home": "Eloria Tour — Tours in Armenia", "title.routes": "Routes — Eloria Tour", "title.cars": "Cars — Eloria Tour", "title.book": "Booking — Eloria Tour", "title.contacts": "Contacts — Eloria Tour",
    "home.t": "Discover Armenia with us", "home.d": "Choose a route and a car class, and book your journey in a few minutes.", "home.more": "Learn more",
    "tile.routes": "Five hand-picked routes, or your own", "tile.cars": "Standard or Comfort — your choice", "tile.book": "Fill in the form and send it to us",
    "contacts.lead": "We are always in touch — write or call us however suits you.",
    "c.phone": "Phone", "c.write": "Write to us or follow us", "c.langsT": "Guide languages", "c.langsD": "Armenian, English, Russian and Italian",
    "c.meetT": "Meeting point", "c.meetD": "All tours depart from Republic Square in Yerevan. We will confirm the exact time when you book.", "c.office": "Office coming soon", "c.map": "Republic Square, Yerevan",
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
    "routes.book": "Book", "gallery.prev": "Previous photo", "gallery.next": "Next photo",
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
    "credits": "Photos: Wikimedia Commons, CC BY / CC BY-SA",
  },
  ru: {
    "title.home": "Eloria Tour — Туры по Армении", "title.routes": "Маршруты — Eloria Tour", "title.cars": "Автомобили — Eloria Tour", "title.book": "Бронирование — Eloria Tour", "title.contacts": "Контакты — Eloria Tour",
    "home.t": "Откройте Армению вместе с нами", "home.d": "Выберите маршрут и класс автомобиля и забронируйте поездку за несколько минут.", "home.more": "Подробнее",
    "tile.routes": "Пять избранных маршрутов или ваш собственный", "tile.cars": "Стандарт или Comfort — на ваш выбор", "tile.book": "Заполните форму и отправьте нам",
    "contacts.lead": "Мы всегда на связи — пишите или звоните, как вам удобно.",
    "c.phone": "Телефон", "c.write": "Пишите или подписывайтесь", "c.langsT": "Языки гидов", "c.langsD": "Армянский, английский, русский и итальянский",
    "c.meetT": "Место встречи", "c.meetD": "Все туры отправляются с площади Республики в Ереване. Точное время подтвердим при бронировании.", "c.office": "Офис — скоро", "c.map": "Площадь Республики, Ереван",
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
    "routes.book": "Забронировать", "gallery.prev": "Предыдущее фото", "gallery.next": "Следующее фото",
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
    "credits": "Фото: Wikimedia Commons, CC BY / CC BY-SA",
  },
};

let lang = localStorage.getItem("eloria-lang") || "hy";
if (!T[lang]) lang = "hy";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (k) => T[lang][k] ?? k;

const page = document.body.dataset.page || "home";

function renderRoutes() {
  const grid = $("#routesGrid");
  if (grid) {
    const cards = ROUTES.map((r, i) => `
    <article class="route reveal">
      <div class="route__media gallery">
        <div class="gallery__track">
          ${r.photos.map((p) => `
          <figure class="gallery__slide">
            <img src="${p.src}" alt="${p.name[lang]}" loading="lazy" width="960" height="640">
            <figcaption>${p.name[lang]}</figcaption>
          </figure>`).join("")}
        </div>
        <span class="route__num">${i + 1}</span>
        <button class="gallery__btn gallery__btn--prev" type="button" aria-label="${t("gallery.prev")}" disabled>‹</button>
        <button class="gallery__btn gallery__btn--next" type="button" aria-label="${t("gallery.next")}">›</button>
        <div class="gallery__dots">
          ${r.photos.map((p, n) => `<button type="button" aria-label="${p.name[lang]}" aria-current="${n === 0}"></button>`).join("")}
        </div>
      </div>
      <div class="route__strip" aria-hidden="true"></div>
      <div class="route__body">
        <h3>${r.title[lang]}</h3>
        <div class="route__meta"><span>${r.time[lang]}</span></div>
        <p>${r.text[lang]}</p>
        <a class="btn btn--light" href="booking.html?route=${r.id}">${t("routes.book")}</a>
      </div>
    </article>`).join("");
    const custom = `
    <article class="route route--custom reveal">
      <div class="route__body">
        <h3>${t("custom.t")}</h3>
        <p>${t("custom.d")}</p>
        <a class="btn" href="booking.html?route=custom">${t("custom.btn")}</a>
      </div>
    </article>`;
    grid.innerHTML = cards + custom;
  }

  const sel = $("#f-route");
  if (sel) {
    const current = sel.value || new URLSearchParams(location.search).get("route");
    sel.innerHTML = ROUTES.map((r) => `<option value="${r.id}">${r.title[lang]}</option>`).join("")
      + `<option value="custom">${t("form.customOpt")}</option>`;
    if (current && [...sel.options].some((o) => o.value === current)) sel.value = current;
  }
  observeReveal();
}

function applyLang(next) {
  lang = next;
  localStorage.setItem("eloria-lang", lang);
  document.documentElement.lang = lang;
  document.title = t("title." + page);
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  $$("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderRoutes();
  if (typeof syncCustom === "function") syncCustom();
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

// Route photo galleries: swipe, arrows, dots and autoplay
const slideIndex = (track) => Math.round(track.scrollLeft / track.clientWidth);
function slideTo(track, n) {
  track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
}
const holdGallery = (g) => { g.dataset.holdUntil = Date.now() + 8000; };

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".gallery__btn, .gallery__dots button");
  if (!btn) return;
  const g = btn.closest(".gallery");
  const track = $(".gallery__track", g);
  const cur = slideIndex(track);
  holdGallery(g);
  if (btn.classList.contains("gallery__btn--prev")) slideTo(track, cur - 1);
  else if (btn.classList.contains("gallery__btn--next")) slideTo(track, cur + 1);
  else slideTo(track, $$(".gallery__dots button", g).indexOf(btn));
});
document.addEventListener("pointerdown", (e) => {
  const g = e.target.closest(".gallery");
  if (g) holdGallery(g);
});
document.addEventListener("scroll", (e) => {
  const track = e.target;
  if (!track.classList?.contains("gallery__track")) return;
  const g = track.parentElement;
  const n = slideIndex(track);
  const last = track.children.length - 1;
  $$(".gallery__dots button", g).forEach((d, i) => d.setAttribute("aria-current", String(i === n)));
  $(".gallery__btn--prev", g).disabled = n <= 0;
  $(".gallery__btn--next", g).disabled = n >= last;
}, true);

// Each gallery advances every 4.5s; neighbours are staggered so they don't all change at once
if ($("#routesGrid") && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let tick = 0;
  setInterval(() => {
    tick += 1;
    if (document.hidden) return;
    $$(".gallery").forEach((g, i) => {
      if ((tick + i) % 3 !== 0) return;
      if (g.matches(":hover, :focus-within") || Date.now() < (+g.dataset.holdUntil || 0)) return;
      const track = $(".gallery__track", g);
      const next = slideIndex(track) + 1;
      slideTo(track, next >= track.children.length ? 0 : next);
    });
  }, 1500);
}

// Mobile menu
const burger = $(".burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
});

$$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("is-on");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("is-on"), 4000);
}

// Booking page: pre-fill from the link (?route=… / ?class=…) and send via messenger
const form = $("#bookForm");
const routeSel = $("#f-route");
const customField = $("#customField");
const syncCustom = form ? () => { customField.hidden = routeSel.value !== "custom"; } : null;

if (form) {
  routeSel.addEventListener("change", syncCustom);
  const cls = new URLSearchParams(location.search).get("class");
  const radio = cls && $(`input[name="class"][value="${cls}"]`);
  if (radio) radio.checked = true;

  const dateInput = $("#f-date");
  dateInput.min = new Date().toISOString().slice(0, 10);

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
}

$("#year").textContent = new Date().getFullYear();
applyLang(lang);
