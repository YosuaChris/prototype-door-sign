# 🏥 Hospital Smart Door Sign (Electronic Bedside & Door Display)

Prototipe sistem **Digital Door Sign Rumah Sakit** berbasis web modern yang dirancang untuk layar display dinding di luar kamar rawat inap / bangsal rumah sakit. Tampilan ini mereplikasi dan menyempurnakan referensi desain visual clinical door signage berstandar keselamatan pasien (Patient Safety).

---

## 📸 Fitur Utama Sesuai Referensi Gambar

1. **Identifikasi Bed Pasien (Bed Identifier Box)**
   - Blok warna biru pastel lembut (`#edf4f9`) dengan ikon bed klinis minimalis dan penanda bed tebal (`BED A`, `BED B`, `BED C`).
2. **Tim Medis Penanggung Jawab (Care Team Info)**
   - **Attending Physician**: Dokter Penanggung Jawab Pelayanan (DPJP) utama pasien.
   - **Resident Medical Officer (RMO)**: Dokter jaga / dokter residen bangsal.
   - **Nurse**: Perawat penanggung jawab shift (PPJA).
3. **Next Care Event (Pencegah Keterlambatan Asuhan)**
   - Blok penanda prioritas berbingkai merah lembut dengan status **"Overdue"** (Berdenyut halus / Soft pulse alert jika terlewat).
   - Menampilkan jenis tindakan (contoh: *Vital signs*, *Injeksi Antibiotik*, *Visit Dokter*) dan estimasi jam tindakan.
   - Status kehadiran: *"Nurse attendance not recorded"* atau *"Completed"*.
4. **Clinical Safety & Alert Badges (Kewaspadaan Pasien)**
   - **Fall Risk** (Pill kuning/amber + Ikon Segitiga Peringatan): *"Assist with mobility"* (sesuai standar pencegahan risiko jatuh / pita kuning).
   - **NPO** (Pill merah/rose + Ikon Lingkaran Coret): *"Nothing by mouth"* (instruksi puasa medis pra-operasi / tes lab).
   - **Allergy** (Pill merah/rose + Ikon Larangan): *"Penicillin, shellfish"* (peringatan alergi obat/makanan kritis).
   - **Isolation Precaution** (Opsional: Pill ungu/merah untuk ruang isolasi droplet/airborne).

---

## 🚀 Fitur Interaktif Tambahan pada Prototipe Ini

- **Modal Editor Langsung**: Klik pada kartu bed manapun untuk mengubah nama dokter, perawat, tindakan selanjutnya, waktu, atau mencentang label risiko keselamatan.
- **Mode Layar Penuh (Kiosk Mode)**: Cocok untuk dipasang pada Android Smart Tablet atau Smart TV 16:9 / 16:10 di koridor rumah sakit.
- **Jam Digital Real-Time**: Sinkronisasi waktu detik, menit, jam, dan tanggal hari ini.
- **Mode Privasi Medis (Privacy Filter)**: Menyembunyikan nama staf/pasien untuk kepatuhan regulasi privasi data medis ketika dibutuhkan.
- **Mode Malam (Night / Dim Mode)**: Mengurangi intensitas cahaya layar di lorong rumah sakit pada jam istirahat malam pasien.
- **Penyimpanan Lokal (Local Persistence)**: Data yang diedit otomatis tersimpan di browser via `localStorage`.

---

## 📂 Struktur File Proyek

```
prototype-door-sign/
├── index.html        # Halaman utama aplikasi (Tailwind CSS, SVG Icons, UI Responsive)
├── styles.css        # Desain token, animasi denyut overdue, dan styling kiosk
├── app.js            # State management, manipulasi data real-time, event listener
└── README.md         # Dokumentasi sistem & panduan integrasi
```

---

## 💻 Cara Menjalankan Prototipe

### Opsi 1: Buka Langsung di Browser
Cukup klik ganda (double-click) file `index.html` pada browser modern (Google Chrome, Microsoft Edge, Safari, Firefox).

### Opsi 2: Menggunakan Local HTTP Server (Direkomendasikan)
Jika Anda memiliki Node.js atau Python:
```bash
# Menggunakan Python 3:
python -m http.server 8080

# Atau menggunakan Node (npx serve):
npx serve .
```
Lalu buka di browser: `http://localhost:8080` (tekan `F11` untuk full-screen kiosk display).

---

## 🔌 Rencana Integrasi ke SIMRS (Hospital Information System)

Untuk implementasi nyata di rumah sakit, prototipe web ini dapat diintegrasikan ke backend SIMRS:

1. **REST API Polling / Server-Sent Events (SSE)**
   - Endpoint: `GET /api/v1/rooms/{room_id}/signage-status`
   - Payload JSON menyediakan status bed, DPJP aktif, jadwal vital sign terdekat dari modul keperawatan, dan flag resiko (Fall Risk, NPO, Alergi) dari modul rekam medis elektronik (EMR).
2. **WebSocket / MQTT (Real-time Push)**
   - Saat perawat selesai menginput tanda-tanda vital di tablet perawat, status *"Overdue"* di door sign seketika berubah menjadi *"Completed"* tanpa perlu refresh layar.
3. **Standar HL7 FHIR**
   - Resource: `Patient`, `Encounter`, `Condition`, `AllergyIntolerance`, `CarePlan`.

---

## 🖥️ Rekomendasi Hardware untuk Pemasangan di Pintu Ruangan

- **Tipe Display**: 10.1 inci, 15.6 inci, atau 21.5 inci Wall-Mounted Android Smart Touchscreen Display.
- **Daya & Konektivitas**: Didukung **PoE (Power over Ethernet)** sehingga kabel LAN jaringan sekaligus menghantarkan daya listrik tanpa perlu stopkontak terpisah di dekat pintu.
- **Sistem Operasi**: Android OS (Kiosk Lock App / Fully Kiosk Browser) atau Raspberry Pi 4/5 (Chromium Kiosk Mode).
