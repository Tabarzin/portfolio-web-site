const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
    email: "E-mail",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
    email: "Почта",
  },
};

/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const headerBurger = document.querySelector(".header-burger");
const menuLink = document.querySelector(".nav-list");

function toggleMenu() {
  hamburger.classList.toggle("open");
  headerBurger.classList.toggle("header-burger-open");
}
hamburger.addEventListener("click", toggleMenu);

function closeMenu() {
  hamburger.classList.remove("open");
  headerBurger.classList.remove("header-burger-open");
}

menuLink.addEventListener("click", closeMenu);

/* TOGGLE IMAGES */

const portfolioBtns = document.querySelector(".portfolio-btns");
const portfolioImages = document.querySelectorAll(".portfolio-image");

function changeImage(event) {
  if (event.target.classList.contains("portfiolio-btn")) {
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${event.target.dataset.season}/${
          index + 1
        }.jpg`)
    );
  }
}

portfolioBtns.addEventListener("click", changeImage);

/* CHANGE BUTTON COLOR */

const portfolioBtn = document.querySelectorAll(".portfiolio-btn");

portfolioBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    portfolioBtn.forEach((el) => {
      el.classList.remove("span-visited");
    });
    item.classList.add("span-visited");
  });
});

/* CASH IMAGES */

const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages(folder) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${folder}/${i}.jpg`;
  }
}

seasons.forEach((el) => preloadImages(el));

/* TRANSLATION */

const ruLang = document.querySelector(".ru");
const enLang = document.querySelector(".en");
const dataToTranslate = document.querySelectorAll("[data-i18]");

function getTranslate(lang) {
  dataToTranslate.forEach(
    (el) => (el.textContent = i18Obj[lang][el.dataset.i18])
  );
}

enLang.addEventListener("click", () => getTranslate("en"));
ruLang.addEventListener("click", () => getTranslate("ru"));

/* COLOR THEME */

const elemsToChangeColor = [
  "section-title",
  "skill-item",
  ".skill-item-title",
  ".skill-item-text",
  ".portfolio-section-title",
  ".portfolio-btns",
  ".portfolio-btn",
  ".price-items",
  ".price-item",
  ".price-items-price",
  ".price-items-text",
  ".price-button",
  "#skills",
  ".section-title-line",
  ".section-title",
  "body",
  ".price-items-title",
  ".header-burger-open",

  ".header-container",

  ".span-unvisited",
];

const themeBtn = document.querySelector(".theme");

function toggleTheme() {
  const sunMoon = document.querySelector(".theme");
  const isMoonTheme = sunMoon.classList.toggle("theme-moon");

  elemsToChangeColor.forEach((el) => {
    const items = document.querySelectorAll(el);
    items.forEach((elem) => {
      elem.classList.toggle("light-theme", isMoonTheme);
      elem.classList.toggle("dark-theme", !isMoonTheme);
    });
  });
}

themeBtn.addEventListener("click", toggleTheme);


const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  toggleTheme();
}

/* LOCAL STORAGE  */

const radioButtons = document.querySelectorAll('input[name="lang"]');
const themeButton = document.querySelector(".theme");
const defaultLanguage = "en"; 
const defaultTheme = "dark"; 

function updateLanguagePreference() {
  const selectedLanguage = document.querySelector(
    'input[name="lang"]:checked'
  ).value;
  localStorage.setItem("lang", selectedLanguage);
  
  getTranslate(selectedLanguage); 
}

function updateThemePreference() {
  const selectedTheme = themeButton.classList.contains("dark")
    ? "dark"
    : "light";
  localStorage.setItem("theme", selectedTheme);
}

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("dark");
  updateThemePreference();
});

function getLocalStorage() {
  const storedLanguage = localStorage.getItem("lang");
  const languageToSelect = storedLanguage || defaultLanguage;
  document.querySelector(`input[value="${languageToSelect}"]`).checked = true;
  
  getTranslate(languageToSelect); 

  const storedTheme = localStorage.getItem("theme");
  const themeToApply = storedTheme || defaultTheme;
  themeButton.classList.toggle("dark", themeToApply === "dark");
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", updateLanguagePreference);
});

window.addEventListener("load", getLocalStorage);
