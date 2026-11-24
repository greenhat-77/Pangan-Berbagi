# LAPORAN ANALISIS KEBUTUHAN PANGAN BERBAGI

## REQUIREMENT ANALYSIS

## Masalah Usaha

Banyak vendor atau pedagang makanan (makanan berat maupun ringan seperti roti dan kue) mengalami pembuangan sisa makanan (food waste) di akhir jam operasional. Hal ini disebabkan oleh estimasi produksi yang berlebih, fluktuasi jumlah pembeli, maupun penetapan harga awal yang kurang terjangkau. Pembuangan makanan berkualitas layak konsumsi ini mengakibatkan kerugian finansial bagi pelaku usaha dan memperburuk permasalahan lingkungan akibat limbah organik.

## Tujuan Website

Menyediakan platform digital yang menghubungkan vendor penjual makanan berlebih dengan konsumen, sehingga makanan yang masih layak tidak terbuang sia-sia, konsumen mendapatkan akses pangan murah, serta mendukung pola konsumsi dan produksi yang bertanggung jawab.

## Target Pengguna

a) Mitra Donatur / Pelaku Usaha (Vendor): Restoran, toko roti (bakery), jasa catering, dan supermarket yang sering mengalami kelebihan stok makanan layak     konsumsi di akhir jam operasional.

b) Penerima Manfaat Sosial: Panti asuhan, dapur umum, dan lembaga sosial terverifikasi yang berhak mengakses paket donasi makanan secara 100% gratis.

c) Konsumen Umum: Masyarakat luas yang ingin mendapatkan akses pangan berkualitas tinggi dengan harga terjangkau (potongan harga 50% - 70%) 

d) Administrator Sistem: Pengelola platform (tim pengembang/operator) yang bertugas memvalidasi legalitas mitra dan panti serta mengawasi lalu lintas reservasi. 

e) Relawan (Rescue Heroes): Pengguna yang mendaftar dan mengambil misi penjemputan serta pengantaran makanan ke titik Pos Pangan.

## Kebutuhan Fungsional

a) Katalog Surplus Real-Time, Pencarian & Filter Multi-Kriteria: Menampilkan daftar item makanan surplus beserta sisa waktu ketersediaan, kategori, wilayah, skema harga/ donasi, kolom pencarian nama makanan/mitra, filter skema, kategori, dan wilayah, serta tombol aksi Klaim (donasi 100% untuk penerima terverifikasi) dan Reservasi (potongan harga 50 - 70% untuk umum).

b) Navigasi & Ringkasan Dampak Platform: Menyediakan navigasi bagian (Makanan, Peta, Cara Kerja, Relawan, Edukasi, Salurkan Makanan), informasi cakupan wilayah Jabodetabek, dan panel metrik dampak penyelamatan pangan serta pencegahan emisi CO₂

c) Formulir Penyaluran Surplus & Validasi Kelayakan Pangan: Memungkinkan mitra/ donatur menginput nama resto/donatur, nama makanan, kategori, jumlah porsi, batas expiry (jam), pilihan skema (100% Gratis atau Diskon 50 - 70%), checklist standar keamanan pangan BPOM, serta unggah foto produk (PNG/JPG maks 5MB).

d) Sistem Reservasi & Tiket QR Virtual: Generator kode QR unik sebagai bukti klaim/ reservasi yang memuat ID Tiket dan tenggat pengambilan.

e) Peta Pangan & Direktori Pos Pangan Komunitas: Menampilkan titik lokasi makanan surplus dan Pos Pangan komunitas (balai warga, sekretariat RT/RW, warung mitra), status stok/kebutuhan dan jam operasional, serta fitur Lokasi saya.

f) Edukasi Zero-Waste, Kalkulator Dampak & FAQ Mitos Kedaluwarsa: Menyediakan kartu resep pengolahan sisa bahan dapur, kalkulator perkiraan porsi dan emisi CO₂ terhindarkan berdasarkan berat (kg) makanan, serta daftar tanya-jawab/mitos seputar label kedaluwarsa dan keamanan pangan.

g) Manajemen Misi & Pendaftaran Relawan (Rescue Heroes): Menyediakan daftar misi penjemputan dan pengantaran pangan ke Pos Pangan (dengan jarak dan status keterbukaan), tombol Ambil misi, serta formulir pendaftaran relawan (nama, moda transportasi, nomor WhatsApp)

## Kebutuhan Non Fungsional

a) Usability & Konsistensi Visual: Antarmuka bersih, terstruktur, dan responsif untuk berbagai ukuran layar dengan hierarki warna dan tipografi yang konsisten di seluruh bagian halaman.

b) Performance & Speed: Kecepatan muat halaman (load time) di bawah 2 detik menggunakan pemrosesan filter sisi klien (client-side rendering).

c) Verification: Verifikasi QR Code dua arah guna menjamin keabsahan transaksi serah terima antara mitra resto, relawan, dan penerima.

d) Keamanan & Kepercayaan Pengguna: Penerapan checklist keamanan pangan (standar BPOM), alur verifikasi penerima manfaat/akun, serta kejelasan informasi batas waktu konsumsi.

## Waktu Penggunaan Sistem

a) Waktu Operasional Sistem (Siklus Harian): Platform digunakan secara real-time, dengan puncak aktivitas transaksi terjadi pada menjelang akhir jam operasional vendor (sore hingga malam hari) saat pelaku usaha mulai mendata stok makanan berlebih yang mendekati batas waktu konsumsi (expiry).

b) Linimasa Pengembangan Proyek: Proyek ini disusun dan dikembangkan pada tahun 2026 sebagai bagian dari perancangan sistem web berbasis SDGs.


## Wilayah Penggunaan Sistem

a) Cakupan Wilayah: Diterapkan pada kawasan perkotaan dan permukiman di wilayah JABODETABEK yang memiliki kepadatan bisnis kuliner (restoran, bakery, supermarket) sekaligus kantong komunitas sosial/panti asuhan serta jaringan titik kumpul (Food Bank wilayah).

b) Lingkungan Akses Digital: Berbasis web (browser-based) dengan tata letak responsif Bootstrap yang dapat diakses melalui perangkat smartphone (untuk mobilitas konsumen dan relawan di lapangan) maupun komputer desktop/PC (untuk manajemen operasional mitra restoran dan administrator).

## Bagaimana Implementasi dan Mekanisme Sistem

Alur kerja dan mekanisme penyaluran pangan pada platform PanganBerbagi berjalan melalui tahapan terintegrasi berikut:

a) Input Surplus oleh Mitra: Mitra restoran/toko roti masuk ke modul Salurkan Makanan, menginput detail makanan berlebih, batas waktu pengambilan, serta memilih skema distribusi (Donasi Gratis atau Diskon Cost-Recovery 50% - 70%).

b) Publikasi & Pemfilteran Katalog: Produk yang diunggah langsung tampil pada Katalog Pangan Hibrida dalam tata letak responsif berbasis Bootstrap. Pengguna dapat memfilter item berdasarkan skema harga, kategori makanan (Roti, Makanan Matang, Sayur/Buah, Sembako), serta lokasi toko terdekat untuk memudahkan penjemputan mandiri.

-  Konsumen Umum memilih paket makanan berdiskon (50% - 70%), sedangkan Panti/Komunitas Sosial mengklaim paket donasi gratis (100%).

-  Setelah reservasi dikonfirmasi, sistem secara otomatis menampilkan Tiket QR Virtual melalui komponen Bootstrap Modal yang memuat ID Tiket unik, lokasi toko, dan jadwal batas waktu pengambilan mandiri (self-pickup).

d) Pengambilan Mandiri (Self-Pickup) & Verifikasi QR Dua Arah: Pengguna (konsumen umum maupun perwakilan panti/komunitas) datang langsung ke lokasi mitra/toko sesuai jadwal pada tiket. Petugas toko dan pengguna melakukan verifikasi kode QR dua arah untuk memastikan keabsahan klaim sebelum makanan diserahkan dan melewati batas waktu expiry.

e) Pengelolaan Pangan Kering & Edukasi Mandiri: Untuk penyaluran bahan pangan kering (sembako) skala komunitas, mitra atau donatur dapat menyalurkannya langsung ke titik kumpul Food Bank wilayah terdekat. Di sisi lain, pengguna rumah tangga juga difasilitasi modul Resep Zero-Waste sebagai panduan mengolah sisa bahan dapur agar tidak terbuang.

f) Mekanisme Relawan (Rescue Heroes): Untuk memberikan layanan khusus berbasis komunitas melalui fitur Rescue Heroes sebagai jasa pengantaran pangan surplus dari mitra/donatur menuju Pos Pangan komunitas.

- Pendaftaran dan Validasi Relawan: Calon relawan mendaftar melalui formulir Gabung tim Rescue Heroes dengan mengisi nama lengkap, moda transportasi (seperti sepeda motor), dan nomor WhatsApp aktif untuk koordinasi operasional.

- Pemilihan Misi Pengantaran ke Pos Pangan: Sistem menampilkan daftar misi berstatus Terbuka yang memuat informasi item makanan, jumlah porsi, lokasi penjemputan (mitra/donatur), titik tujuan Pos Pangan sekretariat RT/RW, atau warung mitra), serta estimasi jarak. Relawan dapat memilih dan mengambil tugas melalui tombol Ambil misi. (seperti balai warga,

- Penjemputan, Pengantaran, dan Verifikasi di Pos Pangan: Relawan mengambil paket pangan dari lokasi mitra sesuai jadwal sebelum batas waktu expiry dengan verifikasi tiket/kode reservasi, lalu mengantarkannya langsung ke titik Pos Pangan tujuan. Serah terima di Pos Pangan kemudian diverifikasi agar pangan dapat segera disalurkan atau diambil sesuai ketentuan pos setempat.


## DATA LAPANGAN

## Besaran Limbah Pangan (Food Loss and Waste) di Indonesia

Pengembangan platform ini didasari oleh urgensi masalah usaha, krisis pemborosan pangan (Food Loss and Waste / FLW), dampak ekonomi, serta kerusakan lingkungan.

a) Masalah Operasional Usaha: Vendor makanan kerap membuang sisa makanan layak konsumsi di akhir jam operasional akibat kesalahan estimasi produksi, fluktuasi pembeli, dan harga jual awal yang kurang terjangkau.

b) Tingginya Timbulan Sampah Makanan (Data Bappenas & KLHK):

- Indonesia menghasilkan sekitar 23-48 juta ton limbah pangan (Food Loss and Waste) setiap tahunnya.

- Setiap individu di Indonesia rata-rata menyumbang 115-184 kg sampah makanan per tahun.

- Berdasarkan data Sistem Informasi Pengelolaan Sampah Nasional (SIPSN), sisa makanan mendominasi komposisi sampah nasional hingga mencapai 40%.
  
c) Potensi Penyelamatan Gizi & Kemanusiaan

- Pangan yang terbuang di Indonesia mengandung nilai energi sebesar 618–989 kkal per kapita/hari

- Jika diselamatkan dan didistribusikan secara optimal, pangan tersebut mampu memberi makan 61-125 juta jiwa atau setara dengan 29%-47% populasi Indonesia.
  
d) Kerugian Ekonomi & Dampak Iklim

- Pemborosan pangan menimbulkan kerugian finansial negara sebesar Rp 213 - 551 triliun per tahun (setara dengan 4%-5% Produk Domestik Bruto / PDB Indonesia)

- Penumpukan sisa makanan di Tempat Pembuangan Akhir (TPA) menghasilkan emisi gas rumah kaca, terutama gas metana, yang mempercepat pemanasan global.

## REFERENSI

Sumber & Tautan: 
https://www.cnnindonesia.com/ekonomi/20210609112128-532-652051/bappenas-limbah-makanan-ri-capai-48-juta-ton-per-tahun

Sumber & Tautan: 
https://tasikmalaya.pom.go.id/berita/penanggulangan-food-loss-dan-food-waste-perkuat-ketahanan-pangan-nasional	

Sumber & Tautan:
https://www.cnnindonesia.com/teknologi/20260929135258-641-1409499/buang-buang-makanan-ternyata-bikin-bumi-makin-panas-ini-alasannya	

Sumber & Tautan:
https://investortrust.id/esg/118768/pangan-terbuang-ri-capai-48-juta-ton-kerugian-rp-551-triliun	

Sumber & Tautan: https:
https://nasional.kompas.com/read/2026/09/29/11000091/mengabaikan-makanan-meruntuhkan-masa-depan?page=2
