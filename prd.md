# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Company Profile — Bank BTN Kantor Cabang Kota Tasikmalaya

---

| Atribut | Detail |
|---|---|
| **Dokumen ID** | PRD-BTN-TSMC-2026-001 |
| **Versi** | 1.0.0 |
| **Status** | Draft |
| **Tanggal Dibuat** | 22 April 2026 |
| **Terakhir Diperbarui** | 22 April 2026 |
| **Pemilik Produk** | Tim Digital & Marketing — Bank BTN KC Tasikmalaya |
| **Dibuat Oleh** | Tim Pengembangan Produk Digital |
| **Ditinjau Oleh** | — (Pending Review) |
| **Disetujui Oleh** | — (Pending Approval) |

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Latar Belakang & Konteks Bisnis](#2-latar-belakang--konteks-bisnis)
3. [Profil Perusahaan & Informasi Cabang](#3-profil-perusahaan--informasi-cabang)
4. [Tujuan Produk](#4-tujuan-produk)
5. [Target Pengguna](#5-target-pengguna)
6. [Ruang Lingkup Produk](#6-ruang-lingkup-produk)
7. [Arsitektur Informasi & Peta Situs](#7-arsitektur-informasi--peta-situs)
8. [Spesifikasi Fitur & Halaman](#8-spesifikasi-fitur--halaman)
9. [Desain & Panduan Visual (UI/UX)](#9-desain--panduan-visual-uiux)
10. [Konten & Data yang Dibutuhkan](#10-konten--data-yang-dibutuhkan)
11. [Persyaratan Non-Fungsional](#11-persyaratan-non-fungsional)
12. [Aksesibilitas & Inklusivitas](#12-aksesibilitas--inklusivitas)
13. [Metrik Keberhasilan & KPI](#13-metrik-keberhasilan--kpi)
14. [Asumsi & Dependensi](#14-asumsi--dependensi)
15. [Risiko & Mitigasi](#15-risiko--mitigasi)
16. [Timeline & Milestone](#16-timeline--milestone)
17. [Pertanyaan Terbuka (Open Issues)](#17-pertanyaan-terbuka-open-issues)
18. [Lampiran & Referensi](#18-lampiran--referensi)

---

## 1. Ringkasan Eksekutif

### 1.1 Deskripsi Produk

Website Company Profile **Bank BTN Kantor Cabang (KC) Kota Tasikmalaya** adalah platform web resmi yang merepresentasikan kehadiran digital kantor cabang Bank BTN di Kota Tasikmalaya, Jawa Barat. Website ini berfungsi sebagai wajah digital cabang, menyajikan informasi layanan, produk perbankan, kontak, dan identitas institusi kepada masyarakat lokal dan calon nasabah.

### 1.2 Masalah yang Diselesaikan

Saat ini Bank BTN KC Tasikmalaya belum memiliki halaman web khusus beridentitas lokal yang memadai. Masyarakat Tasikmalaya membutuhkan akses informasi yang cepat, terpercaya, dan kontekstual mengenai layanan bank di wilayah mereka tanpa harus menelusuri portal nasional Bank BTN yang bersifat generik.

### 1.3 Nilai Proposisi

- Memberikan **kehadiran digital lokal** yang kuat bagi Bank BTN KC Tasikmalaya
- Menjadi **pintu masuk utama** bagi calon nasabah Kota Tasikmalaya
- Meningkatkan **kepercayaan dan kredibilitas** melalui desain berkelas standar Awwwards 2026
- Mendukung program **inklusi keuangan** dan **Program Sejuta Rumah** pemerintah di tingkat lokal

---

## 2. Latar Belakang & Konteks Bisnis

### 2.1 Sejarah Bank BTN

PT Bank Tabungan Negara (Persero) Tbk — disingkat Bank BTN — adalah Badan Usaha Milik Negara (BUMN) Indonesia yang bergerak di bidang perbankan. Cikal bakalnya dimulai dari **Postspaarbank** yang didirikan pemerintah Hindia Belanda di Batavia (Jakarta) pada **tahun 1897**, dengan tujuan mendidik masyarakat untuk gemar menabung.

Kronologi transformasi Bank BTN:

| Tahun | Peristiwa |
|---|---|
| 1897 | Berdiri sebagai *Postspaarbank* di Batavia, Hindia Belanda |
| 1942 | Diambil alih pemerintah Jepang, diganti nama menjadi *Tyokin Kyoku* |
| 1945 | Setelah kemerdekaan, diambil alih pemerintah RI, berganti nama menjadi *Kantor Tabungan Pos RI* |
| 1950 | Berganti nama menjadi **Bank Tabungan Pos** (9 Februari 1950, ditetapkan sebagai hari kelahiran BTN) |
| 1963 | Berganti nama resmi menjadi **Bank Tabungan Negara** |
| 1974 | Ditunjuk pemerintah sebagai lembaga pembiayaan kredit perumahan rakyat |
| 1976 | Realisasi **KPR pertama** di Indonesia oleh Bank BTN |
| 1989 | Penerbitan obligasi pertama Bank BTN |
| 1992 | Status berubah menjadi **PT Bank Tabungan Negara (Persero)** |
| 1994 | Status meningkat menjadi **Bank Devisa** |
| 2009 | **IPO** dan listing di Bursa Efek Indonesia |
| 2015 | Menjadi mitra utama **Program Sejuta Rumah** Presiden Joko Widodo |
| 2024 | Peluncuran **logo baru** pada 3 Maret 2024 di Indonesia Arena, GBK |

### 2.2 Posisi Bank BTN Saat Ini

Bank BTN merupakan bank BUMN yang berfokus pada pembiayaan perumahan, dengan tiga lini bisnis utama: **Perbankan Perseorangan (Individual)**, **Perbankan Bisnis (Commercial)**, dan **Perbankan Syariah**. Bank BTN telah menempati posisi sebagai **bank terbesar ke-7 di Indonesia** dari segi aset dan penyaluran kredit.

### 2.3 Konteks Lokal — Kota Tasikmalaya

Kota Tasikmalaya adalah kota terbesar kedua di Jawa Barat (setelah Bandung) dengan populasi yang terus berkembang. Pertumbuhan sektor properti dan perumahan di Tasikmalaya menjadikan kehadiran Bank BTN — sebagai bank KPR terkemuka — sangat relevan dan strategis di wilayah ini.

---

## 3. Profil Perusahaan & Informasi Cabang

### 3.1 Identitas Cabang

| Field | Data |
|---|---|
| **Nama Resmi** | PT Bank Tabungan Negara (Persero) Tbk — Kantor Cabang Kota Tasikmalaya |
| **Nama Singkat** | Bank BTN KC Tasikmalaya |
| **Kode Bank** | 200 |
| **Kode Cabang** | 56000000 |
| **Jenis Kantor** | Kantor Cabang (Dalam Negeri) |
| **Alamat** | Jl. Sutisna Senjaya No. 101, Cikalang, Tawang, Kota Tasikmalaya, Jawa Barat 46112 |
| **Nomor Telepon** | (0265) 334464 – 334465 |
| **Call Center Nasional** | 1500 826 (24 jam, 7 hari) |
| **Website Resmi Nasional** | https://www.btn.co.id |
| **Instagram Resmi Cabang** | @btnkctasikmalaya |
| **Kode Pos** | 46112 |

### 3.2 Kantor Kas & Cabang Pendukung di Area Tasikmalaya

| Nama Kantor | Alamat | Telepon |
|---|---|---|
| Bank BTN Padayungan | Ruko No. 5, Jl. Perintis Kemerdekaan, Tugujaya, Tasikmalaya 46126 | +62 265 314587 |
| Bank BTN Kantor Kas Ciawi | Jl. Raya Sukamantri, Ciawi, Tasikmalaya 46156 | (0265) 421107 |

### 3.3 Jam Operasional

| Hari | Jam Operasional |
|---|---|
| Senin – Jumat | 08.00 – 15.30 WIB |
| Sabtu | Tutup |
| Minggu & Hari Libur Nasional | Tutup |
| ATM & e-Channel | 24 Jam / 7 Hari |

### 3.4 Visi & Misi

**Visi Perusahaan:**
> *"Menjadi Bank yang terdepan dalam pembiayaan perumahan."*

**Misi Perusahaan:**
1. Memberikan pelayanan unggul dalam pembiayaan perumahan dan industri terkait, pembiayaan konsumsi, dan usaha kecil menengah.
2. Meningkatkan keunggulan kompetitif melalui inovasi pengembangan produk, jasa, dan jaringan strategis berbasis teknologi terkini.
3. Menyiapkan dan mengembangkan Human Capital yang berkualitas, profesional, dan memiliki integritas tinggi.
4. Melaksanakan manajemen perbankan yang sesuai dengan prinsip kehati-hatian dan Good Corporate Governance untuk meningkatkan Shareholder Value.
5. Memedulikan kepentingan masyarakat dan lingkungannya.

### 3.5 Nilai Budaya Perusahaan — AKHLAK

Bank BTN menganut **6 Core Values AKHLAK** sebagai pedoman perilaku seluruh BTNers:

| Nilai | Kepanjangan |
|---|---|
| **A** | Amanah |
| **K** | Kompeten |
| **H** | Harmonis |
| **L** | Loyal |
| **A** | Adaptif |
| **K** | Kolaboratif |

---

## 4. Tujuan Produk

### 4.1 Tujuan Bisnis

- Meningkatkan **brand awareness** Bank BTN KC Tasikmalaya di kalangan masyarakat lokal
- Mendorong **konversi prospek** menjadi nasabah baru, terutama untuk produk KPR
- Menyediakan **informasi layanan cabang** yang akurat dan mudah diakses
- Mendukung strategi **digitalisasi perbankan** BTN secara nasional di level lokal

### 4.2 Tujuan Pengguna

- Calon nasabah dapat menemukan **informasi produk dan layanan** dengan cepat
- Masyarakat dapat mengakses **kontak dan lokasi cabang** dengan mudah
- Nasabah existing dapat memperoleh **panduan layanan** tanpa harus datang ke kantor
- Pengguna dapat **mengajukan pertanyaan atau konsultasi awal** secara digital

### 4.3 Ukuran Keberhasilan

- Website berhasil go-live sesuai jadwal dan bebas bug kritis
- Bounce rate < 50% dalam 3 bulan pertama
- Rata-rata waktu di halaman (avg. time on page) > 2 menit
- Jumlah lead/inquiry melalui form kontak ≥ 30 per bulan dalam 3 bulan pertama

---

## 5. Target Pengguna

### 5.1 Segmen Pengguna Primer

**Persona 1 — Calon Nasabah KPR (Usia 25–45 Tahun)**
- Pasangan muda atau keluarga muda di Kota Tasikmalaya
- Mencari informasi KPR subsidi (FLPP) atau KPR komersial
- Perangkat: Smartphone Android (dominan), akses mobile-first
- Kebutuhan: Simulasi angsuran, syarat pengajuan, kontak agen

**Persona 2 — Nasabah Tabungan & Deposito (Usia 30–55 Tahun)**
- Masyarakat menengah Kota Tasikmalaya
- Mencari informasi produk simpanan dan bunga deposito
- Perangkat: Mix antara mobile dan desktop
- Kebutuhan: Info produk, jam operasional, lokasi ATM

**Persona 3 — Pelaku Usaha / UMKM (Usia 28–50 Tahun)**
- Pengusaha lokal yang membutuhkan kredit usaha atau layanan bisnis
- Kebutuhan: Info KUR, kredit modal kerja, layanan cash management

### 5.2 Segmen Pengguna Sekunder

- Jurnalis dan media lokal yang mencari informasi resmi cabang
- Mahasiswa dan akademisi yang melakukan riset perbankan lokal
- Mitra developer/pengembang properti di wilayah Priangan Timur

---

## 6. Ruang Lingkup Produk

### 6.1 Dalam Ruang Lingkup (In Scope)

- Website statis/semi-dinamis satu bahasa (Bahasa Indonesia)
- Halaman: Hero/Home, Tentang Kami, Produk & Layanan, Lokasi & Kontak, Berita/Promo (opsional)
- Navigasi: Floating Dock Navigation Bar (Awwwards 2026 standard)
- Formulir kontak/konsultasi sederhana
- Embed Google Maps untuk lokasi kantor
- Responsif untuk perangkat mobile, tablet, dan desktop
- Integrasi ikon media sosial (Instagram @btnkctasikmalaya)
- Tautan ke website nasional btn.co.id dan aplikasi BTN Mobile

### 6.2 Luar Ruang Lingkup (Out of Scope)

- Sistem login nasabah / internet banking
- Simulasi KPR real-time yang terintegrasi langsung ke sistem core banking
- CMS (Content Management System) backend
- Sistem notifikasi push atau email marketing
- Multibahasa (Inggris, Sunda, dll.)
- Aplikasi mobile native (iOS/Android)

---

## 7. Arsitektur Informasi & Peta Situs

```
📌 Root (/)
│
├── 🏠 Beranda (Hero)
│   ├── Hero Section — Tagline & CTA Utama
│   ├── Highlight Produk Unggulan (KPR, Tabungan, Kredit)
│   ├── Statistik / Angka Kepercayaan
│   └── Berita / Promo Terkini (Mini Section)
│
├── 🏛️ Tentang Kami (/tentang-kami)
│   ├── Sejarah Bank BTN
│   ├── Visi & Misi
│   ├── Nilai Budaya AKHLAK
│   └── Profil Kantor Cabang Tasikmalaya
│
├── 💼 Produk & Layanan (/produk-layanan)
│   ├── KPR (Kredit Pemilikan Rumah)
│   │   ├── KPR Subsidi (FLPP)
│   │   ├── KPR Non-Subsidi / BTN Platinum
│   │   └── KPR Gaess for Millenial
│   ├── Tabungan
│   │   ├── Tabungan BTN Batara
│   │   ├── TabunganKu
│   │   ├── Tabungan BTN Juara
│   │   └── Tabungan BTN Pensiunan
│   ├── Deposito
│   ├── Kredit
│   │   ├── Kredit Usaha Rakyat (KUR)
│   │   ├── Kredit Modal Kerja
│   │   └── Kredit Konsumer
│   ├── Layanan Digital
│   │   ├── BTN Mobile
│   │   ├── Internet Banking BTN
│   │   └── ATM & CDM BTN
│   └── Layanan Prioritas
│
├── 📍 Lokasi & Kontak (/lokasi-kontak)
│   ├── Peta Interaktif (Google Maps Embed)
│   ├── Info Kantor Cabang Utama
│   ├── Daftar Kantor Kas & ATM di Tasikmalaya
│   ├── Jam Operasional
│   └── Formulir Konsultasi / Pertanyaan
│
└── 📰 Berita & Promo (/berita-promo)  [Opsional — Fase 2]
    ├── Promo KPR Terkini
    └── Berita Program Subsidi Perumahan
```

---

## 8. Spesifikasi Fitur & Halaman

### 8.1 Navbar Floating Dock

**Deskripsi:** Navigasi utama berbentuk floating dock yang melayang di bagian bawah atau atas viewport, mengikuti standar desain Awwwards 2026. Navbar ini transparan saat berada di top halaman dan berubah menjadi glassmorphic card saat di-scroll.

**Spesifikasi:**
- Posisi: Fixed, bottom-center untuk mobile; fixed top-center untuk desktop
- Efek: Glassmorphism — `backdrop-filter: blur(20px)`, background `rgba(255,255,255,0.12)`, border `1px solid rgba(255,255,255,0.25)`
- Animasi: Fade-in saat halaman dimuat (duration 600ms, ease-out)
- Item menu: Beranda | Tentang Kami | Produk | Lokasi | Kontak
- Hover state: Scale 1.08 dengan subtle glow pada item aktif
- Active indicator: Pill/capsule highlight dengan warna aksen brand
- Mobile collapse: Hamburger icon dengan animated menu overlay

**Acceptance Criteria:**
- Navbar harus terlihat jelas di atas semua jenis background section
- Kontrast teks terhadap latar belakang navbar minimal 4.5:1 (WCAG AA)
- Animasi tidak boleh melebihi 300ms agar tidak mengganggu navigasi

---

### 8.2 Halaman Beranda (Home / Hero)

**8.2.1 Hero Section**

| Elemen | Spesifikasi |
|---|---|
| **Tagline Utama** | "Rumah Impianmu, Dimulai dari Sini." atau "Solusi Perumahan Terpercaya untuk Kota Tasikmalaya" |
| **Sub-tagline** | "Bank BTN KC Tasikmalaya — hadir melayani warga Priangan Timur sejak puluhan tahun." |
| **CTA Primer** | Button "Ajukan KPR Sekarang" → link ke section produk KPR |
| **CTA Sekunder** | Button "Hubungi Kami" → link ke /lokasi-kontak |
| **Visual Background** | Full-viewport gradient mesh atau foto aerial Kota Tasikmalaya dengan overlay warna brand |
| **Animasi** | Kinetic typography pada tagline (staggered word reveal, 80ms per kata) |
| **Scroll Indicator** | Animated chevron/arrow ke bawah |

**8.2.2 Highlight Produk (Feature Cards)**

Menampilkan 3–4 produk unggulan dalam format **Bento Grid Layout** — mengikuti tren 2026:

```
[ KPR Subsidi FLPP        ] [ Tabungan BTN Batara ]
[      (card besar)        ] [     (card kecil)    ]
[ BTN Mobile Banking      ] [ KUR UMKM            ]
[     (card kecil)         ] [    (card kecil)     ]
```

Setiap card memiliki:
- Ikon SVG atau ilustrasi minimal
- Judul produk
- Deskripsi singkat 1 kalimat
- Link "Pelajari lebih lanjut →"
- Hover effect: subtle lift shadow + border glow

**8.2.3 Angka Kepercayaan (Trust Statistics)**

Menampilkan counter animasi (count-up on scroll) untuk:
- Tahun berdiri BTN (sejak 1897)
- Jaringan cabang BTN di Indonesia (ribuan)
- Program KPR yang tersalurkan (nasional)
- Tahun operasi BTN di Tasikmalaya

**8.2.4 Testimonial / Social Proof**

- Quote carousel dari nasabah (dummy/ilustrasi — data riil perlu diverifikasi legal)
- Rating & ulasan Google Maps terintegrasi (jika tersedia)

---

### 8.3 Halaman Tentang Kami

**Struktur Section:**

1. **Banner Section** — Visual foto kantor BTN KC Tasikmalaya + judul halaman
2. **Sejarah Singkat BTN** — Timeline horizontal interaktif (scroll-triggered) mencakup milestone dari 1897 hingga sekarang
3. **Tentang Kantor Cabang** — Deskripsi spesifik KC Tasikmalaya: alamat, kode cabang, area layanan
4. **Visi & Misi** — Desain kartu/panel dengan tipografi besar dan ikonografi minimal
5. **Nilai Budaya AKHLAK** — 6 kartu nilai dengan animasi reveal on scroll
6. **Manajemen Cabang** — (Opsional, jika informasi tersedia) Foto dan nama pimpinan cabang

---

### 8.4 Halaman Produk & Layanan

**Struktur:**

- **Tab/Filter Navigation** di bagian atas: "KPR" | "Tabungan" | "Kredit" | "Digital" | "Prioritas"
- Setiap tab menampilkan grid product card

**Detail Produk KPR (sebagai produk unggulan utama):**

| Produk | Deskripsi |
|---|---|
| **KPR BTN Subsidi (FLPP)** | KPR bersubsidi pemerintah untuk Masyarakat Berpenghasilan Rendah (MBR). Cicilan ringan, bunga tetap. |
| **KPR BTN Platinum** | KPR non-subsidi untuk segmen menengah ke atas. Fleksibel dengan plafon lebih tinggi. |
| **KPA BTN** | Kredit Pemilikan Apartemen. |
| **KPR Gaess for Millenial** | Program khusus generasi milenial usia 21–35 tahun. |
| **Kredit Ruko** | Pembiayaan properti komersial (ruko, rukan). |

**Detail Produk Tabungan:**

| Produk | Deskripsi |
|---|---|
| **Tabungan BTN Batara** | Tabungan utama Bank BTN dengan fasilitas ATM/debit. |
| **TabunganKu** | Tabungan tanpa biaya administrasi. Setoran awal hanya Rp 20.000. |
| **Tabungan BTN Juara** | Tabungan khusus pelajar/remaja usia 12–17 tahun. |
| **Tabungan BTN Pensiunan** | Solusi tabungan dan penyaluran dana pensiun. |
| **Tabungan BTN Payroll** | Tabungan untuk pembayaran gaji karyawan perusahaan. |

**Detail Layanan Digital:**

| Layanan | Deskripsi |
|---|---|
| **BTN Mobile** | Aplikasi mobile banking real-time. Tersedia di iOS & Android. |
| **Internet Banking BTN** | Layanan perbankan online via web. Aman dengan sertifikasi Verisign. |
| **ATM BTN** | Jaringan ATM tunai, ATM non-tunai, dan CDM (Cash Deposit Machine). |
| **BTN Cash Management** | Layanan pengelolaan kas untuk nasabah korporat/bisnis. |

---

### 8.5 Halaman Lokasi & Kontak

**Komponen:**

1. **Google Maps Embed** — Peta interaktif menampilkan lokasi KC Tasikmalaya di Jl. Sutisna Senjaya No. 101
2. **Info Card Kantor Utama:**
   - Nama: Bank BTN KC Kota Tasikmalaya
   - Alamat: Jl. Sutisna Senjaya No. 101, Cikalang, Tawang, Kota Tasikmalaya 46112
   - Telepon: (0265) 334464 – 334465
   - Jam Operasional: Senin–Jumat, 08.00–15.30 WIB
   - Call Center: 1500 826 (24 jam)
3. **Daftar Kantor Kas & ATM Terdekat** — Card list dengan jarak dari pusat kota
4. **Formulir Konsultasi Online:**
   - Nama Lengkap (required)
   - Nomor Telepon / WhatsApp (required)
   - Email (optional)
   - Topik Konsultasi (dropdown: KPR, Tabungan, Kredit, Lainnya)
   - Pesan (textarea, max 500 karakter)
   - Tombol "Kirim Pesan"
5. **Tautan Media Sosial:**
   - Instagram: @btnkctasikmalaya
   - WhatsApp Business (jika tersedia)

---

### 8.6 Footer

Komponen footer mencakup:
- Logo Bank BTN
- Alamat singkat kantor cabang
- Nomor telepon & call center
- Quick links ke setiap halaman
- Tautan ke website nasional btn.co.id
- Ikon media sosial
- Disclaimer legal: "PT Bank Tabungan Negara (Persero) Tbk terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)"
- Copyright tahun berjalan

---

## 9. Desain & Panduan Visual (UI/UX)

### 9.1 Filosofi Desain

Website ini mengadopsi pendekatan **"Liquid Refinement"** — memadukan kecanggihan visual standar Awwwards 2026 dengan identitas brand Bank BTN yang mapan dan terpercaya. Desain harus memberi kesan **premium, amanah, dan modern** tanpa kehilangan kehangatan sebagai institusi yang melayani masyarakat lokal.

### 9.2 Prinsip Desain Utama

1. **Glassmorphism Fungsional** — Efek frosted-glass digunakan secara strategis pada navbar, card produk, dan modal overlay — bukan sekadar dekorasi, melainkan sebagai alat komunikasi hirarki visual.
2. **Kinetic Typography** — Teks bergerak (animated reveal) pada hero section dan heading utama setiap halaman, membangun kesan dinamis dan modern.
3. **Bento Grid Layout** — Tata letak modular berbasis grid untuk menampilkan produk dan fitur, menciptakan variasi visual yang menarik namun terstruktur.
4. **Scroll-triggered Animation** — Setiap section aktif saat masuk viewport: fade-up, slide-in, atau counter animation — memberikan pengalaman seperti "living page."
5. **Dark / Light Mode Adaptive** — Sistem warna yang mendukung preferensi pengguna dan waktu tampilan.

### 9.3 Palet Warna

| Peran | Warna | Hex | Keterangan |
|---|---|---|---|
| **Primary Brand** | Biru BTN | `#003F87` | Biru tua utama brand |
| **Secondary Brand** | Emas/Kuning BTN | `#F5A623` | Aksen highlight & CTA |
| **Background Dark** | Navy Deep | `#010D1E` | Background dark mode |
| **Background Light** | Off-white | `#F4F7FA` | Background light mode |
| **Glass Surface** | Semi-transparent | `rgba(255,255,255,0.10)` | Glassmorphic card |
| **Text Primary** | Near-black | `#0A0A0A` | Teks utama light mode |
| **Text Secondary** | Cool Gray | `#6B7A8D` | Teks pendukung |
| **Accent Glow** | Biru Terang | `#4DA3FF` | Glow effect glassmorphism |
| **Success** | Hijau | `#2ECC71` | Status positif |
| **Warning** | Kuning | `#F39C12` | Notifikasi |
| **Danger/Error** | Merah | `#E74C3C` | Error state |

### 9.4 Tipografi

| Level | Font | Berat | Ukuran (Desktop) |
|---|---|---|---|
| **Display / Hero** | *Sohne* atau *Clash Display* | 700–800 | 72–96px |
| **Heading H1** | *Sohne* / *Clash Display* | 600–700 | 48–64px |
| **Heading H2** | *Sohne* / *Clash Display* | 600 | 32–40px |
| **Heading H3** | *DM Sans* | 600 | 24–28px |
| **Body Text** | *DM Sans* | 400 | 16–18px |
| **Caption / Label** | *DM Sans* | 400–500 | 12–14px |
| **CTA Button** | *DM Sans* | 600 | 14–16px |

> **Catatan:** Font harus diload secara optimal (font-display: swap) untuk performa page load yang baik.

### 9.5 Komponen UI Utama

**9.5.1 Floating Dock Navbar**
```
┌─────────────────────────────────────────────┐
│  ●  [logo BTN]  Beranda  Tentang  Produk  Lokasi  [CTA]  │
│  ↑ backdrop-blur(20px) | border rgba(255,255,255,0.2)    │
└─────────────────────────────────────────────┘
```

**9.5.2 Hero Section Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│              [Gradient Mesh Background]                         │
│                                                                  │
│   Rumah Impianmu,        ←── Kinetic type reveal                │
│   Dimulai dari Sini.                                             │
│                                                                  │
│   Bank BTN KC Tasikmalaya — Hadir untuk Priangan Timur          │
│                                                                  │
│  [Ajukan KPR Sekarang]    [Hubungi Kami]                        │
│        ↑ Primary CTA           ↑ Secondary Ghost Button         │
│                                                                  │
│                    ↓ scroll indicator                           │
└─────────────────────────────────────────────────────────────────┘
```

**9.5.3 Glassmorphic Product Card**
```css
.product-card {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 63, 135, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(77, 163, 255, 0.20);
}
```

### 9.6 Prinsip Animasi & Motion

| Jenis Animasi | Durasi | Easing | Konteks Penggunaan |
|---|---|---|---|
| Page entrance | 600ms | ease-out | Hero section reveal |
| Staggered text | 80ms/kata | ease-out | Kinetic typography |
| Card hover | 300ms | ease | Product cards |
| Scroll reveal | 500ms | ease-out | Section-by-section |
| Counter up | 1200ms | ease-in-out | Trust statistics |
| Navbar glass | 200ms | ease | Scroll transition |

> **Accessibility Note:** Semua animasi harus menghormati `prefers-reduced-motion: reduce` — ganti dengan fade simple atau no-animation.

### 9.7 Responsivitas

| Breakpoint | Label | Min-Width | Perilaku |
|---|---|---|---|
| Mobile S | xs | 320px | Single column, bottom navbar |
| Mobile L | sm | 480px | Single column, bottom navbar |
| Tablet | md | 768px | 2-column grid, top navbar |
| Laptop | lg | 1024px | 3-column grid, top navbar |
| Desktop | xl | 1280px | Full layout, floating dock navbar |
| Wide | 2xl | 1536px | Max-width container 1440px |

---

## 10. Konten & Data yang Dibutuhkan

### 10.1 Konten Tersedia (Hasil Research)

- ✅ Alamat kantor cabang
- ✅ Nomor telepon
- ✅ Sejarah BTN nasional
- ✅ Visi & misi perusahaan
- ✅ Daftar produk KPR, tabungan, kredit, digital
- ✅ Nilai budaya AKHLAK
- ✅ Akun Instagram resmi cabang (@btnkctasikmalaya)
- ✅ Call center nasional (1500 826)
- ✅ Informasi kantor kas Padayungan & Ciawi

### 10.2 Konten yang Perlu Dikonfirmasi/Dilengkapi

| Item Konten | Status | Prioritas | Catatan |
|---|---|---|---|
| Foto eksterior/interior kantor cabang | ❌ Belum ada | Tinggi | Diperlukan untuk hero & about section |
| Foto tim/pimpinan cabang | ❌ Belum ada | Sedang | Opsional, untuk halaman tentang kami |
| Testimoni nasabah resmi | ❌ Belum ada | Sedang | Perlu persetujuan hukum/legal |
| Daftar ATM lengkap di Tasikmalaya | ❌ Perlu verifikasi | Sedang | Data dari btn.co.id/location |
| Promo/program KPR lokal terkini | ❌ Belum ada | Tinggi | Untuk hero CTA dan berita |
| Nama & jabatan pimpinan cabang | ❌ Belum ada | Rendah | Opsional |
| WhatsApp Business cabang | ❌ Perlu konfirmasi | Sedang | Untuk tombol WA di kontak |
| Google Maps Place ID resmi | ❌ Perlu konfirmasi | Tinggi | Untuk embed maps yang akurat |
| Logo BTN versi terbaru (2024) | ❌ Perlu aset resmi | Tinggi | Logo baru diluncurkan Maret 2024 |

### 10.3 Panduan Penulisan Konten (Tone of Voice)

- **Nada:** Hangat, terpercaya, profesional, dekat dengan masyarakat lokal
- **Bahasa:** Bahasa Indonesia baku yang mudah dipahami, hindari jargon teknis perbankan yang berlebihan
- **Perspektif:** Orientasi pada manfaat nasabah ("Anda bisa...", bukan "Bank BTN menyediakan...")
- **Lokal Touch:** Sertakan konteks Kota Tasikmalaya dan Priangan Timur secara natural

---

## 11. Persyaratan Non-Fungsional

### 11.1 Performa

| Metrik | Target | Alat Ukur |
|---|---|---|
| Lighthouse Performance Score | ≥ 90 | Google Lighthouse |
| First Contentful Paint (FCP) | < 1.5 detik | Core Web Vitals |
| Largest Contentful Paint (LCP) | < 2.5 detik | Core Web Vitals |
| Cumulative Layout Shift (CLS) | < 0.1 | Core Web Vitals |
| Total Blocking Time (TBT) | < 200ms | Google Lighthouse |
| Time to Interactive (TTI) | < 3.5 detik | Google Lighthouse |

### 11.2 Keamanan

- Protokol HTTPS wajib (SSL/TLS Certificate)
- Perlindungan form dari CSRF & spam (honeypot / reCAPTCHA)
- Header keamanan: CSP, X-Frame-Options, HSTS
- Tidak menyimpan data sensitif nasabah di frontend
- Kepatuhan terhadap kebijakan privasi OJK dan BUMN

### 11.3 SEO (Search Engine Optimization)

- Meta title dan description yang teroptimasi untuk setiap halaman
- Target keyword: "bank BTN Tasikmalaya", "KPR Tasikmalaya", "bank btn kantor cabang tasikmalaya"
- Structured data (JSON-LD) untuk LocalBusiness schema
- Sitemap XML dan robots.txt
- Open Graph dan Twitter Card meta tags
- URL slug yang bersih dan deskriptif (Bahasa Indonesia)

### 11.4 Kompatibilitas Browser

| Browser | Versi Minimum |
|---|---|
| Google Chrome | v110+ |
| Mozilla Firefox | v110+ |
| Safari (iOS) | v15+ |
| Microsoft Edge | v110+ |
| Samsung Internet | v20+ |

> Tidak perlu mendukung Internet Explorer.

### 11.5 Uptime & Reliabilitas

- Target uptime: ≥ 99.5% per bulan
- Backup otomatis berkala
- Error page kustom (404, 500) berdesain sesuai brand

---

## 12. Aksesibilitas & Inklusivitas

- Kepatuhan **WCAG 2.1 Level AA**
- Kontras warna minimal **4.5:1** untuk teks normal, **3:1** untuk teks besar
- Semua gambar memiliki atribut `alt` yang deskriptif
- Navigasi dapat dilakukan sepenuhnya melalui keyboard (tab-order logis)
- Landmark HTML semantik (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`)
- Fokus indikator visible pada semua elemen interaktif
- Dukungan screen reader (ARIA label, role, dan properties yang tepat)
- Semua animasi menghormati `prefers-reduced-motion`
- Ukuran tap target minimum **44×44px** di mobile

---

## 13. Metrik Keberhasilan & KPI

### 13.1 Metrik Bisnis

| KPI | Baseline | Target 3 Bulan | Target 6 Bulan |
|---|---|---|---|
| Unique Visitors / Bulan | 0 | 500 | 1.500 |
| Lead Form Submission | 0 | 30 | 80 |
| Bounce Rate | — | < 55% | < 45% |
| Avg. Session Duration | — | > 1m 30s | > 2m 30s |
| Organic Search Impressions | 0 | 1.000 | 5.000 |

### 13.2 Metrik Teknis

| KPI | Target |
|---|---|
| Lighthouse Score (Performance) | ≥ 90 |
| Lighthouse Score (SEO) | ≥ 95 |
| Lighthouse Score (Accessibility) | ≥ 90 |
| Mobile Page Speed (GTmetrix) | Grade A |
| Zero Critical Bugs saat Launch | ✅ |

---

## 14. Asumsi & Dependensi

### 14.1 Asumsi

- Konten teks dan aset visual (foto, logo resmi BTN 2024) akan disediakan oleh pihak Bank BTN KC Tasikmalaya sebelum fase pengembangan dimulai.
- Pihak bank telah mendapat persetujuan dari BTN Pusat untuk memiliki halaman web cabang khusus.
- Domain dan hosting akan difasilitasi atau disetujui oleh departemen IT/Digital BTN Pusat.
- Formulir kontak tidak perlu terintegrasi ke CRM — cukup dikirim via email atau notifikasi sederhana.
- Informasi jam operasional, nomor telepon, dan alamat yang digunakan berdasarkan data publik yang telah diverifikasi.

### 14.2 Dependensi

- Google Maps API Key untuk embed peta interaktif
- Persetujuan konten dan brand guideline dari BTN Pusat / Departemen Marketing
- Aset visual resolusi tinggi dari pihak kantor cabang
- Data KPR dan produk terkini dari website resmi btn.co.id
- Kebijakan privasi dan disclaimer legal dari tim hukum BTN

---

## 15. Risiko & Mitigasi

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| Konten terlambat disediakan oleh cabang | Tinggi | Tinggi | Buat placeholder konten sejak awal; tetapkan deadline konten di kontrak |
| Persetujuan BTN Pusat tertunda | Sedang | Tinggi | Mulai dengan desain dummy yang tidak menggunakan logo resmi sampai izin diterima |
| Performa buruk pada koneksi lambat | Sedang | Sedang | Optimasi gambar (WebP), lazy loading, minimal third-party script |
| Glassmorphism tidak render dengan baik di browser lama | Rendah | Rendah | Graceful degradation — fallback ke solid background untuk browser tanpa backdrop-filter support |
| Data produk/promo kadaluarsa | Tinggi | Sedang | Buat mekanisme update konten sederhana; jadwalkan review konten 3 bulanan |
| Perubahan brand guideline BTN | Rendah | Tinggi | Gunakan CSS variables sehingga perubahan warna/font mudah diterapkan |

---

## 16. Timeline & Milestone

```
Fase 1: Persiapan & Riset (Minggu 1–2)
├── Kick-off meeting dengan stakeholder Bank BTN KC Tasikmalaya
├── Pengumpulan & verifikasi semua konten (teks, foto, logo)
├── Finalisasi sitemap dan wireframe
└── Persetujuan desain sistem (color, typography, component)

Fase 2: Desain UI/UX (Minggu 3–4)
├── Desain High-Fidelity mockup (Figma) — Desktop & Mobile
├── Prototype interaktif komponen utama (navbar, hero, product cards)
├── Review & revisi desain (1 putaran)
└── Design approval dari stakeholder

Fase 3: Pengembangan (Minggu 5–8)
├── Minggu 5: Setup project, component library, style system
├── Minggu 6: Halaman Beranda & Navbar
├── Minggu 7: Halaman Tentang Kami & Produk
└── Minggu 8: Halaman Lokasi/Kontak & Footer

Fase 4: QA & Optimasi (Minggu 9–10)
├── Cross-browser testing
├── Performance audit (Lighthouse)
├── Accessibility audit (WCAG 2.1 AA)
├── Mobile responsiveness testing
├── Bug fixing & polish
└── Content review final

Fase 5: Launch & Monitoring (Minggu 11–12)
├── Staging deployment & final review
├── Go-live (production deployment)
├── Google Analytics / tracking setup
├── Google Search Console submission (sitemap)
└── Post-launch monitoring (2 minggu)
```

**Total Estimasi Durasi:** ± 12 minggu (3 bulan) sejak kick-off

---

## 17. Pertanyaan Terbuka (Open Issues)

| No. | Pertanyaan | Ditujukan Kepada | Status |
|---|---|---|---|
| 1 | Apakah cabang memiliki akun Google Business yang terverifikasi? | Tim KC Tasikmalaya | 🔴 Belum dijawab |
| 2 | Apakah ada WhatsApp Business resmi yang dapat ditampilkan di website? | Tim KC Tasikmalaya | 🔴 Belum dijawab |
| 3 | Siapa nama dan jabatan Kepala Cabang BTN KC Tasikmalaya saat ini? | Tim KC Tasikmalaya | 🔴 Belum dijawab |
| 4 | Apakah ada promo KPR khusus yang sedang berjalan di wilayah Tasikmalaya? | Tim Marketing KC | 🔴 Belum dijawab |
| 5 | Domain apa yang akan digunakan? Sub-domain btn.co.id atau domain baru? | IT/Digital BTN Pusat | 🔴 Belum dijawab |
| 6 | Apakah diperlukan integrasi dengan sistem antrian digital cabang? | Operasional KC | 🔴 Belum dijawab |
| 7 | Apakah foto kantor/tim tersedia untuk digunakan? | Tim KC Tasikmalaya | 🔴 Belum dijawab |
| 8 | Apakah BTN Pusat memiliki brand guideline resmi yang dapat dibagikan? | Departemen Marketing BTN | 🔴 Belum dijawab |
| 9 | Bagaimana mekanisme pembaruan konten (promo, berita) setelah launch? | Tim Digital KC | 🔴 Belum dijawab |
| 10 | Apakah perlu fitur simulasi angsuran KPR sederhana di website? | Product Owner | 🟡 Dalam diskusi |

---

## 18. Lampiran & Referensi

### 18.1 Referensi Data Cabang

- **Bank BTN Lokasi Resmi:** https://www.btn.co.id/location
- **Daftar Perusahaan (alamat):** https://www.daftarperusahaan.com/bank/bank-btn-kc-tasikmalaya
- **Alamat Penting:** https://alamatpenting.com/bank-btn-kc-tasikmalaya/
- **Instagram Resmi:** https://www.instagram.com/btnkctasikmalaya/

### 18.2 Referensi Profil BTN

- **Website Resmi BTN:** https://www.btn.co.id/id/Tentang-Kami
- **Wikipedia Bank BTN (EN):** https://en.wikipedia.org/wiki/Bank_Tabungan_Negara
- **Call Center BTN:** 1500 826

### 18.3 Referensi Desain & Tren 2026

- **Awwwards:** https://www.awwwards.com
- **Web Design Trends 2026 — TheeDigital:** https://www.theedigital.com/blog/web-design-trends
- **Web Design Trends 2026 — Envato Elements:** https://elements.envato.com/learn/web-design-trends
- **Glassmorphism Best Practices 2026:** https://www.haddingtoncreative.com/post/the-top-web-design-trends-of-2026
- **Definitive Guide Trends 2026:** https://line25.com/articles/web-design-trends-2026/

### 18.4 Referensi Regulasi & Kepatuhan

- **OJK (Otoritas Jasa Keuangan):** https://www.ojk.go.id
- **WCAG 2.1 Guidelines:** https://www.w3.org/TR/WCAG21/
- **Core Web Vitals:** https://web.dev/vitals/

---

## Riwayat Dokumen

| Versi | Tanggal | Penulis | Perubahan |
|---|---|---|---|
| 1.0.0 | 22 April 2026 | Tim Pengembangan Produk Digital | Versi awal dokumen PRD — Draft |

---

> **Disclaimer:** Dokumen PRD ini bersifat draft dan memerlukan persetujuan dari stakeholder Bank BTN KC Tasikmalaya sebelum pengembangan dimulai. Beberapa data (seperti nama pimpinan cabang, nomor WA bisnis, dan foto kantor) bersifat estimasi/placeholder dan perlu diverifikasi langsung dengan pihak kantor cabang.

---

*© 2026 — PRD Web Company Profile Bank BTN KC Tasikmalaya | Dokumen Internal — Bersifat Rahasia*
