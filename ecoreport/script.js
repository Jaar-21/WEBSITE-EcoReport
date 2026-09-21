
const GOOGLE_MAPS_API_KEY = "AIzaSyDXFGvRrvC04Td-uuPTep8SAcrifvZre6k"; 

// Titik Koordinat Pusat Kota Samarinda
const KOORDINAT_PUSAT_SAMARINDA = {
  lat: -0.502106,
  lng: 117.153709,
  nama: "Pusat Kota Samarinda"
};

// Batas Wilayah Administratif Kota Samarinda (Bounding Box)
const BATAS_WILAYAH_SAMARINDA = {
  minLat: -0.65,
  maxLat: -0.35,
  minLng: 117.00,
  maxLng: 117.30
};

const DAFTAR_KATEGORI = [
  {
    nama: "Sampah Liar",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
    deskripsi: "Tumpukan sampah ilegal di trotoar, jalan raya, dan lahan kosong"
  },
  {
    nama: "Polusi Air",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    deskripsi: "Pencemaran anak Sungai Mahakam, parit keruh, dan bau busuk"
  },
  {
    nama: "Polusi Udara",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`,
    deskripsi: "Asap pembakaran sampah, debu industri, dan aroma pekat"
  },
  {
    nama: "Penebangan Liar",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L7 10h3l-4 7h6v5h2v-5h6l-4-7h3z"></path></svg>`,
    deskripsi: "Pengrusakan pohon pelindung kota dan sempadan sungai"
  },
  {
    nama: "Drainase Tersumbat",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line><path d="M12 2v4m0 12v4M2 12h4m12 0h4"></path></svg>`,
    deskripsi: "Saluran air/gorong-gorong mampet pemicu genangan banjir"
  },
  {
    nama: "Kebakaran Lahan",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
    deskripsi: "Titik api semak belukar dan lahan gambut rawan meluas"
  },
  {
    nama: "Limbah Industri",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>`,
    deskripsi: "Pembuangan residu usaha atau bengkel tanpa penyaringan"
  },
  {
    nama: "Fasilitas Rusak",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    deskripsi: "Bak sampah kontainer jebol, taman kota, dan trotoar rusak"
  },
  {
    nama: "Jalan Rusak",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="2 22 8 2 16 2 22 22 2 22"></polygon><line x1="5.5" y1="13" x2="18.5" y2="13"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`,
    deskripsi: "Jalan amblas, berlubang parah, dan longsoran tebing jalan"
  },
  {
    nama: "Lainnya",
    warna: "#1E3D27",
    ikon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    deskripsi: "Pelanggaran dan masalah ekologi spesifik lainnya di Samarinda"
  }
];

const DAFTAR_KECAMATAN_SAMARINDA = [
  "Samarinda Ulu",
  "Samarinda Ilir",
  "Samarinda Utara",
  "Samarinda Seberang",
  "Samarinda Kota",
  "Samarinda Selatan",
  "Sungai Kunjang",
  "Sambutan",
  "Palaran",
  "Loa Janan Ilir"
];
// =========================================
//  DROPDOWN KATEGORI
// =========================================

function togglePetaKategoriDropdown() {
  const dropdown = document.getElementById("petaKategoriDropdown");

  if (!dropdown) return;

  dropdown.classList.toggle("open");
}


function renderPetaKategoriDropdown() {
  const menu = document.getElementById("petaKategoriMenu");
  const select = document.getElementById("petaKategoriFilterSelect");

  if (!menu || !select) return;

  menu.innerHTML = "";

  const options = Array.from(select.options);

  options.forEach((option, index) => {
    const item = document.createElement("div");

    item.className = "custom-dropdown-option";

    if (option.value === select.value) {
      item.classList.add("active");
    }

    item.dataset.value = option.value;
    item.textContent = option.textContent;

    item.onclick = function() {
      pilihPetaKategori(option.value, option.textContent);
    };

    menu.appendChild(item);
  });

  const labelEl = document.getElementById("petaKategoriSelected");
  const terpilih = select.options[select.selectedIndex];
  if (labelEl && terpilih) labelEl.textContent = terpilih.textContent;
}


function pilihPetaKategori(value, label) {
  const dropdown = document.getElementById("petaKategoriDropdown");
  const selected = document.getElementById("petaKategoriSelected");
  const select = document.getElementById("petaKategoriFilterSelect");

  if (!dropdown || !selected || !select) return;

  selected.textContent = label;

  select.value = value;

  const options = dropdown.querySelectorAll(".custom-dropdown-option");

  options.forEach(option => {
    option.classList.remove("active");

    if (option.dataset.value === value) {
      option.classList.add("active");
    }
  });

  dropdown.classList.remove("open");

  filterPetaPublik();
}


// =========================================
// DROPDOWN FILTER KECAMATAN
// =========================================

function togglePetaKecamatanDropdown() {
  const dropdown = document.getElementById("petaKecamatanDropdown");

  if (!dropdown) return;

  dropdown.classList.toggle("open");
}

function pilihPetaKecamatan(value, label) {
  const dropdown = document.getElementById("petaKecamatanDropdown");
  const selected = document.getElementById("petaKecamatanSelected");
  const select = document.getElementById("petaKecamatanFilterSelect");

  if (!dropdown || !selected || !select) return;

  selected.textContent = label;


  select.value = value;

  const options = dropdown.querySelectorAll(".custom-dropdown-option");

  options.forEach(option => {
    option.classList.remove("active");

    if (option.dataset.value === value) {
      option.classList.add("active");
    }
  });

  dropdown.classList.remove("open");

  filterPetaPublik();
}


const BACKEND_CONFIG = {
  USE_BACKEND_API: false, 
  BASE_URL: "http://localhost:5000/api", 
  TIMEOUT_MS: 5000,
  ENDPOINTS: {
    AUTH_LOGIN: "/auth/login",
    AUTH_REGISTER: "/auth/register",
    AUTH_ME: "/auth/me",
    REPORTS: "/reports",
    REPORT_DETAIL: (id) => `/reports/${id}`,
    REPORT_VERIFY: (id) => `/reports/${id}/verify`,
    REPORT_STATUS: (id) => `/reports/${id}/status`,
    KPI_SUMMARY: "/stats/kpi",
    USERS: "/users",
    SETTINGS: "/settings"
  },
  HEADERS: {
    "Content-Type": "application/json"
  }
};

const ApiService = {
  async login(credentials) {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.AUTH_LOGIN}`, {
          method: "POST",
          headers: BACKEND_CONFIG.HEADERS,
          body: JSON.stringify(credentials)
        });
        return await res.json();
      } catch (err) {
        console.warn("[ApiService] Gagal menghubungi backend API, beralih ke penyimpanan lokal.", err);
      }
    }
    return AuthDatabaseLocal.login(credentials);
  },

  async registerPelapor(dataPelapor) {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.AUTH_REGISTER}`, {
          method: "POST",
          headers: BACKEND_CONFIG.HEADERS,
          body: JSON.stringify(dataPelapor)
        });
        return await res.json();
      } catch (err) {
        console.warn("[ApiService] Gagal menghubungi backend API, beralih ke penyimpanan lokal.", err);
      }
    }
    return AuthDatabaseLocal.register(dataPelapor);
  },

  async getReports(params = {}) {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const query = new URLSearchParams(params).toString();
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.REPORTS}?${query}`);
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn("[ApiService] Backend API tidak merespons, menggunakan database lokal.", err);
      }
    }
    return ambilDataLaporan();
  },

  async createReport(reportPayload) {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.REPORTS}`, {
          method: "POST",
          headers: BACKEND_CONFIG.HEADERS,
          body: JSON.stringify(reportPayload)
        });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn("[ApiService] Gagal kirim ke backend API, menyimpan di lokal.", err);
      }
    }
    return ReportDatabaseLocal.create(reportPayload);
  },

  async getUsers() {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.USERS}`);
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn("[ApiService] Gagal memuat pengguna dari backend, memakai data lokal.", err);
      }
    }
    return AuthDatabaseLocal.getUsers().map(({ password, ...aman }) => aman); // sandi tidak pernah ditampilkan
  },

  async getSettings() {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.SETTINGS}`);
        if (res.ok) return { ...PENGATURAN_SISTEM_DEFAULT, ...(await res.json()) };
      } catch (err) {
        console.warn("[ApiService] Gagal memuat pengaturan dari backend, memakai data lokal.", err);
      }
    }
    return SettingsDatabaseLocal.get();
  },

  async saveSettings(pengaturan) {
    if (BACKEND_CONFIG.USE_BACKEND_API) {
      try {
        const res = await fetch(`${BACKEND_CONFIG.BASE_URL}${BACKEND_CONFIG.ENDPOINTS.SETTINGS}`, {
          method: "PUT",
          headers: BACKEND_CONFIG.HEADERS,
          body: JSON.stringify(pengaturan)
        });
        if (res.ok) return { success: true, pengaturan: { ...PENGATURAN_SISTEM_DEFAULT, ...(await res.json()) } };
        return { success: false, message: "Server menolak perubahan pengaturan." };
      } catch (err) {
        console.warn("[ApiService] Gagal menyimpan ke backend, menyimpan di lokal.", err);
      }
    }
    return SettingsDatabaseLocal.save(pengaturan);
  }
};

const PENGATURAN_SISTEM_DEFAULT = {
  slaJam: 24,
  sembunyikanNIK: true,
  notifEmailDarurat: true,
  cakupanWilayah: "Kota Samarinda, Kalimantan Timur"
};

const SettingsDatabaseLocal = {
  KEY: "ecoreport_pengaturan_sistem",
  get() {
    try {
      const tersimpan = localStorage.getItem(this.KEY);
      if (tersimpan) return { ...PENGATURAN_SISTEM_DEFAULT, ...JSON.parse(tersimpan) };
    } catch (e) {
      console.error(e);
    }
    return { ...PENGATURAN_SISTEM_DEFAULT };
  },
  save(pengaturan) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(pengaturan));
      return { success: true, pengaturan };
    } catch (e) {
      return { success: false, message: "Gagal menyimpan pengaturan." };
    }
  }
};

const AuthDatabaseLocal = {
  getUsers() {
    try {
      const stored = localStorage.getItem("ecoreport_users_db");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    const defaultUsers = [
      {
        id: "USR-01",
        nama: "Iqbal Nurriz",
        nik: "6472011504890002",
        telepon: "081255443322",
        email: "user@ecoreport.com",
        password: "password123",
        role: "pelapor"
      },
      {
        id: "ADM-01",
        nama: "Ahmad Fajar Novia",
        nip: "198503122010011005",
        telepon: "081155998811",
        email: "admin@ecoreport.com",
        password: "admin123",
        role: "admin",
        jabatan: "Verifikator Madya DLH Samarinda"
      }
    ];
    localStorage.setItem("ecoreport_users_db", JSON.stringify(defaultUsers));
    return defaultUsers;
  },

  saveUsers(users) {
    localStorage.setItem("ecoreport_users_db", JSON.stringify(users));
  },

  login({ identifier, password, role }) {
    const users = this.getUsers();
    const user = users.find(u => 
      (u.email.toLowerCase() === identifier.toLowerCase() || u.nik === identifier) && 
      u.password === password &&
      (role ? u.role === role : true)
    );
    if (user) {
      return { success: true, user };
    }
    return { success: false, message: "Kredensial atau kata sandi tidak cocok." };
  },

  register(dataPelapor) {
    const users = this.getUsers();
    const adaNIK = users.find(u => u.nik === dataPelapor.nik);
    if (adaNIK) {
      return { success: false, message: "NIK ini sudah terdaftar sebagai akun pelapor." };
    }
    const adaEmail = users.find(u => u.email.toLowerCase() === dataPelapor.email.toLowerCase());
    if (adaEmail) {
      return { success: false, message: "Email ini sudah terdaftar. Silakan gunakan email lain atau masuk." };
    }

    const newUser = {
      id: `USR-${String(users.length + 1).padStart(2, "0")}`,
      nama: dataPelapor.nama,
      nik: dataPelapor.nik,
      telepon: dataPelapor.telepon,
      email: dataPelapor.email,
      password: dataPelapor.password,
      role: "pelapor",
      terdaftarPada: new Date().toISOString()
    };
    users.push(newUser);
    this.saveUsers(users);
    return { success: true, user: newUser };
  }
};

const ReportDatabaseLocal = {
  create(payload) {
    const data = ambilDataLaporan();
    data.unshift(payload);
    simpanDataLaporan(data);
    return { success: true, report: payload };
  }
};

/* ============================================================================
 * STATE & DATA MANAGEMENT
 * ============================================================================
 */
let daftarLaporan = [];
let currentUser = null;
let sesiPengguna = "user"; 
let roleLoginDipilih = "pelapor"; 
let titikFormPilihan = { lat: -0.502106, lng: 117.153709, kecamatan: "Samarinda Ulu", alamat: "Jl. Dr. Soetomo, Samarinda Ulu" };
let fotoTerpilihBase64 = null;
let currentVerifId = null;
let currentUbahStatusId = null;
let filterPetaPublikStatus = "Semua";
let filterPetaAdminStatus = "Semua";
let filterWilayahAdmin = "Semua";

let googleMapsLoaded = false;
let petaPublikGoogleMap = null;
let googleMapMarkers = [];
let googleMapPicker = null;
let googleMapPickerMarker = null;
let petaAdminGoogleMap = null;
let petaAdminMarkers = [];
let petaAdminInfoWindow = null;
let antrianPetaMini = [];

function inisialisasiGoogleMapsSDK() {
  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY.trim() === "" || GOOGLE_MAPS_API_KEY.includes("YOUR_")) {
    console.info("[EcoReport] Google Maps API Key belum diisi. Area peta menampilkan kontainer siap-integrasi.");
    return;
  }

  if (window.google && window.google.maps) {
    googleMapsLoaded = true;
    onGoogleMapsReady();
    return;
  }

  window.inisialisasiGoogleMapsCallback = function() {
    googleMapsLoaded = true;
    console.info("[EcoReport] Google Maps API resmi berhasil dimuat");
    onGoogleMapsReady();
  };

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&libraries=places&callback=inisialisasiGoogleMapsCallback`;
  script.async = true;
  script.defer = true;
  script.onerror = function() {
    console.warn("[EcoReport] Gagal memuat Google Maps API. Silakan periksa koneksi internet atau validitas API Key Anda.");
  };
  document.head.appendChild(script);
}

function muatPetaHero() {
  const mapContainer = document.getElementById("heroMap");

  if (!mapContainer || !window.google || !window.google.maps) {
    return;
  }

  if (mapContainer.dataset.mapLoaded === "true") {
    return;
  }

  const map = new google.maps.Map(mapContainer, {
    center: {
      lat: -0.502106,
      lng: 117.153709
    },
    zoom: 13,

    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    clickableIcons: false,
    gestureHandling: "greedy"
  });

  new google.maps.Marker({
    position: {
      lat: -0.4948,
      lng: 117.1436
    },
    map: map,
    title: "Sampah Liar - Bantaran Karang Mumus"
  });

  mapContainer.dataset.mapLoaded = "true";
}

function onGoogleMapsReady() {
  googleMapsLoaded = true;

  muatPetaHero();

  const currentActiveSec = document.querySelector(".view-section.active");

  if (currentActiveSec && currentActiveSec.id === "view-peta") {
    muatPetaPublik();
  } else if (currentActiveSec && currentActiveSec.id === "view-buat-laporan") {
    renderPetaPemilihForm();
  } else if (currentActiveSec && currentActiveSec.id === "view-admin-portal") {
    const subPetaAdmin = document.getElementById("admin-sub-peta");
    if (subPetaAdmin && subPetaAdmin.style.display === "block") muatPetaAdmin();
  }

  antrianPetaMini.splice(0).forEach(item => {
    buatPetaMini(item.container, item.lat, item.lng, item.warna);
  });
}

function ambilDataLaporan() {
  try {
    const dbVer = localStorage.getItem("ecoreport_clean_v2");
    if (!dbVer) {
      localStorage.removeItem("ecoreport_data_laporan");
      localStorage.setItem("ecoreport_clean_v2", "true");
      daftarLaporan = [];
      simpanDataLaporan(daftarLaporan);
      return daftarLaporan;
    }

    const tersimpan = localStorage.getItem("ecoreport_data_laporan");
    if (tersimpan) {
      daftarLaporan = JSON.parse(tersimpan);
    } else {
      daftarLaporan = [];
      simpanDataLaporan(daftarLaporan);
    }
  } catch (err) {
    console.error("Gagal membaca localStorage:", err);
    daftarLaporan = [];
  }
  return daftarLaporan;
}

function simpanDataLaporan(data) {
  try {
    localStorage.setItem("ecoreport_data_laporan", JSON.stringify(data));
  } catch (err) {
    console.error("Gagal menyimpan ke localStorage:", err);
  }
}

function ambilSesiPengguna() {
  try {
    const userJson = localStorage.getItem("ecoreport_current_user");
    if (userJson) {
      currentUser = JSON.parse(userJson);
      sesiPengguna = currentUser.role === "admin" ? "admin" : "user";
    } else {
      currentUser = null;
      sesiPengguna = "user";
    }
  } catch (e) {
    currentUser = null;
    sesiPengguna = "user";
  }
  perbaruiTampilanSesi();
}

function perbaruiTampilanSesi() {
  const guestBlock = document.getElementById("navGuestBlock");
  const userBlock = document.getElementById("navUserBlock");
  const avatarEl = document.getElementById("navAvatar");
  const nameEl = document.getElementById("navUserName");
  const roleEl = document.getElementById("navRoleBadge");
  const mobileAuthLink = document.getElementById("mobileAuthLink");

  if (currentUser) {
    if (guestBlock) guestBlock.style.display = "none";
    if (userBlock) userBlock.style.display = "flex";

    const inisial = currentUser.nama ? currentUser.nama.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() : "U";
    if (avatarEl) {
      avatarEl.textContent = inisial;
      avatarEl.style.background = currentUser.role === "admin" ? "#0F172A" : "#2563EB";
      avatarEl.style.color = "#FFFFFF";
    }
    if (nameEl) nameEl.textContent = currentUser.nama;
    if (roleEl) {
      roleEl.textContent = currentUser.role === "admin" ? "Petugas DLH" : "Pelapor Terdaftar";
      roleEl.style.color = currentUser.role === "admin" ? "#10B981" : "#2563EB";
    }
    if (mobileAuthLink) {
      mobileAuthLink.textContent = `👤 ${currentUser.nama} (Keluar)`;
      mobileAuthLink.onclick = () => { prosesLogout(); tutupMobileDrawer(); };
    }
  } else {
    if (guestBlock) guestBlock.style.display = "flex";
    if (userBlock) userBlock.style.display = "none";
    if (mobileAuthLink) {
      mobileAuthLink.textContent = "🔐 Masuk / Daftar Akun";
      mobileAuthLink.onclick = () => { bukaHalaman("login"); tutupMobileDrawer(); };
    }
  }

  const adminOfficerAvatar = document.getElementById("adminOfficerAvatar");
  if (adminOfficerAvatar && currentUser && currentUser.role === "admin") {
    adminOfficerAvatar.textContent = "HW";
  }
}

function gantiTabAuth(tab) {
  const tabLogin = document.getElementById("tabAuthLogin");
  const tabReg = document.getElementById("tabAuthRegister");
  const paneLogin = document.getElementById("paneAuthLogin");
  const paneReg = document.getElementById("paneAuthRegister");

  if (tab === "register") {
    if (tabLogin) tabLogin.classList.remove("active");
    if (tabReg) tabReg.classList.add("active");
    if (paneLogin) paneLogin.style.display = "none";
    if (paneReg) paneReg.style.display = "block";
  } else {
    if (tabLogin) tabLogin.classList.add("active");
    if (tabReg) tabReg.classList.remove("active");
    if (paneLogin) paneLogin.style.display = "block";
    if (paneReg) paneReg.style.display = "none";
  }
}

function pilihRoleLogin(role) {
  roleLoginDipilih = role;
  const pillPelapor = document.getElementById("pillRolePelapor");
  const pillPetugas = document.getElementById("pillRolePetugas");
  const infoPelapor = document.getElementById("infoLoginPelapor");
  const infoPetugas = document.getElementById("infoLoginPetugas");
  const labelEmail = document.getElementById("labelLoginEmail");
  const inputEmail = document.getElementById("inputLoginEmail");
  const inputPass = document.getElementById("inputLoginPassword");
  const btnText = document.getElementById("btnTextLogin");

  if (role === "petugas") {
    if (pillPelapor) pillPelapor.classList.remove("active");
    if (pillPetugas) pillPetugas.classList.add("active");
    if (infoPelapor) infoPelapor.style.display = "none";
    if (infoPetugas) infoPetugas.style.display = "block";
    if (labelEmail) labelEmail.textContent = "Email Dinas Petugas";
    if (inputEmail) inputEmail.value = "admin@ecoreport.com";
    if (inputPass) inputPass.value = "admin123";
    if (btnText) btnText.textContent = "Masuk Sebagai Petugas";
  } else {
    if (pillPelapor) pillPelapor.classList.add("active");
    if (pillPetugas) pillPetugas.classList.remove("active");
    if (infoPelapor) infoPelapor.style.display = "block";
    if (infoPetugas) infoPetugas.style.display = "none";
    if (labelEmail) labelEmail.textContent = "Email atau NIK Pelapor";
    if (inputEmail) inputEmail.value = "user@ecoreport.com";
    if (inputPass) inputPass.value = "password123";
    if (btnText) btnText.textContent = "Masuk Sebagai Pelapor";
  }
}

async function eksekusiLogin() {
  const identifier = document.getElementById("inputLoginEmail")?.value.trim();
  const password = document.getElementById("inputLoginPassword")?.value;

  if (!identifier || !password) {
    tampilkanToast("Harap isi email/NIK dan kata sandi.");
    return;
  }

  const hasil = await ApiService.login({
    identifier,
    password,
    role: roleLoginDipilih === "petugas" ? "admin" : "pelapor"
  });

  if (hasil.success) {
    currentUser = hasil.user;
    sesiPengguna = currentUser.role === "admin" ? "admin" : "user";
    localStorage.setItem("ecoreport_current_user", JSON.stringify(currentUser));
    localStorage.setItem("ecoreport_sesi_user", sesiPengguna);
    perbaruiTampilanSesi();

    if (currentUser.role === "admin") {
      tampilkanToast(`Selamat datang, Petugas DLH: ${currentUser.nama}`);
      bukaAdminSubHalaman("dashboard");
    } else {
      tampilkanToast(`Berhasil masuk sebagai Pelapor: ${currentUser.nama}`);
      bukaHalaman("beranda");
    }
  } else {
    tampilkanToast(`Gagal masuk: ${hasil.message || "Kredensial tidak valid"}`);
  }
}

async function eksekusiRegistrasiPelapor() {
  const nama = document.getElementById("regNamaLengkap")?.value.trim();
  const nik = document.getElementById("regNIK")?.value.trim();
  const telepon = document.getElementById("regTelepon")?.value.trim();
  const email = document.getElementById("regEmail")?.value.trim();
  const password = document.getElementById("regPassword")?.value;
  const konfirm = document.getElementById("regPasswordKonfirm")?.value;

  if (!nama || !nik || !telepon || !email || !password) {
    tampilkanToast("Semua kolom formulir pendaftaran wajib diisi!");
    return;
  }

  if (nik.length !== 16 || !/^\d+$/.test(nik)) {
    tampilkanToast("NIK harus tepat 16 digit angka sesuai KTP!");
    return;
  }

  if (password.length < 6) {
    tampilkanToast("Kata sandi minimal 6 karakter!");
    return;
  }

  if (password !== konfirm) {
    tampilkanToast("Konfirmasi kata sandi tidak cocok!");
    return;
  }

  const hasil = await ApiService.registerPelapor({
    nama,
    nik,
    telepon,
    email,
    password
  });

  if (hasil.success) {
    currentUser = hasil.user;
    sesiPengguna = "user";
    localStorage.setItem("ecoreport_current_user", JSON.stringify(currentUser));
    localStorage.setItem("ecoreport_sesi_user", "user");
    perbaruiTampilanSesi();

    tampilkanToast(`Pendaftaran akun pelapor berhasil! Selamat datang, ${nama}.`);
    document.getElementById("formRegisterPelapor")?.reset();
    bukaHalaman("beranda");
  } else {
    tampilkanToast(`Gagal mendaftar: ${hasil.message}`);
  }
}

function prosesLogout() {
  currentUser = null;
  sesiPengguna = "user";
  localStorage.removeItem("ecoreport_current_user");
  localStorage.removeItem("ecoreport_sesi_user");
  perbaruiTampilanSesi();
  tampilkanToast("Anda telah keluar dari akun.");
  bukaHalaman("beranda");
}

function bukaHalamanBerdasarkanSesi() {
  if (currentUser && currentUser.role === "admin") {
    bukaAdminSubHalaman("dashboard");
  } else if (currentUser && currentUser.role === "pelapor") {
    bukaHalaman("laporan-saya");
  } else {
    bukaHalaman("login");
  }
}

function tampilkanModalWajibLogin() {
  const modal = document.getElementById("modalWajibLogin");
  if (modal) modal.classList.add("active");
}

function tutupModalWajibLogin() {
  const modal = document.getElementById("modalWajibLogin");
  if (modal) modal.classList.remove("active");
}

function gantiPeranPengguna() {
  if (sesiPengguna === "user") {
    const users = AuthDatabaseLocal.getUsers();
    const admin = users.find(u => u.role === "admin");
    if (admin) {
      currentUser = admin;
      sesiPengguna = "admin";
      localStorage.setItem("ecoreport_current_user", JSON.stringify(currentUser));
      localStorage.setItem("ecoreport_sesi_user", "admin");
      perbaruiTampilanSesi();
      tampilkanToast(`Beralih ke Portal Petugas: ${admin.nama}`);
      bukaAdminSubHalaman("dashboard");
    }
  } else {
    const users = AuthDatabaseLocal.getUsers();
    const user = users.find(u => u.role === "pelapor");
    if (user) {
      currentUser = user;
      sesiPengguna = "user";
      localStorage.setItem("ecoreport_current_user", JSON.stringify(currentUser));
      localStorage.setItem("ecoreport_sesi_user", "user");
      perbaruiTampilanSesi();
      tampilkanToast(`Beralih ke Akun Pelapor: ${user.nama}`);
      bukaHalaman("beranda");
    }
  }
}

/* ============================================================================
 * NAVIGASI HALAMAN
 * ============================================================================
 */
function bukaHalaman(namaHalaman, idLaporanDetail = null) {
  if (namaHalaman === "buat-laporan") {
    if (!currentUser || currentUser.role !== "pelapor") {
      tampilkanModalWajibLogin();
      return;
    }
  }

  const sections = document.querySelectorAll(".view-section");
  sections.forEach(sec => sec.classList.remove("active"));

  const targetSec = document.getElementById(`view-${namaHalaman}`);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const userNavbar = document.getElementById("userNavbar");
  const mainFooter = document.getElementById("mainFooter");

  if (namaHalaman === "login" || namaHalaman === "admin-login" || (namaHalaman.startsWith("admin-") && namaHalaman !== "admin-login")) {
    if (mainFooter) mainFooter.style.display = "none";
  } else {
    if (mainFooter) mainFooter.style.display = "block";
  }

  if (namaHalaman.startsWith("admin-") && namaHalaman !== "admin-login") {
    if (userNavbar) userNavbar.style.display = "none";
  } else {
    if (userNavbar) userNavbar.style.display = "flex";
  }

  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("data-nav") === namaHalaman) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (namaHalaman === "beranda") {
    renderStatistikBeranda();
    renderLaporanTerbaruBeranda();
  } else if (namaHalaman === "peta") {
    muatPetaPublik();
  } else if (namaHalaman === "buat-laporan") {
    siapkanFormBuatLaporan();
  } else if (namaHalaman === "laporan-saya") {
    renderLaporanSaya();
  } else if (namaHalaman === "detail-laporan" && idLaporanDetail) {
    tampilkanDetailLaporan(idLaporanDetail);
  }
}

function bukaAdminSubHalaman(subTab) {
  if (subTab === "statistik") subTab = "dashboard";

  bukaHalaman("admin-portal");


  const adminNavs = document.querySelectorAll(".admin-nav-item");
  adminNavs.forEach(nav => {
    if (nav.getAttribute("data-admin-tab") === subTab) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });

  const subviews = document.querySelectorAll(".admin-subview");
  subviews.forEach(sub => sub.style.display = "none");

  const targetSub = document.getElementById(`admin-sub-${subTab}`);
  if (targetSub) targetSub.style.display = "block";

  const topbarTitle = document.getElementById("adminTopbarTitle");
  const titles = {
    "dashboard": "Dashboard Overview",
    "verifikasi": "Antrean Verifikasi Laporan",
    "verifikasi-detail": "Detail Verifikasi Laporan",
    "laporan": "Kelola Semua Laporan",
    "peta": "Sistem Pemetaan Wilayah Samarinda",
    "pengaturan": "Pengguna & Pengaturan Sistem"
  };
  if (topbarTitle && titles[subTab]) topbarTitle.textContent = titles[subTab];

  if (subTab === "dashboard") {
    renderDashboardAdmin();
  } else if (subTab === "verifikasi") {
    renderAntreanVerifikasi();
  } else if (subTab === "laporan") {
    renderSemuaLaporanAdmin();
  } else if (subTab === "peta") {
    muatPetaAdmin();
  } else if (subTab === "pengaturan") {
    muatDataPengguna();
  }
}

/* ============================================================================
 *  PETA INTERAKTIF KOTA SAMARINDA
 * ============================================================================
 */

function cekLokasiSamarinda(lat, lng) {
  const { minLat, maxLat, minLng, maxLng } = BATAS_WILAYAH_SAMARINDA;
  return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
}


function konversiGeografisKePixel(lat, lng) {
  const { minLat, maxLat, minLng, maxLng } = BATAS_WILAYAH_SAMARINDA;
  const x = ((lng - minLng) / (maxLng - minLng)) * 100;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
  return {
    x: Math.max(5, Math.min(95, x)),
    y: Math.max(5, Math.min(95, y))
  };
}

function konversiPixelKeGeografis(percentX, percentY) {
  const { minLat, maxLat, minLng, maxLng } = BATAS_WILAYAH_SAMARINDA;
  const lng = minLng + (percentX / 100) * (maxLng - minLng);
  const lat = maxLat - (percentY / 100) * (maxLat - minLat);
  return {
    lat: Number(lat.toFixed(6)),
    lng: Number(lng.toFixed(6))
  };
}

function tebakKecamatanSamarinda(lat, lng) {
  if (lat > -0.48 && lng < 117.15) return "Samarinda Ulu";
  if (lat > -0.48 && lng >= 117.15) return "Samarinda Utara";
  if (lat <= -0.48 && lat > -0.51 && lng < 117.14) return "Sungai Kunjang";
  if (lat <= -0.48 && lat > -0.51 && lng >= 117.14 && lng < 117.16) return "Samarinda Kota";
  if (lat <= -0.48 && lat > -0.51 && lng >= 117.16) return "Samarinda Ilir";
  if (lat <= -0.51 && lat > -0.54 && lng < 117.14) return "Samarinda Seberang";
  if (lat <= -0.51 && lat > -0.54 && lng >= 117.14) return "Sambutan";
  if (lat <= -0.54 && lng < 117.14) return "Loa Janan Ilir";
  return "Palaran";
}

function muatPetaPublik() {
  const container = document.getElementById("petaPublikGisView");
  if (!container) return;

  isiDropdownKategori("petaKategoriFilterSelect");
  renderPetaKategoriDropdown();

  const data = ambilDataLaporan();
  const laporanPublik = data.filter(l => l.status !== "Menunggu Verifikasi" && l.status !== "Ditolak");

  const katSelect = document.getElementById("petaKategoriFilterSelect");
  const katFilter = katSelect ? katSelect.value : "Semua";

  const kecSelect = document.getElementById("petaKecamatanFilterSelect");
  const kecFilter = kecSelect ? kecSelect.value : "Semua";

  const searchKey = (document.getElementById("petaSearchInput")?.value || "").toLowerCase();

  const laporanTerfilter = laporanPublik.filter(item => {
    const cocokStatus = (filterPetaPublikStatus === "Semua") || (item.status === filterPetaPublikStatus);
    const cocokKat = (katFilter === "Semua") || (item.kategori === katFilter);
    const cocokKec = (kecFilter === "Semua") || (item.kecamatan === kecFilter);
    const cocokSearch = !searchKey ||
      item.id.toLowerCase().includes(searchKey) ||
      item.judul.toLowerCase().includes(searchKey) ||
      item.kecamatan.toLowerCase().includes(searchKey) ||
      item.alamat.toLowerCase().includes(searchKey);
    return cocokStatus && cocokKat && cocokKec && cocokSearch;
  });

  // ==================== GOOGLE MAPS API ====================
  if (googleMapsLoaded && window.google && window.google.maps) {
    if (!petaPublikGoogleMap) {
      container.innerHTML = "";
      petaPublikGoogleMap = new google.maps.Map(container, {
        center: { lat: KOORDINAT_PUSAT_SAMARINDA.lat, lng: KOORDINAT_PUSAT_SAMARINDA.lng },
        zoom: 13,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true
      });
    }

    googleMapMarkers.forEach(m => m.setMap(null));
    googleMapMarkers = [];

    laporanTerfilter.forEach(lap => {
      const katObj = DAFTAR_KATEGORI.find(k => k.nama === lap.kategori) || { warna: "#2563EB" };
      const marker = new google.maps.Marker({
        position: { lat: Number(lap.latitude), lng: Number(lap.longitude) },
        map: petaPublikGoogleMap,
        title: `${lap.id} - ${lap.judul}`,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 9,
          fillColor: katObj.warna,
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2.5
        }
      });

      marker.addListener("click", () => {
        bukaPopupLaporanPeta(lap.id);
      });

      googleMapMarkers.push(marker);
    });
  } else {
    container.innerHTML = `
      <div class="google-map-placeholder-clean" id="googleMapCleanPlaceholder">
        <h3 class="map-ph-title">Section Google Maps API (Kota Samarinda)</h3>
        <p class="map-ph-desc">
          Section peta ini telah disiapkan khusus untuk integrasi dengan <strong>Google Maps JavaScript API</strong>. Kontainer ini akan langsung memuat peta satelit/jalan resmi secara otomatis saat API Key disetel.
        </p>
        <div class="map-ph-info-box">
          <div class="map-ph-mount">ID Wadah Peta: <code>#petaPublikGisView</code></div>
          <div class="map-ph-guide">
            <strong>Panduan Integrasi:</strong> Masukkan Google Maps API Key Anda ke dalam variabel <code>GOOGLE_MAPS_API_KEY</code> di file <code>script.js</code> untuk mengaktifkan pemetaan interaktif.
          </div>
        </div>
      </div>
    `;
  }

  const counterBadge = document.getElementById("publicReportCounterBadge");
  if (counterBadge) {
    counterBadge.textContent = `${laporanTerfilter.length} Laporan Terverifikasi`;
  }

  // ==================== DAFTAR STATUS LAPORAN SAMARINDA ====================
  const listContainer = document.getElementById("petaListLaporan");
  if (listContainer) {
    if (laporanTerfilter.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1 / -1; font-size:0.92rem; color:var(--color-neutral-muted); text-align:center; padding:50px 20px; background:#FFFFFF; border:1.5px dashed var(--color-border); border-radius:var(--radius-lg);">
          <strong style="color:var(--color-neutral-dark); font-size:1.15rem; display:block; margin-bottom:6px;">Belum Ada Laporan Terverifikasi Sesuai Kriteria</strong>
          <p style="margin:0; font-size:0.86rem; max-width:460px; margin:0 auto; line-height:1.5;">Silakan ubah filter kecamatan atau status, atau buat laporan pengaduan lingkungan hidup baru untuk Kota Samarinda.</p>
        </div>
      `;
    } else {
      listContainer.innerHTML = laporanTerfilter.map(lap => {
        const katObj = DAFTAR_KATEGORI.find(k => k.nama === lap.kategori) || { warna: "#2563EB" };
        return `
          <div class="public-report-card">
            <div class="public-card-head">
              <span class="public-card-id">#${lap.id}</span>
              <span class="status-badge ${dapatkanKelasStatus(lap.status)}">${lap.status}</span>
            </div>
            <div class="public-card-body">
              <div class="public-card-cat-badge">
                <span style="display:inline-block; width:9px; height:9px; border-radius:50%; background:${katObj.warna};"></span>
                <span>${lap.kategori}</span>
              </div>
              <h3 class="public-card-title">${lap.judul}</h3>
              <p class="public-card-desc">${lap.deskripsi || "Tidak ada deskripsi rinci."}</p>
              <div class="public-card-meta">
                <div class="public-card-meta-item">
                  <strong>${lap.kecamatan}, Kota Samarinda</strong>
                </div>
                <div class="public-card-meta-item">
                  <span>${lap.dinasTerkait || "Dinas Lingkungan Hidup Kota Samarinda"}</span>
                </div>
                <div class="public-card-meta-item" style="font-size:0.75rem; color:var(--color-neutral-light);">
                  <span>${lap.tanggal || "Terbaru"} ${lap.waktu ? "• " + lap.waktu : ""}</span>
                </div>
              </div>
            </div>
            <div class="public-card-footer">
              <button class="btn btn-outline-primary btn-sm" onclick="bukaHalaman('detail-laporan', '${lap.id}')" style="width:100%; font-weight:600;">
                Lihat Detail Penanganan →
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

function aturFilterPetaStatus(statusNama) {
  filterPetaPublikStatus = statusNama;
  const chips = document.querySelectorAll("#petaStatusFilterGroup .filter-chip");
  chips.forEach(c => {
    if (c.getAttribute("data-status") === statusNama) c.classList.add("active");
    else c.classList.remove("active");
  });
  muatPetaPublik();
}

function filterPetaPublik() {
  muatPetaPublik();
}

function bukaPopupLaporanPeta(idLaporan) {
  const data = ambilDataLaporan();
  const lap = data.find(l => l.id === idLaporan);
  if (!lap) return;

  const popup = document.getElementById("petaFloatingPopup");
  if (!popup) return;

  document.getElementById("popupReportId").textContent = `#${lap.id}`;
  
  const statusEl = document.getElementById("popupReportStatus");
  statusEl.textContent = lap.status;
  statusEl.className = `status-badge ${dapatkanKelasStatus(lap.status)}`;

  document.getElementById("popupReportTitle").textContent = lap.judul;
  document.getElementById("popupReportDesc").textContent = lap.deskripsi;
  document.getElementById("popupReportLocation").textContent = `${lap.kecamatan}, Samarinda (${lap.latitude}, ${lap.longitude})`;
  document.getElementById("popupReportAgency").textContent = lap.dinasTerkait || "Dinas Terkait Pemkot Samarinda";

  const btnDetail = document.getElementById("popupBtnDetail");
  btnDetail.onclick = () => bukaHalaman("detail-laporan", lap.id);

  popup.style.display = "block";
}

function tutupPopupPeta() {
  const popup = document.getElementById("petaFloatingPopup");
  if (popup) popup.style.display = "none";
}

/* ===========================================================================
 * PEMILIH TITIK LOKASI FORM & VALIDASI SAMARINDA
 * ============================================================================
 */
function siapkanFormBuatLaporan() {

  const inputNama = document.getElementById("pelaporNama");
  const inputNIK = document.getElementById("pelaporNIK");
  const inputTelp = document.getElementById("pelaporTelepon");
  const inputEmail = document.getElementById("pelaporEmail");

  if (currentUser && currentUser.role === "pelapor") {
    if (inputNama) inputNama.value = currentUser.nama || "";
    if (inputNIK) inputNIK.value = currentUser.nik || "";
    if (inputTelp) inputTelp.value = currentUser.telepon || "";
    if (inputEmail) inputEmail.value = currentUser.email || "";

    [inputNama, inputNIK, inputTelp, inputEmail].forEach(el => {
      if (!el) return;
      el.readOnly = true;
      el.classList.add("field-terkunci");
    });
  }

  isiDropdownKategori("laporanKategori");

  renderPetaPemilihForm();
}

function renderPetaPemilihForm() {
  const canvas = document.getElementById("mapPickerCanvas");
  if (!canvas) return;

  // Jika Google Maps API aktif
  if (googleMapsLoaded && window.google && window.google.maps) {
    if (!googleMapPicker) {
      canvas.innerHTML = "";
      googleMapPicker = new google.maps.Map(canvas, {
        center: { lat: titikFormPilihan.lat, lng: titikFormPilihan.lng },
        zoom: 14,
        streetViewControl: false,
        mapTypeControl: false
      });

      googleMapPickerMarker = new google.maps.Marker({
        position: { lat: titikFormPilihan.lat, lng: titikFormPilihan.lng },
        map: googleMapPicker,
        draggable: true,
        title: "Geser marker ke lokasi kejadian"
      });

      googleMapPicker.addListener("click", (e) => {
        const lat = Number(e.latLng.lat().toFixed(6));
        const lng = Number(e.latLng.lng().toFixed(6));
        pilihTitikKoordinatForm(lat, lng);
        googleMapPickerMarker.setPosition(e.latLng);
      });

      googleMapPickerMarker.addListener("dragend", (e) => {
        const lat = Number(e.latLng.lat().toFixed(6));
        const lng = Number(e.latLng.lng().toFixed(6));
        pilihTitikKoordinatForm(lat, lng);
      });
    } else {
      googleMapPicker.setCenter({ lat: titikFormPilihan.lat, lng: titikFormPilihan.lng });
      if (googleMapPickerMarker) {
        googleMapPickerMarker.setPosition({ lat: titikFormPilihan.lat, lng: titikFormPilihan.lng });
      }
    }
    perbaruiInputKoordinatForm();
    return;
  }

  const pos = konversiGeografisKePixel(titikFormPilihan.lat, titikFormPilihan.lng);

  canvas.innerHTML = `
    <!-- Titik Pilihan Pin -->
    <div id="pickerPinMarker" style="position:absolute; left:${pos.x}%; top:${pos.y}%; transform:translate(-50%, -100%); z-index:20; cursor:pointer;">
      <div style="background:#E53935; color:#fff; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-size:14px; box-shadow:0 3px 8px rgba(0,0,0,0.4); border:2px solid #fff;">
      </div>
    </div>
  `;

  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const percentX = (clickX / rect.width) * 100;
    const percentY = (clickY / rect.height) * 100;

    const coords = konversiPixelKeGeografis(percentX, percentY);
    pilihTitikKoordinatForm(coords.lat, coords.lng);
  };

  perbaruiInputKoordinatForm();
}

function pilihTitikKoordinatForm(lat, lng) {
  const alertWarning = document.getElementById("samarindaWarningAlert");
  const submitBtn = document.getElementById("btnSubmitLaporan");

  const validSamarinda = cekLokasiSamarinda(lat, lng);

  if (!validSamarinda) {
    if (alertWarning) alertWarning.classList.add("visible");
    if (submitBtn) submitBtn.disabled = true;
    tampilkanToast("Peringatan: Titik berada di luar wilayah Kota Samarinda!");
    return;
  }

  if (alertWarning) alertWarning.classList.remove("visible");
  if (submitBtn) submitBtn.disabled = false;

  titikFormPilihan.lat = lat;
  titikFormPilihan.lng = lng;
  titikFormPilihan.kecamatan = tebakKecamatanSamarinda(lat, lng);

  perbaruiInputKoordinatForm();
  renderPetaPemilihForm();
}

function perbaruiInputKoordinatForm() {
  const latInput = document.getElementById("laporanLatitude");
  const lngInput = document.getElementById("laporanLongitude");
  const kecSelect = document.getElementById("laporanKecamatan");
  const alamatInput = document.getElementById("laporanAlamat");

  if (latInput) latInput.value = titikFormPilihan.lat;
  if (lngInput) lngInput.value = titikFormPilihan.lng;
  if (kecSelect) kecSelect.value = titikFormPilihan.kecamatan;
  if (alamatInput && !alamatInput.value) {
    alamatInput.value = `Kawasan ${titikFormPilihan.kecamatan}, Kota Samarinda`;
  }
}

function resetTitikPusatSamarinda() {
  pilihTitikKoordinatForm(KOORDINAT_PUSAT_SAMARINDA.lat, KOORDINAT_PUSAT_SAMARINDA.lng);
}

function tanganiUnggahFoto(input) {
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];
  const maxBytes = 10 * 1024 * 1024; 

  if (file.size > maxBytes) {
    alert("Ukuran foto melebihi batas maksimal 10 MB!");
    input.value = "";
    return;
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/heic", "image/jpg"];
  if (!allowedTypes.includes(file.type) && !file.name.toLowerCase().endsWith(".heic")) {
    alert("Format foto harus JPG, PNG, atau HEIC!");
    input.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    fotoTerpilihBase64 = e.target.result;
    const previewBox = document.getElementById("dropzonePreview");
    const previewImg = document.getElementById("previewImgElement");
    const nameLabel = document.getElementById("previewFileName");
    const sizeLabel = document.getElementById("previewFileSize");

    if (previewBox) previewBox.style.display = "flex";
    if (previewImg) previewImg.src = fotoTerpilihBase64;
    if (nameLabel) nameLabel.textContent = file.name;
    if (sizeLabel) sizeLabel.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB • Berkas Siap`;
  };
  reader.readAsDataURL(file);
}

function kirimLaporanBaru() {

  const akun = currentUser || {};
  const nama = akun.nama || document.getElementById("pelaporNama")?.value.trim();
  const nik = akun.nik || document.getElementById("pelaporNIK")?.value.trim();
  const telepon = akun.telepon || document.getElementById("pelaporTelepon")?.value.trim();
  const email = akun.email || document.getElementById("pelaporEmail")?.value.trim();
  const judul = document.getElementById("laporanJudul")?.value.trim();
  const kategori = document.getElementById("laporanKategori")?.value;
  const deskripsi = document.getElementById("laporanDeskripsi")?.value.trim();
  const kecamatan = document.getElementById("laporanKecamatan")?.value;
  const alamat = document.getElementById("laporanAlamat")?.value.trim();
  const lat = parseFloat(document.getElementById("laporanLatitude")?.value);
  const lng = parseFloat(document.getElementById("laporanLongitude")?.value);


  if (!cekLokasiSamarinda(lat, lng)) {
    alert("Maaf, EcoReport saat ini hanya melayani laporan di wilayah Kota Samarinda.");
    return;
  }

  const data = ambilDataLaporan();
  const nomorUrut = data.length + 1;
  const idBaru = `ECR-2026-${String(nomorUrut).padStart(4, "0")}`;

  const sekarang = new Date();
  const opsiTanggal = { day: "numeric", month: "short", year: "numeric" };
  const strTanggal = sekarang.toLocaleDateString("id-ID", opsiTanggal);
  const strWaktu = `${String(sekarang.getHours()).padStart(2, "0")}:${String(sekarang.getMinutes()).padStart(2, "0")} WITA`;

  const laporanBaru = {
    id: idBaru,
    userId: currentUser ? currentUser.id : "warga_umum",
    namaPelapor: nama || "Warga Samarinda",
    nikPelapor: nik || "6472010000000000",
    teleponPelapor: telepon || "-",
    emailPelapor: email || "-",
    kategori: kategori,
    judul: judul,
    deskripsi: deskripsi,
    alamat: alamat,
    kecamatan: kecamatan,
    latitude: lat,
    longitude: lng,
    status: "Menunggu Verifikasi",
    tanggal: strTanggal,
    waktu: strWaktu,
    foto: fotoTerpilihBase64 || null,
    dinasTerkait: "Dinas Lingkungan Hidup (DLH) Kota Samarinda",
    catatanPetugas: "",
    linimasa: [
      { status: "Laporan masuk", waktu: `${strTanggal} • ${strWaktu}`, ket: `${nama} mengirim laporan ini.` }
    ]
  };

  data.unshift(laporanBaru);
  simpanDataLaporan(data);

  document.getElementById("suksesNomorLaporan").textContent = idBaru;
  document.getElementById("suksesWaktuLaporan").textContent = `Hari ini, ${strWaktu}`;
  document.getElementById("suksesKategoriLaporan").textContent = kategori;
  document.getElementById("suksesLokasiLaporan").textContent = `${kecamatan}, Kota Samarinda`;

  document.getElementById("formPengaduan").reset();
  fotoTerpilihBase64 = null;
  const previewBox = document.getElementById("dropzonePreview");
  if (previewBox) previewBox.style.display = "none";

  tampilkanToast(`Laporan ${idBaru} berhasil diajukan!`);
  bukaHalaman("laporan-sukses");
}

/* ============================================================================
 * LAPORAN SAYA (
 * ============================================================================
 */

function laporanMilikPenggunaAktif(lap) {
  if (!currentUser) return false;
  if (lap.userId === currentUser.id) return true;
  return lap.userId === "user" &&
    (lap.nikPelapor === currentUser.nik || lap.namaPelapor === currentUser.nama);
}

function renderLaporanSaya() {
  const data = ambilDataLaporan();
  const userReports = data.filter(laporanMilikPenggunaAktif);

  const total = userReports.length;
  const selesai = userReports.filter(r => r.status === "Selesai").length;
  const diproses = userReports.filter(r => r.status === "Sedang Ditangani" || r.status === "Diteruskan" || r.status === "Terverifikasi").length;
  const menunggu = userReports.filter(r => r.status === "Menunggu Verifikasi").length;

  document.getElementById("myTotalCount").textContent = total;
  document.getElementById("mySelesaiCount").textContent = selesai;
  document.getElementById("myDiprosesCount").textContent = diproses;
  document.getElementById("myMenungguCount").textContent = menunggu;

  isiDropdownKategori("myReportKategoriFilter");

  filterLaporanSaya();
}

function filterLaporanSaya() {
  const data = ambilDataLaporan();
  const userReports = data.filter(laporanMilikPenggunaAktif);

  const searchKey = (document.getElementById("myReportSearchInput")?.value || "").toLowerCase();
  const katFilter = document.getElementById("myReportKategoriFilter")?.value || "Semua";
  const statFilter = document.getElementById("myReportStatusFilter")?.value || "Semua";

  const terfilter = userReports.filter(item => {
    const cocokKat = (katFilter === "Semua") || (item.kategori === katFilter);
    const cocokStat = (statFilter === "Semua") || (item.status === statFilter);
    const cocokSearch = !searchKey ||
      item.id.toLowerCase().includes(searchKey) ||
      item.judul.toLowerCase().includes(searchKey) ||
      item.deskripsi.toLowerCase().includes(searchKey) ||
      item.kecamatan.toLowerCase().includes(searchKey);
    return cocokKat && cocokStat && cocokSearch;
  });

  const tbody = document.getElementById("myReportsTableBody");
  if (!tbody) return;

  if (userReports.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:48px 16px; color:var(--color-neutral-muted);">
          <div style="font-size:1.8rem; margin-bottom:8px;"></div>
          <strong style="color:var(--color-neutral-dark); font-size:1rem;">Belum Ada Riwayat Laporan</strong>
          <p style="margin:6px 0 16px; font-size:0.84rem;">Data dummy telah dibersihkan. Anda belum pernah mengirimkan laporan pengaduan lingkungan hidup di Samarinda.</p>
          <button class="btn btn-primary btn-sm" onclick="bukaHalaman('buat-laporan')">Buat Laporan Sekarang</button>
        </td>
      </tr>
    `;
    return;
  }

  if (terfilter.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:32px; color:var(--color-neutral-muted);">Tidak ada laporan yang cocok dengan kata kunci atau filter pencarian.</td></tr>`;
    return;
  }

  tbody.innerHTML = terfilter.map(lap => `
    <tr>
      <td><span class="report-id" style="font-weight:700; color:var(--color-primary);">${lap.id}</span></td>
      <td>
        <span class="cat-dot cat-dot-${dapatkanKelasKategori(lap.kategori)}"></span>
        ${lap.kategori}
      </td>
      <td class="table-desc-cell" title="${lap.deskripsi}">${lap.deskripsi}</td>
      <td>${lap.kecamatan}, Samarinda</td>
      <td>${lap.tanggal}</td>
      <td><span class="status-badge ${dapatkanKelasStatus(lap.status)}">${lap.status}</span></td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="bukaHalaman('detail-laporan', '${lap.id}')">Detail</button>
      </td>
    </tr>
  `).join("");
}

/* ============================================================================
 * DETAIL LAPORAN &  PENANGANAN
 * ============================================================================
 */
function tampilkanDetailLaporan(idLaporan) {
  const data = ambilDataLaporan();
  const lap = data.find(l => l.id === idLaporan);
  if (!lap) return;

  document.getElementById("detailReportId").textContent = `#${lap.id}`;
  
  const statusEl = document.getElementById("detailReportStatus");
  statusEl.textContent = lap.status;
  statusEl.className = `status-badge ${dapatkanKelasStatus(lap.status)}`;

  document.getElementById("detailReportDate").textContent = `Dilaporkan: ${lap.tanggal} • ${lap.waktu}`;
  document.getElementById("detailReportTitle").textContent = lap.judul;
  document.getElementById("detailReportDesc").textContent = lap.deskripsi;
  document.getElementById("detailAddress").textContent = `${lap.alamat}, Kec. ${lap.kecamatan}, Samarinda`;
  document.getElementById("detailLatChip").textContent = `Lat: ${lap.latitude}`;
  document.getElementById("detailLngChip").textContent = `Lng: ${lap.longitude}`;

  const photoContainer = document.getElementById("detailPhotoContainer");
  if (photoContainer) {
    if (lap.foto && lap.foto.startsWith("data:image")) {
      photoContainer.innerHTML = `<img src="${lap.foto}" alt="Bukti ${lap.id}">`;
    } else {
      photoContainer.innerHTML = buatIlustrasiKategoriSVG(lap.kategori);
    }
  }

  buatPetaMini(document.getElementById("detailMiniMap"), lap.latitude, lap.longitude, warnaStatusPeta(lap.status));
  document.getElementById("detailOfficerNotes").textContent = lap.catatanPetugas || 
    `"Laporan ini sudah tercatat di DLH Samarinda. Tim verifikator terus memantau perkembangannya."`;
  document.getElementById("detailOfficerAuthor").textContent = `— ${lap.dinasTerkait || 'Tim Terpadu Pemkot Samarinda'}`;

  document.getElementById("detailReporterName").textContent = lap.namaPelapor;

  const timelineContainer = document.getElementById("detailTimelineList");
  if (timelineContainer) {
    timelineContainer.innerHTML = (lap.linimasa || []).map((step, idx) => `
      <div class="timeline-step active">
        <div class="timeline-dot"></div>
        <div class="timeline-step-title">${step.status}</div>
        <div class="timeline-step-time">${step.waktu}</div>
        <div class="timeline-step-desc">${step.ket}</div>
      </div>
    `).join("");
  }
}

function kembaliDariDetail() {
  if (sesiPengguna === "admin") {
    bukaAdminSubHalaman("laporan");
  } else {
    bukaHalaman("laporan-saya");
  }
}

function bagikanLaporan() {
  navigator.clipboard?.writeText(window.location.href);
  tampilkanToast("Link laporan sudah disalin");
}

/* ============================================================================
 * PORTAL ADMIN & VERIFIKASI
 * ============================================================================
 */
function renderDashboardAdmin() {
  const data = ambilDataLaporan();

  const total = data.length;
  const menunggu = data.filter(d => d.status === "Menunggu Verifikasi").length;
  const diverifikasi = data.filter(d => d.status === "Terverifikasi" || d.status === "Diteruskan").length;
  const ditangani = data.filter(d => d.status === "Sedang Ditangani").length;
  const selesai = data.filter(d => d.status === "Selesai").length;
  const ditolak = data.filter(d => d.status === "Ditolak").length;

  document.getElementById("kpiTotalLaporan").textContent = total;
  document.getElementById("kpiMenungguVerifikasi").textContent = menunggu;
  document.getElementById("kpiDiverifikasi").textContent = diverifikasi;
  document.getElementById("kpiSedangDitangani").textContent = ditangani;
  document.getElementById("kpiSelesai").textContent = selesai;
  document.getElementById("kpiDitolak").textContent = ditolak;

  const sbBadge = document.getElementById("adminSidebarBadgeCount");
  if (sbBadge) sbBadge.textContent = menunggu;

  const chartContainer = document.getElementById("adminMonthlyBarChart");
  if (chartContainer) {
    const dataBulan = [
      { bulan: "Jan", jml: 12 },
      { bulan: "Feb", jml: 18 },
      { bulan: "Mar", jml: 24 },
      { bulan: "Apr", jml: 17 },
      { bulan: "Mei", jml: 29 },
      { bulan: "Jun", jml: 35 },
      { bulan: "Jul", jml: 22 }
    ];
    const maxVal = Math.max(...dataBulan.map(d => d.jml));

    chartContainer.innerHTML = dataBulan.map(item => {
      const heightPercent = (item.jml / maxVal) * 100;
      return `
        <div class="bar-col">
          <span class="bar-val-label">${item.jml}</span>
          <div class="bar-fill" style="height:${heightPercent}%;"></div>
          <span class="bar-month-name">${item.bulan}</span>
        </div>
      `;
    }).join("");
  }

  const catListContainer = document.getElementById("adminCategoryDistributionList");
  if (catListContainer) {
    const counts = {};
    data.forEach(d => {
      counts[d.kategori] = (counts[d.kategori] || 0) + 1;
    });

    const sortedCats = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 5);
    catListContainer.innerHTML = sortedCats.map(catName => {
      const count = counts[catName];
      const percent = Math.round((count / total) * 100) || 0;
      return `
        <div class="cat-progress-item">
          <div class="cat-progress-head">
            <span>${catName}</span>
            <span style="color:var(--color-neutral-muted);">${count} lap (${percent}%)</span>
          </div>
          <div class="cat-progress-track">
            <div class="cat-progress-fill" style="width:${percent}%;"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  const actTable = document.getElementById("adminRecentActivityTableBody");
  if (actTable) {
    const recents = data.slice(0, 5);
    actTable.innerHTML = recents.map(lap => `
      <tr>
        <td><span class="report-id" style="font-weight:700;">#${lap.id}</span></td>
        <td>${lap.kategori}</td>
        <td class="table-desc-cell" title="${lap.deskripsi}">${lap.deskripsi}</td>
        <td>${lap.kecamatan}</td>
        <td><span class="status-badge ${dapatkanKelasStatus(lap.status)}">${lap.status}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="bukaHalaman('detail-laporan', '${lap.id}')">Detail</button>
        </td>
      </tr>
    `).join("");
  }
}

function renderAntreanVerifikasi() {
  isiDropdownKategori("verifyCategoryFilter");
  filterAntreanVerifikasi();
}

function filterAntreanVerifikasi() {
  const data = ambilDataLaporan();
  const pending = data.filter(d => d.status === "Menunggu Verifikasi");

  const searchKey = (document.getElementById("verifySearchInput")?.value || "").toLowerCase();
  const katFilter = document.getElementById("verifyCategoryFilter")?.value || "Semua";

  const terfilter = pending.filter(lap => {
    const cocokKat = (katFilter === "Semua") || (lap.kategori === katFilter);
    const cocokSearch = !searchKey ||
      lap.id.toLowerCase().includes(searchKey) ||
      lap.judul.toLowerCase().includes(searchKey) ||
      lap.kecamatan.toLowerCase().includes(searchKey) ||
      lap.alamat.toLowerCase().includes(searchKey);
    return cocokKat && cocokSearch;
  });

  const badgeCount = document.getElementById("verifyCounterBadge");
  if (badgeCount) badgeCount.textContent = `${terfilter.length} Laporan Antrean`;

  const container = document.getElementById("adminVerifyGrid");
  if (!container) return;

  if (terfilter.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--color-neutral-muted);">Tidak ada antrean verifikasi laporan saat ini.</div>`;
    return;
  }

  container.innerHTML = terfilter.map(lap => `
    <div class="verify-queue-card">
      <div class="verify-queue-img">
        ${lap.foto && lap.foto.startsWith("data:image") ? `<img src="${lap.foto}" alt="Bukti">` : buatIlustrasiKategoriSVG(lap.kategori)}
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span class="report-id" style="font-weight:700;">#${lap.id} • ${lap.tanggal}</span>
          <span class="status-badge status-menunggu" style="font-size:0.7rem;">${lap.kategori}</span>
        </div>
        <h4 style="font-size:1rem; font-weight:700; color:var(--color-neutral-dark); margin-bottom:6px;">
          Aduan Masyarakat: ${lap.kategori} di Kec. ${lap.kecamatan}
        </h4>
        <p style="font-size:0.84rem; color:var(--color-neutral-muted); line-height:1.45; margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
          ${lap.deskripsi}
        </p>
        <div style="font-size:0.78rem; color:var(--color-primary); font-weight:600; margin-bottom:12px;">
           Koordinat: ${lap.latitude}, ${lap.longitude}
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-danger btn-sm" onclick="bukaModalTolakLaporan('${lap.id}')">Tolak</button>
          <button class="btn btn-primary btn-sm" onclick="bukaDetailVerifikasiAdmin('${lap.id}')">Verifikasi Laporan</button>
        </div>
      </div>
    </div>
  `).join("");
}

function bukaDetailVerifikasiAdmin(idLaporan) {
  currentVerifId = idLaporan;
  const data = ambilDataLaporan();
  const lap = data.find(l => l.id === idLaporan);
  if (!lap) return;

  bukaAdminSubHalaman("verifikasi-detail");

  document.getElementById("vDetailTitle").textContent = `Detail Verifikasi Laporan #${lap.id}`;
  document.getElementById("vDetailDesc").textContent = lap.deskripsi;
  document.getElementById("vDetailPelaporNama").textContent = lap.namaPelapor;
  document.getElementById("vDetailPelaporNIK").textContent = sembunyikanNIK
    ? lap.nikPelapor.replace(/(\d{6})\d{6}(\d{4})/, "$1******$2")
    : lap.nikPelapor;
  document.getElementById("vDetailLocationCoords").textContent = ` ${lap.kecamatan}, Samarinda (${lap.latitude}, ${lap.longitude})`;

  const photoEl = document.getElementById("vDetailPhotoContainer");
  if (photoEl) {
    if (lap.foto && lap.foto.startsWith("data:image")) {
      photoEl.innerHTML = `<img src="${lap.foto}" style="width:100%; height:100%; object-fit:cover;">`;
    } else {
      photoEl.innerHTML = buatIlustrasiKategoriSVG(lap.kategori);
    }
  }

  buatPetaMini(document.getElementById("vDetailMapContainer"), lap.latitude, lap.longitude, warnaStatusPeta(lap.status));
}

function konfirmasiVerifikasiLaporan() {
  if (!currentVerifId) return;

  const dinas = document.getElementById("vDinasSelect")?.value || "Dinas Lingkungan Hidup (DLH) Kota Samarinda";
  const data = ambilDataLaporan();
  const index = data.findIndex(l => l.id === currentVerifId);
  if (index === -1) return;

  const sekarang = new Date();
  const waktuStr = `${sekarang.toLocaleDateString("id-ID")} • ${String(sekarang.getHours()).padStart(2, "0")}:${String(sekarang.getMinutes()).padStart(2, "0")} WITA`;

  data[index].status = "Terverifikasi";
  data[index].dinasTerkait = dinas;
  data[index].linimasa.push({
    status: "Terverifikasi",
    waktu: waktuStr,
    ket: `Petugas DLH sudah mengecek laporan ini dan meneruskannya ke ${dinas}. Sekarang laporannya tampil di peta.`
  });

  simpanDataLaporan(data);
  tampilkanToast(`Laporan ${currentVerifId} berhasil diverifikasi & dipublikasikan ke peta!`);
  bukaAdminSubHalaman("verifikasi");
}

function bukaModalTolakLaporan(idLaporan) {
  currentVerifId = idLaporan;
  document.getElementById("modalTolakTitle").textContent = `Tolak Laporan #${idLaporan}`;
  document.getElementById("modalTolakLaporan").classList.add("active");
}

function tutupModalTolakLaporan() {
  document.getElementById("modalTolakLaporan").classList.remove("active");
}

function kirimPenolakanLaporan() {
  if (!currentVerifId) return;

  const alasanArray = [];
  if (document.getElementById("alasanFotoKurangJelas")?.checked) alasanArray.push("Foto bukti tidak valid / kurang jelas");
  if (document.getElementById("alasanBukanSamarinda")?.checked) alasanArray.push("Titik lokasi di luar wilayah Kota Samarinda");
  if (document.getElementById("alasanBukanEkologi")?.checked) alasanArray.push("Bukan masalah pelanggaran lingkungan hidup");

  const catatanVerif = document.getElementById("tolakCatatanVerifikator")?.value.trim() || "Tidak memenuhi kriteria aduan ekologi.";

  const data = ambilDataLaporan();
  const index = data.findIndex(l => l.id === currentVerifId);
  if (index === -1) return;

  const sekarang = new Date();
  const waktuStr = `${sekarang.toLocaleDateString("id-ID")} • ${String(sekarang.getHours()).padStart(2, "0")}:${String(sekarang.getMinutes()).padStart(2, "0")} WITA`;

  data[index].status = "Ditolak";
  data[index].catatanPetugas = `Ditolak: ${alasanArray.join(", ")}. ${catatanVerif}`;
  data[index].linimasa.push({
    status: "Ditolak",
    waktu: waktuStr,
    ket: `Laporan ini ditolak. Alasannya: ${catatanVerif}`
  });

  simpanDataLaporan(data);
  tutupModalTolakLaporan();
  tampilkanToast(`Laporan ${currentVerifId} telah ditolak.`);
  bukaAdminSubHalaman("verifikasi");
}

function renderSemuaLaporanAdmin() {
  const chipsContainer = document.getElementById("adminDistrictChips");
  if (chipsContainer) {
    chipsContainer.innerHTML = `
      <button class="filter-chip ${filterWilayahAdmin === 'Semua' ? 'active' : ''}" onclick="aturFilterWilayahAdmin('Semua')">Semua</button>
      ${DAFTAR_KECAMATAN_SAMARINDA.map(kec => `
        <button class="filter-chip ${filterWilayahAdmin === kec ? 'active' : ''}" onclick="aturFilterWilayahAdmin('${kec}')">Kec. ${kec}</button>
      `).join("")}
    `;
  }

  isiDropdownKategori("kelolaCategorySelect");
  filterSemuaLaporanAdmin();
}

function aturFilterWilayahAdmin(kec) {
  filterWilayahAdmin = kec;
  renderSemuaLaporanAdmin();
}

function filterSemuaLaporanAdmin() {
  const data = ambilDataLaporan();

  const totalAktif = data.length;
  const menunggu = data.filter(d => d.status === "Menunggu Verifikasi").length;
  const diproses = data.filter(d => d.status === "Sedang Ditangani" || d.status === "Diteruskan" || d.status === "Terverifikasi").length;
  const tuntas = data.filter(d => d.status === "Selesai").length;

  document.getElementById("kelolaTotalAktif").textContent = totalAktif;
  document.getElementById("kelolaMenunggu").textContent = menunggu;
  document.getElementById("kelolaDiproses").textContent = diproses;
  document.getElementById("kelolaTuntas").textContent = tuntas;

  const searchKey = (document.getElementById("kelolaSearchInput")?.value || "").toLowerCase();
  const katFilter = document.getElementById("kelolaCategorySelect")?.value || "Semua";
  const statFilter = document.getElementById("kelolaStatusSelect")?.value || "Semua";

  const terfilter = data.filter(lap => {
    const cocokWil = (filterWilayahAdmin === "Semua") || (lap.kecamatan === filterWilayahAdmin);
    const cocokKat = (katFilter === "Semua") || (lap.kategori === katFilter);
    const cocokStat = (statFilter === "Semua") || (lap.status === statFilter);
    const cocokSearch = !searchKey ||
      lap.id.toLowerCase().includes(searchKey) ||
      lap.judul.toLowerCase().includes(searchKey) ||
      lap.deskripsi.toLowerCase().includes(searchKey) ||
      lap.namaPelapor.toLowerCase().includes(searchKey) ||
      lap.kecamatan.toLowerCase().includes(searchKey);
    return cocokWil && cocokKat && cocokStat && cocokSearch;
  });

  const tbody = document.getElementById("adminAllReportsTableBody");
  if (!tbody) return;

  if (terfilter.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:32px; color:var(--color-neutral-muted);">Tidak ada laporan yang sesuai kriteria pencarian.</td></tr>`;
    return;
  }

  tbody.innerHTML = terfilter.map(lap => `
    <tr>
      <td><span class="report-id" style="font-weight:700;">#${lap.id}</span></td>
      <td>${lap.kategori}</td>
      <td class="table-desc-cell" title="${lap.deskripsi}">${lap.deskripsi}</td>
      <td>${lap.kecamatan}, Samarinda</td>
      <td>
        <span class="status-badge ${dapatkanKelasStatus(lap.status)}" style="cursor:pointer;" onclick="bukaModalGantiStatus('${lap.id}')" title="Klik untuk ubah status">
          ${lap.status} ▾
        </span>
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="bukaHalaman('detail-laporan', '${lap.id}')">Detail</button>
      </td>
    </tr>
  `).join("");
}

function bukaModalGantiStatus(idLaporan) {
  currentUbahStatusId = idLaporan;
  const data = ambilDataLaporan();
  const lap = data.find(l => l.id === idLaporan);
  if (!lap) return;

  document.getElementById("modalGantiStatusSub").textContent = `Ubah status penanganan untuk laporan #${lap.id} (${lap.kategori} - ${lap.kecamatan})`;
  document.getElementById("selectStatusTahapan").value = lap.status === "Ditolak" || lap.status === "Menunggu Verifikasi" ? "Terverifikasi" : lap.status;
  document.getElementById("modalGantiStatus").classList.add("active");
}

function tutupModalGantiStatus() {
  document.getElementById("modalGantiStatus").classList.remove("active");
}

function simpanPerubahanStatusLaporan() {
  if (!currentUbahStatusId) return;

  const statusBaru = document.getElementById("selectStatusTahapan")?.value;
  const catatan = document.getElementById("inputCatatanPetugasUpdate")?.value.trim();

  const data = ambilDataLaporan();
  const index = data.findIndex(l => l.id === currentUbahStatusId);
  if (index === -1) return;

  const sekarang = new Date();
  const waktuStr = `${sekarang.toLocaleDateString("id-ID")} • ${String(sekarang.getHours()).padStart(2, "0")}:${String(sekarang.getMinutes()).padStart(2, "0")} WITA`;

  data[index].status = statusBaru;
  if (catatan) data[index].catatanPetugas = catatan;

  data[index].linimasa.push({
    status: statusBaru,
    waktu: waktuStr,
    ket: catatan || `Petugas DLH mengubah status jadi ${statusBaru}.`
  });

  simpanDataLaporan(data);
  tutupModalGantiStatus();
  tampilkanToast(`Status laporan ${currentUbahStatusId} diubah menjadi ${statusBaru}`);
  renderSemuaLaporanAdmin();
}

function warnaStatusPeta(status) {
  if (status === "Menunggu Verifikasi") return "#F57F17";
  if (status === "Selesai") return "#2E7D32";
  if (status === "Ditolak") return "#C62828";
  return "#E65100"; 
}

function googleMapsSiap() {
  return googleMapsLoaded && window.google && window.google.maps;
}

function buatPetaMini(container, lat, lng, warna) {
  if (!container) return;

  const latitude = Number(lat);
  const longitude = Number(lng);

  if (!googleMapsSiap()) {
    container.innerHTML = `<div class="map-mini-placeholder">Peta Google Maps sedang dimuat…</div>`;
    antrianPetaMini.push({ container, lat, lng, warna });
    return;
  }

  container.innerHTML = "";
  const posisi = { lat: latitude, lng: longitude };

  const peta = new google.maps.Map(container, {
    center: posisi,
    zoom: 16,
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: false,
    gestureHandling: "cooperative"
  });

  new google.maps.Marker({
    position: posisi,
    map: peta,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 9,
      fillColor: warna || "#E53935",
      fillOpacity: 1,
      strokeColor: "#ffffff",
      strokeWeight: 2.5
    }
  });
}

function buatKontenInfoPetaAdmin(lap) {
  const box = document.createElement("div");
  box.className = "map-info-window";

  const head = document.createElement("div");
  head.className = "map-info-head";

  const idEl = document.createElement("span");
  idEl.className = "report-id";
  idEl.textContent = `#${lap.id}`;

  const statusEl = document.createElement("span");
  statusEl.className = `status-badge ${dapatkanKelasStatus(lap.status)}`;
  statusEl.textContent = lap.status;

  head.append(idEl, statusEl);

  const title = document.createElement("h4");
  title.className = "map-info-title";
  title.textContent = lap.judul;

  const meta = document.createElement("p");
  meta.className = "map-info-meta";
  meta.textContent = `${lap.kategori} • ${lap.kecamatan}, Samarinda`;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-primary btn-sm";
  btn.style.width = "100%";
  btn.textContent = "Lihat Detail Laporan";
  btn.addEventListener("click", () => bukaHalaman("detail-laporan", lap.id));

  box.append(head, title, meta, btn);
  return box;
}

function muatPetaAdmin() {
  const container = document.getElementById("adminGisView");
  if (!container) return;

  const data = ambilDataLaporan();
  const searchKey = (document.getElementById("adminMapSearchInput")?.value || "").toLowerCase();

  const terfilter = data.filter(lap => {
    const cocokStat = (filterPetaAdminStatus === "Semua") || (lap.status === filterPetaAdminStatus);
    const cocokSearch = !searchKey ||
      lap.id.toLowerCase().includes(searchKey) ||
      lap.judul.toLowerCase().includes(searchKey) ||
      lap.kecamatan.toLowerCase().includes(searchKey);
    return cocokStat && cocokSearch;
  });

  // Hitung Legend
  document.getElementById("legCountMenunggu").textContent = data.filter(d => d.status === "Menunggu Verifikasi").length;
  document.getElementById("legCountDiproses").textContent = data.filter(d => d.status === "Sedang Ditangani" || d.status === "Diteruskan" || d.status === "Terverifikasi").length;
  document.getElementById("legCountTuntas").textContent = data.filter(d => d.status === "Selesai").length;
  document.getElementById("legCountDitolak").textContent = data.filter(d => d.status === "Ditolak").length;

  if (!googleMapsSiap()) {
    petaAdminGoogleMap = null;
    container.innerHTML = `<div class="map-mini-placeholder map-admin-placeholder">Peta Google Maps sedang dimuat… Jika tidak muncul, periksa koneksi internet atau API Key Google Maps.</div>`;
    return;
  }

  if (!petaAdminGoogleMap) {
    container.innerHTML = "";
    petaAdminGoogleMap = new google.maps.Map(container, {
      center: { lat: KOORDINAT_PUSAT_SAMARINDA.lat, lng: KOORDINAT_PUSAT_SAMARINDA.lng },
      zoom: 12,
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
      clickableIcons: false
    });
    petaAdminInfoWindow = new google.maps.InfoWindow();
  } else {
    google.maps.event.trigger(petaAdminGoogleMap, "resize");
  }

  petaAdminInfoWindow.close();
  petaAdminMarkers.forEach(m => m.setMap(null));
  petaAdminMarkers = [];

  const batas = new google.maps.LatLngBounds();

  terfilter.forEach(lap => {
    const lat = Number(lap.latitude);
    const lng = Number(lap.longitude);
    if (Number.isNaN(lat) || Number.isNaN(lng)) return;

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: petaAdminGoogleMap,
      title: `${lap.id} - ${lap.kategori} (${lap.status})`,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 9,
        fillColor: warnaStatusPeta(lap.status),
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2.5
      }
    });

    marker.addListener("click", () => {
      petaAdminInfoWindow.setContent(buatKontenInfoPetaAdmin(lap));
      petaAdminInfoWindow.open({ map: petaAdminGoogleMap, anchor: marker });
    });

    petaAdminMarkers.push(marker);
    batas.extend({ lat, lng });
  });

  if (petaAdminMarkers.length === 1) {
    petaAdminGoogleMap.setCenter(batas.getCenter());
    petaAdminGoogleMap.setZoom(15);
  } else if (petaAdminMarkers.length > 1) {
    petaAdminGoogleMap.fitBounds(batas, 60);
  } else {
    petaAdminGoogleMap.setCenter({ lat: KOORDINAT_PUSAT_SAMARINDA.lat, lng: KOORDINAT_PUSAT_SAMARINDA.lng });
    petaAdminGoogleMap.setZoom(12);
  }
}

function aturFilterPetaAdmin(stat) {
  filterPetaAdminStatus = stat;
  const chips = document.querySelectorAll("#adminMapStatusChips .filter-chip");
  chips.forEach(c => {
    if (c.textContent.trim().startsWith(stat) || (stat === "Sedang Ditangani" && c.textContent.includes("Diproses"))) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  muatPetaAdmin();
}

function filterPetaAdmin() {
  muatPetaAdmin();
}

function updateTanggalHariIni() {
  const badge = document.getElementById("adminCurrentDateBadge");

  if (!badge) return;

  const sekarang = new Date();

  const tanggal = sekarang.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Makassar"
  });

  badge.textContent = `Hari ini: ${tanggal}`;
}


function eksporLaporanCSV() {
  const data = ambilDataLaporan();
  const header = ["ID Laporan", "Kategori", "Judul", "Deskripsi", "Kecamatan", "Alamat", "Latitude", "Longitude", "Status", "Tanggal", "Waktu", "Dinas Terkait"];

  const rows = data.map(l => [
    `"${l.id}"`,
    `"${l.kategori}"`,
    `"${(l.judul || '').replace(/"/g, '""')}"`,
    `"${(l.deskripsi || '').replace(/"/g, '""')}"`,
    `"${l.kecamatan}"`,
    `"${(l.alamat || '').replace(/"/g, '""')}"`,
    l.latitude,
    l.longitude,
    `"${l.status}"`,
    `"${l.tanggal}"`,
    `"${l.waktu}"`,
    `"${l.dinasTerkait || '-'}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [header.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `ecoreport_samarinda_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  tampilkanToast("Laporan berhasil diekspor ke CSV!");
}

/* ============================================================================
 * PENGATURAN SISTEM 
 * ============================================================================
 */
let daftarPenggunaSistem = [];
let sembunyikanNIK = true;

function escapeHtml(teks) {
  return String(teks ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function isiFormPengaturan(p) {
  const sla = document.getElementById("paramSLA");
  if (sla) sla.value = String(p.slaJam);
  const privasi = document.getElementById("paramPrivasiNIK");
  if (privasi) privasi.checked = !!p.sembunyikanNIK;
  const notif = document.getElementById("paramNotifEmail");
  if (notif) notif.checked = !!p.notifEmailDarurat;
  const wilayah = document.getElementById("paramCakupanWilayah");
  if (wilayah) wilayah.value = p.cakupanWilayah || "";
}

async function muatDataPengguna() {
    const tbody = document.getElementById("penggunaTableBody");

    if (tbody) {
        tbody.innerHTML = `<tr>
            <td colspan="4" style="text-align:center; padding:28px; color:var(--color-neutral-muted);">
                Memuat data pengguna…
            </td>
        </tr>`;
    }

    try {
        const pengguna = await ApiService.getUsers();

        daftarPenggunaSistem = Array.isArray(pengguna) ? pengguna : [];

        renderDaftarPengguna();
    } catch (err) {
        console.error("[Pengguna] Gagal memuat data:", err);

        if (tbody) {
            tbody.innerHTML = `<tr>
                <td colspan="4" style="text-align:center; padding:28px; color:#C62828;">
                    Gagal memuat data pengguna. Coba muat ulang halaman.
                </td>
            </tr>`;
        }
    }
}

function renderDaftarPengguna() {
  const tbody = document.getElementById("penggunaTableBody");
  if (!tbody) return;

  const kunci = (document.getElementById("penggunaSearchInput")?.value || "").toLowerCase().trim();
  const laporan = ambilDataLaporan();

  const labelPeran = { pelapor: "Warga Pelapor", admin: "Petugas / Admin" };

  const terfilter = daftarPenggunaSistem.filter(u => {
    if (!kunci) return true;
    return [u.nama, u.email, u.telepon, labelPeran[u.role] || u.role]
      .some(v => String(v || "").toLowerCase().includes(kunci));
  });

  if (terfilter.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:28px; color:var(--color-neutral-muted);">${
      daftarPenggunaSistem.length === 0 ? "Belum ada pengguna terdaftar." : "Tidak ada pengguna yang sesuai pencarian."
    }</td></tr>`;
    return;
  }

  tbody.innerHTML = terfilter.map(u => {
    let total = "—";
    if (u.totalLaporan !== undefined && u.totalLaporan !== null) {
      total = u.totalLaporan;
    } else if (u.role === "pelapor" && u.nik) {
      total = laporan.filter(l => l.nikPelapor === u.nik).length;
    }

    return `
      <tr>
        <td>
          <div style="font-weight:700;">${escapeHtml(u.nama)}</div>
          <div style="font-size:0.75rem; color:var(--color-neutral-muted);">${escapeHtml(u.email)}</div>
        </td>
        <td>${escapeHtml(labelPeran[u.role] || u.role)}</td>
        <td>${escapeHtml(u.telepon || "—")}</td>
        <td>${escapeHtml(total)}</td>
      </tr>
    `;
  }).join("");
}

/* ============================================================================
 * HELPER, BERANDA &  NOTIFIKASI
 * ============================================================================
 */
function renderStatistikBeranda() {
  const data = ambilDataLaporan();
  const terverifikasi = data.filter(d => d.status !== "Menunggu Verifikasi" && d.status !== "Ditolak").length;
  const ditangani = data.filter(d => d.status === "Sedang Ditangani").length;
  const selesai = data.filter(d => d.status === "Selesai").length;
  const antrean = data.filter(d => d.status === "Menunggu Verifikasi").length;

  const elT = document.getElementById("beranda-terverifikasi");
  const elD = document.getElementById("beranda-ditangani");
  const elS = document.getElementById("beranda-selesai");
  const elA = document.getElementById("beranda-antrean");

  if (elT) elT.textContent = terverifikasi;
  if (elD) elD.textContent = ditangani;
  if (elS) elS.textContent = selesai;
  if (elA) elA.textContent = antrean;
}

function renderLaporanTerbaruBeranda() {
  const container = document.getElementById("berandaLatestReports");
  if (!container) return;

  const data = ambilDataLaporan();
  const terverifikasi = data.filter(d => d.status !== "Menunggu Verifikasi" && d.status !== "Ditolak").slice(0, 3);

  if (terverifikasi.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:48px 24px; background:#FFFFFF; border:1.5px dashed var(--color-border); border-radius:var(--radius-lg);">
        <div style="width:52px; height:52px; border-radius:50%; background:var(--color-bg-light); display:inline-flex; align-items:center; justify-content:center; margin-bottom:14px; color:var(--color-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h4 style="font-size:1.08rem; font-weight:700; color:var(--color-neutral-dark); margin-bottom:6px;">Belum Ada Laporan Terverifikasi</h4>
        <p style="font-size:0.86rem; color:var(--color-neutral-muted); max-width:440px; margin:0 auto 20px; line-height:1.55;">
          Data dummy awal telah dikosongkan untuk persiapan integrasi database. Silakan buat laporan pertama untuk menguji sistem.
        </p>
        <button class="btn btn-primary btn-sm" onclick="bukaHalaman('buat-laporan')">
          <span>Buat Laporan Sekarang</span>
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = terverifikasi.map(lap => {
    const katObj = DAFTAR_KATEGORI.find(k => k.nama === lap.kategori) || { warna: "#2E7D32", ikon: "" };
    return `
      <article class="report-card" onclick="bukaHalaman('detail-laporan', '${lap.id}')">
        ${lap.foto && lap.foto.startsWith("data:image") ? `
          <div class="report-image-box">
            <img src="${lap.foto}" alt="Bukti ${lap.id}">
          </div>
        ` : ''}
        <div class="report-card-body">
          <div class="report-meta-header">
            <span class="report-id" style="display:inline-flex; align-items:center; gap:6px;">
              <span style="color:${katObj.warna}; display:inline-flex;">${katObj.ikon}</span>
              #${lap.id}
            </span>
            <span class="status-badge ${dapatkanKelasStatus(lap.status)}">${lap.status}</span>
          </div>
          <h3 class="report-title">${lap.judul}</h3>
          <p class="report-desc">${lap.deskripsi}</p>
          <div class="report-footer">
            <div class="report-location">
              <span>${lap.kecamatan}, Samarinda</span>
            </div>
            <time>${lap.tanggal}</time>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function isiDropdownKategori(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const currentVal = select.value;
  let optionsHTML = selectId.includes("Filter") || selectId.includes("Select") 
    ? `<option value="Semua">Semua Kategori</option>` 
    : `<option value="" disabled selected>Pilih Kategori Masalah...</option>`;

  DAFTAR_KATEGORI.forEach(kat => {
    optionsHTML += `<option value="${kat.nama}">${kat.nama}</option>`;
  });

  select.innerHTML = optionsHTML;
  if (currentVal) select.value = currentVal;
}

function renderKategoriBeranda() {
  const container = document.getElementById("kategoriGridContainer");
  if (!container) return;

  container.innerHTML = DAFTAR_KATEGORI.map(kat => `
    <div class="category-card" onclick="bukaPetaDenganKategori('${kat.nama}')">
      <div class="category-icon-box" style="color:${kat.warna}; background:${kat.warna}18;">
        ${kat.ikon}
      </div>
      <h3 class="category-name">${kat.nama}</h3>
      <p class="category-desc">${kat.deskripsi}</p>
    </div>
  `).join("");
}

function bukaPetaDenganKategori(katNama) {
  bukaHalaman("peta");
  pilihPetaKategori(katNama, katNama);
}

function dapatkanKelasStatus(status) {
  const map = {
    "Menunggu Verifikasi": "status-menunggu",
    "Ditolak": "status-ditolak",
    "Terverifikasi": "status-terverifikasi",
    "Diteruskan": "status-diteruskan",
    "Sedang Ditangani": "status-ditangani",
    "Selesai": "status-selesai"
  };
  return map[status] || "status-terverifikasi";
}

function dapatkanKelasKategori(kat) {
  const map = {
    "Sampah Liar": "sampah",
    "Polusi Air": "air",
    "Polusi Udara": "udara",
    "Penebangan Liar": "tebang",
    "Drainase Tersumbat": "drainase",
    "Kebakaran Lahan": "kebakaran",
    "Limbah Industri": "industri",
    "Fasilitas Rusak": "fasilitas",
    "Jalan Rusak": "jalan",
    "Lainnya": "lainnya"
  };
  return map[kat] || "sampah";
}

function buatIlustrasiKategoriSVG(kategori) {
  const kat = DAFTAR_KATEGORI.find(k => k.nama === kategori) || { warna: "#2E7D32", nama: "Laporan Lingkungan" };
  return `
    <div style="background:#F1F5F2; width:100%; height:100%; min-height:140px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:${kat.warna};">
      <div style="width:48px; height:48px; border-radius:50%; background:#FFFFFF; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.06); margin-bottom:8px;">
        ${kat.ikon}
      </div>
      <span style="font-size:0.78rem; font-weight:700; color:var(--color-neutral-dark);">${kat.nama}</span>
    </div>
  `;
}

let toastTimer = null;
function tampilkanToast(pesan) {
  const toastEl = document.getElementById("toast");
  const msgEl = document.getElementById("toastMessage");
  if (!toastEl || !msgEl) return;

  msgEl.textContent = pesan;
  toastEl.classList.remove("hidden");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 3500);
}

function tutupMobileDrawer() {
  const drawer = document.getElementById("mobileDrawer");
  const btn = document.getElementById("hamburgerBtn");
  if (drawer) drawer.classList.remove("open");
  if (btn) {
    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  }
}

function inisialisasiDropdownKustom() {
  const nilaiAsli = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value");

  document.querySelectorAll("select.form-select").forEach(select => {
    if (select.dataset.dropdownKustom === "true") return;
    if (select.closest(".custom-dropdown")) return;
    select.dataset.dropdownKustom = "true";

    const wrapper = document.createElement("div");
    wrapper.className = "custom-dropdown";
    if (select.style.width) {
      wrapper.style.width = select.style.width;
      wrapper.style.flexShrink = "0";
    }
    if (select.style.maxWidth) wrapper.style.maxWidth = select.style.maxWidth;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "custom-dropdown-toggle";
    toggle.setAttribute("aria-haspopup", "listbox");

    const label = document.createElement("span");
    const ikon = document.createElement("i");
    ikon.className = "fa-solid fa-chevron-down";
    toggle.append(label, ikon);

    const menu = document.createElement("div");
    menu.className = "custom-dropdown-menu";
    menu.setAttribute("role", "listbox");

    select.parentNode.insertBefore(wrapper, select);
    wrapper.append(toggle, menu, select);


    select.classList.add("native-select-hidden");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");
    select.addEventListener("focus", () => toggle.focus());

    const tutup = () => wrapper.classList.remove("open");

    const sinkron = () => {
      const nilaiSekarang = nilaiAsli.get.call(select);
      menu.innerHTML = "";

      Array.from(select.options).forEach(opt => {
        if (opt.disabled && opt.value === "") return; 

        const item = document.createElement("div");
        item.className = "custom-dropdown-option";
        item.setAttribute("role", "option");
        item.dataset.value = opt.value;
        item.textContent = opt.textContent;
        if (opt.value === nilaiSekarang) item.classList.add("active");

        item.addEventListener("click", () => {
          nilaiAsli.set.call(select, opt.value);
          sinkron();
          tutup();
          select.dispatchEvent(new Event("change", { bubbles: true }));
        });

        menu.appendChild(item);
      });

      const terpilih = select.options[select.selectedIndex];
      label.textContent = terpilih ? terpilih.textContent : "";
      toggle.classList.toggle("is-placeholder", !terpilih || terpilih.value === "");
    };

    Object.defineProperty(select, "value", {
      configurable: true,
      get() { return nilaiAsli.get.call(this); },
      set(v) { nilaiAsli.set.call(this, v); sinkron(); }
    });

    new MutationObserver(sinkron).observe(select, { childList: true });
    select.addEventListener("change", sinkron);
    if (select.form) select.form.addEventListener("reset", () => setTimeout(sinkron, 0));

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      document.querySelectorAll(".custom-dropdown.open").forEach(lain => {
        if (lain !== wrapper) lain.classList.remove("open");
      });
      wrapper.classList.toggle("open");
    });

    wrapper.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        tutup();
        toggle.focus();
      }
    });

    sinkron();
  });

}

document.addEventListener("click", (event) => {
  document.querySelectorAll(".custom-dropdown.open").forEach(dd => {
    if (!dd.contains(event.target)) dd.classList.remove("open");
  });
});

/* ============================================================================
 * INISIALISASI SAAT DOM SIAP
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  ambilDataLaporan();
  ambilSesiPengguna();
  inisialisasiGoogleMapsSDK();
  renderKategoriBeranda();
  renderStatistikBeranda();
  renderLaporanTerbaruBeranda();
  updateTanggalHariIni();
  inisialisasiDropdownKustom();

  const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
    });
  }

  bukaHalaman("beranda");
});
