let lastScroll = 0;
const navbar = document.getElementById('navbar');

// Ambil tinggi navbar aktual
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll && currentScroll > navbarHeight) {
    // Scroll ke bawah: sembunyikan navbar sepenuhnya
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    // Scroll ke atas: tampilkan navbar
    navbar.style.top = "0";
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

