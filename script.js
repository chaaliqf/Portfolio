// GET ELEMENT

const menu_btn = document.querySelector('.hamburger');
const nav_scroll = document.querySelector('nav');
const darkmode_active = document.querySelector('.menu-dm');
const body = document.querySelector('body');
const svgs = document.querySelectorAll('.svg');

const github = document.querySelector('.github');
const navMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const homeTxt = document.querySelector('.home-text');
const logoDm = document.querySelector('.menu-dm li a');
const text = document.querySelector('.text');
const hamburger = document.querySelector('.hamburger');
const about = document.querySelector('.about');
const aboutContainer = document.querySelector('.about-container');
const aboutTitle = document.querySelector('.about-title');
const skillsTitle = document.querySelector('.skills-title');
const servicestTitle = document.querySelector('.services-title');
const portfolioTitle = document.querySelector('.portfolio-title');
const contactTitle = document.querySelector('.contact-title');
const btnSc = document.querySelector('.btn-sc');
const aboutCards = document.querySelectorAll('.about-card');
const aboutText = document.querySelector('.about-text');
const skillsFront = document.querySelector('.skills-frontend');
const skillsBack = document.querySelector('.skills-backend');
const portfolio = document.querySelector('.portfolio');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const footer = document.querySelector('footer');

const forms = document.querySelectorAll('.form');
const btnForm = document.querySelector('.btn-form');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
  });
  
  menu_btn.addEventListener('click', function () {
    nav_scroll.classList.toggle('is-active');
  });

// DARK MODE ACTIVE

darkmode_active.addEventListener('click', function () {
    body.classList.toggle('darkmode-active');
    svgs.forEach((svg) => svg.classList.toggle('svg-active'));
    github.classList.toggle('darkmd');
    navMenu.classList.toggle('darkmd');
    navbar.classList.toggle('darkmd');
    logoDm.classList.toggle('darkmd');
    homeTxt.classList.toggle('darkmd');
    hamburger.classList.toggle('darkmd');
    about.classList.toggle('darkmd');
    aboutContainer.classList.toggle('darkmd');
    aboutTitle.classList.toggle('darkmd');
    skillsTitle.classList.toggle('darkmd');
    servicestTitle.classList.toggle('darkmd');
    portfolioTitle.classList.toggle('darkmd');
    contactTitle.classList.toggle('darkmd');
    btnSc.classList.toggle('darkmd');
    aboutCards.forEach((aboutCard) => aboutCard.classList.toggle('darkmd'));
    aboutText.classList.toggle('darkmd');
    skillsFront.classList.toggle('darkmd');
    skillsBack.classList.toggle('darkmd');
    portfolio.classList.toggle('darkmd');
    footer.classList.toggle('darkmd');
    portfolioCards.forEach(portfolioCard => {
        portfolioCard.classList.toggle('darkmd');
      });
});

// CLEAR FORM MAIL

btnForm.addEventListener('click', function () {
  setTimeout(() => {
    forms.forEach((form) => (form.value = ''));
  }, 1000);
});


// Direction


const leftBtn = document.querySelector('.direction p span:first-child');
const rightBtn = document.querySelector('.direction span:last-child');
const cardsContainer = document.querySelector('.portfolio-cards');

let startX, endX;

// Fungsi untuk menggeser slide ke kiri
const slideLeft = () => {
  cardsContainer.scrollBy({
    left: -cardsContainer.offsetWidth,
    behavior: 'smooth'
  });
};

// Fungsi untuk menggeser slide ke kanan
const slideRight = () => {
  cardsContainer.scrollBy({
    left: cardsContainer.offsetWidth,
    behavior: 'smooth'
  });
};

// Fungsi untuk menangani event sentuhan
const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
  if (!startX) return; // Mengatasi kasus ketika touch tidak terdeteksi

  endX = event.changedTouches[0].clientX;

  const diffX = startX - endX;

  // Normalisasi perbedaan X agar dapat mengidentifikasi arah swipe dengan benar
  const normalizedDiffX = Math.sign(diffX) * Math.abs(diffX);

  // Jika perbedaan posisi X lebih besar dari 50px, geser slide
  if (Math.abs(normalizedDiffX) > 50) {
    if (normalizedDiffX > 0) {
      // Swipe ke kiri
      slideRight();
    } else {
      // Swipe ke kanan
      slideLeft();
    }
  }

  startX = null; // Reset nilai startX agar tidak mempengaruhi swipe berikutnya
};

// Menambahkan event listener untuk sentuhan
cardsContainer.addEventListener('touchstart', handleTouchStart);
cardsContainer.addEventListener('touchend', handleTouchEnd);

// Event listener untuk menggeser slide saat tombol kiri di klik
leftBtn.addEventListener('click', slideLeft);

// Event listener untuk menggeser slide saat tombol kanan di klik
rightBtn.addEventListener('click', slideRight);



// Menambahkan event listener untuk sentuhan
cardsContainer.addEventListener('touchstart', handleTouchStart);
cardsContainer.addEventListener('touchend', handleTouchEnd);

// Event listener untuk menggeser slide saat tombol kiri di klik
leftBtn.addEventListener('click', slideLeft);

// Event listener untuk menggeser slide saat tombol kanan di klik
rightBtn.addEventListener('click', slideRight);