# Requirement Analysis - PanganBerbagi

## Gambaran Umum

**PanganBerbagi** adalah platform digital berbasis *web* yang dikembangkan untuk membantu mengatasi permasalahan *Food Loss and Waste* (FLW) di Indonesia. Platform ini mengintegrasikan vendor penjual makanan berlebih (*surplus food*) dengan konsumen yang membutuhkan pangan murah serta panti asuhan/lembaga sosial terverifikasi. PanganBerbagi dirancang khusus untuk mendukung pencapaian target Pembangunan Berkelanjutan global, khususnya **SDG 2 (Zero Hunger)** dan **SDG 12 (Responsible Consumption & Production)**.

---

## Masalah Usaha & Tujuan Website

### Masalah Usaha
Banyak vendor atau pedagang makanan (makanan berat maupun ringan seperti roti dan kue) mengalami pembuangan sisa makanan (*food waste*) di akhir jam operasional akibat estimasi produksi berlebih dan fluktuasi jumlah pembeli. Pembuangan makanan berkualitas layak konsumsi ini mengakibatkan kerugian finansial bagi pelaku usaha dan memperburuk permasalahan lingkungan akibat limbah organik.

### Tujuan Website
Menyediakan platform digital yang menghubungkan vendor penjual makanan berlebih dengan konsumen, sehingga makanan yang masih layak tidak terbuang sia-sia, konsumen mendapatkan akses pangan murah, serta mendukung pola konsumsi dan produksi yang bertanggung jawab.

---

## Target Pengguna

1. **Mitra Donatur / Resto:** Restoran, toko roti, katering, dan supermarket yang memiliki surplus makanan layak konsumsi.
2. **Penerima Manfaat Sosial (Panti/Komunitas):** Panti asuhan, dapur umum, dan lembaga sosial terverifikasi yang membutuhkan donasi 100% gratis.
3. **Konsumen Umum:** Masyarakat umum yang ingin membeli makanan surplus berkualitas tinggi dengan harga terjangkau (diskon 50%–70%).
4. **Administrator Sistem:** Pengelola platform yang memverifikasi mitra, panti, dan mengawasi lalu lintas reservasi/misi.

---

## Struktur Halaman Berdasarkan Peta Situs

1. **Header & Navigation:** Logo & identitas platform, *quick stat badge* (SDG 2 & 12), dan link navigasi *smooth scroll*.
2. **Hero & Impact Dashboard:** Headline, *value proposition*, serta *live counter* penyelamatan pangan dan reduksi emisi $\text{CO}_2$.
3. **Katalog Pangan Hibrida (`#katalog`):** Filter harga (100% Gratis vs Diskon 50-70%), opsi pencarian & kategori, serta *grid product cards*.
4. **Dashboard Relawan Rescue (`#relawan`):** Form pendaftaran armada relawan, verifikasi QR code serah terima, dan kartu misi darurat.
5. **Modul Salurkan Makanan (`#salurkan`):** Form posting surplus makanan bagi mitra/donatur dengan pilihan skema donasi atau diskon.
6. **Modul Food Bank Komunitas (`#foodbank`):** Direktori titik *drop-off* hub logistik pangan dan informasi kapasitas stok sembako.
7. **Modul Resep Zero-Waste (`#zerowaste`):** Kartu edukasi olahan bahan dapur rumah tangga dan tips pengurangan sisa makanan.
8. **Global Modal Popup:** *Generator* Tiket QR Code virtual, pilihan metode penerimaan, dan konfirmasi reservasi.
9. **Footer Section:** Hak cipta, informasi keselarasan SDG 2 & SDG 12, serta navigasi cepat dan kontak.

---

## Kebutuhan Fungsional

* **KF-01 (Katalog Hibrida & Filter):** Sistem harus mampu menyajikan katalog makanan surplus *real-time* yang dapat difilter berdasarkan status harga (100% Gratis vs Diskon Murah), kategori (Roti, Makanan Matang, Sayur/Buah, Sembako), dan lokasi.
* **KF-02 (Salurkan Makanan / Posting Surplus):** Sistem harus menyediakan form bagi mitra/donatur untuk menambahkan item (nama makanan, porsi, harga asli, harga diskon, batas expiry, dan jenis skema).
* **KF-03 (Reservasi & Modal Tiket QR):** Sistem harus menghasilkan Tiket QR Virtual unik (ID Tiket, jam penjemputan) ketika pengguna umum/panti melakukan reservasi/klaim.
* **KF-04 (Dashboard Misi Relawan Rescue):** Sistem harus menyediakan modul *Rescue Mission* yang menampilkan daftar makanan darurat yang butuh dijemput relawan beserta lokasi penjemputan dan pengantaran.
* **KF-05 (Direktori Food Bank Komunitas):** Sistem harus menampilkan titik *drop-off point* / hub penyimpanan pangan kering (sembako) terdekat beserta statistik kapasitasnya.
* **KF-06 (Modul Edukasi Resep Zero-Waste):** Sistem harus menyediakan galeri artikel/resep interaktif tentang pengelolaan sisa bahan dapur rumah tangga.

---

## Kebutuhan Nonfungsional

* **KN-01 (Usability & Accessibility):** Antarmuka berbasis *responsive design* (menggunakan Tailwind CSS), mudah diakses dari *smartphone* maupun PC tanpa hambatan *rendering*.
* **KN-02 (Performance & Speed):** Waktu muat halaman (*load time*) cepat di bawah 2 detik dengan pemrosesan filter sisi klien (*Client-side rendering*).
* **KN-03 (Security & Trust):** Sistem verifikasi QR Code dua arah untuk menjamin keamanan klaim dan keabsahan mitra resto/panti.
* **KN-04 (Standar Teknologi):** Dibangun menggunakan kombinasi HTML5, Tailwind CSS, dan Vanilla JavaScript (ES6+).