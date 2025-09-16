/**
* Template Name: Selecao
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  const tabs = document.querySelectorAll('.tab-btn');
  const underline = document.querySelector('.tab-underline');

  function setUnderline(el) {
    const parent = el.parentElement; // .tab-buttons
    const left = el.offsetLeft;      // jarak kiri tombol ke parent
    const width = el.offsetWidth;    // lebar tombol
    underline.style.left = left + 'px';
    underline.style.width = width + 'px';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setUnderline(tab);
      // panggil fungsi ganti form di sini
    });
  });

// set posisi awal underline ke tab aktif
window.addEventListener('load', () => {
  const activeTab = document.querySelector('.tab-btn.active');
  setUnderline(activeTab);
});

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);



  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  // === Blok Tab + Form ===
const btnWiraswasta = document.getElementById('btnWiraswasta');
const btnKaryawan = document.getElementById('btnKaryawan');
const formWiraswasta = document.getElementById('formWiraswasta');
const formKaryawan = document.getElementById('formKaryawan');

if (btnWiraswasta && btnKaryawan && formWiraswasta && formKaryawan) {
  btnWiraswasta.addEventListener('click', () => {
    formKaryawan.classList.remove('show');
    setTimeout(() => formWiraswasta.classList.add('show'), 10);
    btnWiraswasta.classList.add('active');
    btnKaryawan.classList.remove('active');
  });

  btnKaryawan.addEventListener('click', () => {
    formWiraswasta.classList.remove('show');
    setTimeout(() => formKaryawan.classList.add('show'), 10);
    btnKaryawan.classList.add('active');
    btnWiraswasta.classList.remove('active');
  });
}
  

  // Daftar libur nasional Indonesia 2025 (contoh, bisa ditambah sesuai SKB 3 Menteri)
const holidays = [
  "2025-01-01", // Tahun Baru
  "2025-01-27", // Isra Mi'raj
  "2025-03-29", // Nyepi
  "2025-04-18", // Wafat Isa Almasih
  "2025-04-27", // Idul Fitri 1446H (hari 1)
  "2025-04-28", // Idul Fitri 1446H (hari 2)
  "2025-05-01", // Hari Buruh
  "2025-05-15", // Kenaikan Isa Almasih
  "2025-05-31", // Hari Raya Waisak
  "2025-06-06", // Idul Adha
  "2025-06-27", // 1 Muharram 1447H
  "2025-08-17", // Kemerdekaan RI
  "2025-09-05", // Maulid Nabi Muhammad SAW
  "2025-12-25"  // Natal
];

function generateCalendar() {
  const container = document.getElementById('calendar');
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta' };
  const localToday = new Date(now.toLocaleString('en-US', options));

  const year = localToday.getFullYear();
  const month = localToday.getMonth();
  const date = localToday.getDate();

  const monthNames = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let table = `<h2>${monthNames[month]} ${year}</h2>`;
  table += "<table>";
  table += "<tr><th>Min</th><th>Sen</th><th>Sel</th><th>Rab</th><th>Kam</th><th>Jum</th><th>Sab</th></tr><tr>";

  let day = 0;

  // Kosong sebelum tanggal 1
  for (let i = 0; i < firstDay; i++) {
    table += "<td></td>";
    day++;
  }

  // Isi tanggal
  for (let d = 1; d <= daysInMonth; d++) {
    const fullDate = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    let classes = "";

    if (d === date) classes = "today"; 
    if (holidays.includes(fullDate)) classes = "holiday"; // hanya libur nasional resmi

    table += `<td class="${classes}">${d}</td>`;
    day++;

    if (day % 7 === 0 && d !== daysInMonth) {
      table += "</tr><tr>";
    }
  }

  table += "</tr></table>";
  container.innerHTML = table;
}

// Jalankan pertama kali
generateCalendar();

// Update otomatis setiap jam
setInterval(generateCalendar, 3600000);

const calendarToggleBtn = document.getElementById('calendar-toggle');
const calendarEl = document.getElementById('calendar');

if (calendarToggleBtn && calendarEl) {
  generateCalendar(); // buat isi kalender

  calendarToggleBtn.addEventListener('click', () => {
    calendarEl.style.display =
      (calendarEl.style.display === 'none' ? 'block' : 'none');
  });
}

window.loadMap = function(url){
  console.log('loadMap jalan:', url); // debug
  const frame = document.getElementById('mapsFrame');
  const overlay = document.getElementById('mapOverlay');
  
  if(frame){
    frame.src = url;                             // ganti peta
    frame.style.pointerEvents = 'auto';          // aktifkan interaksi iframe
    frame.scrollIntoView({behavior:'smooth', block: 'start'});   // scroll ke iframe
  } else {
    alert('iframe #mapsFrame tidak ditemukan');
  }

  if(overlay){
    overlay.style.opacity = 0;                   // efek memudar
    setTimeout(()=>{ overlay.style.display = 'none'; }, 300); // sembunyikan overlay
  }
};


const calendarToggle = document.getElementById("calendar-toggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    calendarToggle.classList.add("active");
  } else {
    calendarToggle.classList.remove("active");
    document.getElementById("calendar").style.display = "none"; // otomatis tutup
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const jenisSelect = document.getElementById('jenis_pekerjaan');
  const statusSelect = document.getElementById('status_pekerjaan');

  // Cek dulu ada atau tidak supaya di halaman lain tidak error
  if (jenisSelect && statusSelect) {
    const statusOptions = {
      'Pegawai Pemerintah': ['PNS', 'P3K', 'HONORER'],
      'Pegawai Swasta': ['Karyawan Swasta', 'Karyawan Tetap', 'Karyawan Kontrak'],
      'Profesi': ['Dokter','Dosen','Notaris','Guru','Perawat','Bidan','Tata Usaha','Programer','Arsitek','Insinyur','Hakim','Pengacara','Polisi','TNI','DPR','Desainer','Penulis','Musisi','Profesi Lain']
    };

    jenisSelect.addEventListener('change', function () {
      // kosongkan statusSelect dulu
      statusSelect.innerHTML = '<option value="" disabled selected>Pilih Status</option>';

      const selectedJenis = this.value;
      if (statusOptions[selectedJenis]) {
        statusOptions[selectedJenis].forEach(function (status) {
          const opt = document.createElement('option');
          opt.value = status;
          opt.textContent = status;
          statusSelect.appendChild(opt);
        });
      }
    });
  }
});


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();