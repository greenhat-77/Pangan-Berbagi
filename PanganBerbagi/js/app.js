/* ===== Konfigurasi ===== */
const YT_ID = 'izGmO5mqtic'; // video edukasi YouTube
const DEMO_PANTI_CODE = /^PANTI-[A-Z]{3,}-\d{3}$/; // simulasi; nanti divalidasi backend/admin

/* ===== Data dummy (front-end only) ===== */
const items = [
 {id:1,name:'15 Porsi Rice Bowl Ayam Teriyaki',vendor:'Bento Express Margonda',cat:'Makanan Matang',type:'gratis',hrs:12,area:'Depok',lat:-6.3728,lng:106.8346,emo:'🍱',bg:'#fde9c9',img:'images/ayam teriyaki.jpg'},
 {id:2,name:'Roti Tawar & Croissant',vendor:'Bakery Beji',cat:'Roti & Bakery',type:'diskon',orig:35000,price:12000,hrs:5,area:'Depok',lat:-6.3690,lng:106.8240,emo:'🥐',bg:'#fbe3d2',img:'images/roti tawar.jpg'},
 {id:3,name:'10 kg Jeruk Sunkist Segar',vendor:'Supermarket BuahKu Cinere',cat:'Sayur & Buah',type:'gratis',hrs:12,area:'Depok',lat:-6.3270,lng:106.7830,emo:'🍊',bg:'#ffe8b8',img:'images/sunkist.jpg'},
 {id:4,name:'20 Porsi Nasi Padang Lengkap',vendor:'RM Minang Berkah',cat:'Makanan Matang',type:'diskon',orig:28000,price:10000,hrs:11,area:'Depok',lat:-6.4000,lng:106.8180,emo:'🍛',bg:'#fcd9c4',img:'images/nasi padang.png'},
 {id:5,name:'5 Dus Biskuit & Pangan Kering',vendor:'Gudang Logistik Cimanggis',cat:'Sembako',type:'gratis',hrs:12,area:'Depok',lat:-6.3770,lng:106.8830,emo:'📦',bg:'#e5eadf',img:'images/biskuit.jpg'},
 {id:6,name:'Donat Assorted Lusinan (12 pcs)',vendor:'Donut Corner Pasar Minggu',cat:'Roti & Bakery',type:'diskon',orig:45000,price:15000,hrs:5,area:'Jakarta',lat:-6.2840,lng:106.8450,emo:'🍩',bg:'#fbd5e5',img:'images/donat.jpg'},
 {id:7,name:'8 Kg Sayur Hijau Campur',vendor:'Pasar Tani Bogor',cat:'Sayur & Buah',type:'diskon',orig:60000,price:20000,hrs:8,area:'Bogor',lat:-6.5950,lng:106.8060,emo:'🥬',bg:'#d6f0d9',img:'images/sayur.jpg'},
 {id:8,name:'25 Porsi Nasi Ayam Bakar',vendor:'Katering Sari BSD',cat:'Makanan Matang',type:'gratis',hrs:6,area:'Tangerang',lat:-6.3017,lng:106.6528,emo:'🍗',bg:'#fde2c4',img:'images/ayam bakar.jpg'},
 {id:9,name:'Roti Manis Aneka (20 pcs)',vendor:'Bakery Summarecon Bekasi',cat:'Roti & Bakery',type:'diskon',orig:60000,price:20000,hrs:4,area:'Bekasi',lat:-6.2230,lng:106.9990,emo:'🥖',bg:'#f9ddc8',img:'images/roti.jpg'}
];
const pos = [
 {name:'Pos Pangan Sekretariat RW 05 Beji',lat:-6.3640,lng:106.8300,pj:'Bu Hj. Siti',jam:'14:00–20:00',st:'Butuh pasokan makanan'},
 {name:'Pos Pangan Warung Mitra Cinere',lat:-6.3350,lng:106.7900,pj:'Bu Rina',jam:'15:00–21:00',st:'8 porsi siap diambil'},
 {name:'Pos Pangan Balai Warga Tebet',lat:-6.2260,lng:106.8530,pj:'Pak Anton',jam:'16:00–20:00',st:'10 porsi siap diambil'},
 {name:'Pos Pangan Sekretariat RW Bintaro',lat:-6.2780,lng:106.7300,pj:'Bu Dewi',jam:'15:00–20:00',st:'Butuh pasokan makanan'},
 {name:'Pos Pangan Warung Mitra Bekasi Barat',lat:-6.2350,lng:106.9900,pj:'Pak Joko',jam:'14:00–19:00',st:'6 porsi siap diambil'}
];
const missions = [
 {t:'15 Porsi Nasi Bento Ayam',from:'Bento Express Margonda',to:'Pos Pangan RW 05 Beji',km:'2.3'}
];

const $=s=>document.querySelector(s), rp=n=>'Rp'+n.toLocaleString('id-ID');
let user = JSON.parse(localStorage.getItem('pbUser')||'null'); // {role:'umum'|'panti', name}
const modal = new bootstrap.Modal('#claimModal');
const toast = m=>{$('#toastMsg').textContent=m;bootstrap.Toast.getOrCreateInstance('#toast').show()};

/* ===== Counter hero ===== */
document.querySelectorAll('[data-count]').forEach(el=>{
  const end=+el.dataset.count, dec=+(el.dataset.dec||0); let t=0;
  const id=setInterval(()=>{t+=.04;if(t>=1){t=1;clearInterval(id)}el.textContent=(end*t).toLocaleString('id-ID',{maximumFractionDigits:dec,minimumFractionDigits:dec})},30);
});

/* ===== Video YouTube (lazy) ===== */
$('#videoBox').addEventListener('click',e=>{
  e.currentTarget.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1" title="Video edukasi" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
});

/* ===== Role / verifikasi ===== */
function renderRole(){
  $('#roleChip span').textContent = user ? (user.role==='panti'?'Panti terverifikasi: ':'Warga: ')+user.name : 'Belum masuk';
  $('#roleBtn').textContent = user ? 'Ganti' : 'Verifikasi';
}
function roleForm(after){
  $('#mTitle').textContent='Kamu klaim sebagai siapa?';
  $('#mBody').innerHTML=`
  <ul class="nav nav-pills nav-fill mb-3" id="tabs"><li class="nav-item"><button class="nav-link active" data-r="umum">Masyarakat umum</button></li><li class="nav-item"><button class="nav-link" data-r="panti">Panti / lembaga sosial</button></li></ul>
  <form id="roleForm" novalidate>
    <input class="form-control pb-input mb-2" id="rName" placeholder="Nama lengkap" required>
    <input class="form-control pb-input mb-2" id="rWa" placeholder="No. WhatsApp" inputmode="tel" required>
    <div id="pantiFields" class="d-none">
      <input class="form-control pb-input mb-2" id="rOrg" placeholder="Nama panti / lembaga">
      <input class="form-control pb-input mb-1" id="rCode" placeholder="Kode verifikasi (mis. PANTI-DPK-001)">
      <small class="text-muted d-block mb-2">Kode diberikan admin setelah surat legalitas lembaga diperiksa. Belum punya? Ajukan lewat WhatsApp admin.</small>
      <input type="file" class="form-control pb-input mb-2" accept=".pdf,image/*"><small class="text-muted">Unggah surat keterangan / SK lembaga</small>
    </div>
    <div class="text-danger small d-none" id="rErr"></div>
    <button class="btn btn-pb w-100 mt-3">Lanjutkan</button>
  </form>`;
  let role='umum';
  document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>{
    role=b.dataset.r;document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('active',x===b));
    $('#pantiFields').classList.toggle('d-none',role!=='panti');
  });
  $('#roleForm').onsubmit=e=>{
    e.preventDefault();const err=$('#rErr');err.classList.add('d-none');
    if(!$('#rName').value.trim()||!$('#rWa').value.trim()){err.textContent='Nama dan WhatsApp wajib diisi.';err.classList.remove('d-none');return}
    if(role==='panti'&&!DEMO_PANTI_CODE.test($('#rCode').value.trim().toUpperCase())){err.textContent='Kode verifikasi tidak valid. Coba PANTI-DPK-001 untuk demo.';err.classList.remove('d-none');return}
    user={role,name:role==='panti'?($('#rOrg').value||$('#rName').value):$('#rName').value};
    localStorage.setItem('pbUser',JSON.stringify(user));/* ===== Edukasi resep ===== */
const recipes=[
 {id:'puding',emo:'🍞',img:'images/Puding Roti Tawar Karamel.jpg',tag:'Roti sisa',name:'Puding Roti Tawar Karamel',desc:'Roti tawar keras jadi puding lembut dengan susu dan telur.',time:'60 menit',por:'6 porsi',
  bahan:['6 lembar roti tawar yang mulai keras (±200 g)','500 ml susu cair','3 butir telur','80 g gula pasir','1 sdt vanila','Sejumput garam','Karamel: 3 sdm gula pasir + 2 sdm air'],
  langkah:['Buat karamel: panaskan gula dan air di api kecil tanpa diaduk sampai kecokelatan, lalu tuang ke dasar loyang.','Sobek roti menjadi potongan kecil dan susun di atas karamel.','Kocok susu, telur, gula, vanila, dan garam sampai gula larut.','Tuang adonan ke roti dan diamkan 10 menit supaya roti meresap.','Kukus 35–40 menit (atau panggang au bain-marie 170°C selama 35–40 menit) sampai set dan tusuk gigi bersih.','Dinginkan, balik ke piring, dan sajikan hangat atau dingin.'],
  tips:'Simpan di kulkas maksimal 2–3 hari. Roti yang sudah berjamur jangan dipakai.'},
 {id:'bolu',emo:'🍌',img:'images/Bolu Pisang dari Pisang Sisa.jpg',tag:'Pisang sangat matang',name:'Bolu Pisang dari Pisang Sisa',desc:'Pisang berkulit menghitam justru paling manis untuk bolu.',time:'70 menit',por:'8 potong',
  bahan:['3 pisang sangat matang (±300 g), lumatkan','2 butir telur','100 g gula (boleh dikurangi karena pisang sudah manis)','100 ml minyak sayur','200 g tepung terigu','1 sdt baking powder','1/2 sdt soda kue','Sejumput garam'],
  langkah:['Panaskan oven 175°C dan olesi loyang dengan sedikit minyak.','Kocok telur dan gula sampai agak pucat, lalu masukkan minyak.','Tambahkan pisang lumat dan aduk rata.','Ayak tepung, baking powder, soda kue, dan garam; masukkan bertahap sambil diaduk lipat.','Tuang ke loyang dan panggang 40–45 menit sampai tusuk gigi bersih.','Dinginkan 15 menit sebelum dikeluarkan dan dipotong.'],
  tips:'Pisang beku juga bisa dipakai. Simpan di wadah tertutup suhu ruang maksimal 2 hari atau kulkas 5 hari.'},
 {id:'kaldu',emo:'🥕',img:'images/Kaldu Sayur dari Sisa Dapur.jpg',tag:'Batang sayur',name:'Kaldu Sayur dari Sisa Dapur',desc:'Rebus batang wortel dan seledri jadi kaldu gurih alami.',time:'55 menit',por:'±1,5 liter',
  bahan:['2 gelas potongan sisa sayur bersih (batang wortel, seledri, daun bawang, kulit bawang bombay, bonggol brokoli)','2 liter air','1 sdt garam','5 butir lada','1 lembar daun salam'],
  langkah:['Cuci semua sisa sayur sampai bersih.','Masukkan sayur, lada, dan daun salam ke panci bersama air.','Didihkan, lalu kecilkan api dan rebus 45 menit tanpa ditutup rapat.','Saring kaldu, lalu beri garam secukupnya.','Gunakan untuk sup, tumisan, atau masak nasi.'],
  tips:'Hindari kulit kentang kehijauan dan sayur yang sudah busuk. Simpan di kulkas 4 hari atau beku sampai 3 bulan.'}
];
$('#recipes').innerHTML=recipes.map(r=>`<div class="col-md-4"><div class="recipe" data-r="${r.id}" role="button">
 <div class="recipe-img"><span class="emo">${r.emo}</span><img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.remove()"></div>
 <small class="text-pb fw-bold">${r.tag}</small><h6 class="mt-1">${r.name}</h6><p>${r.desc}</p>
 <div class="small text-muted mb-2"><i class="bi bi-clock"></i> ${r.time} · <i class="bi bi-people"></i> ${r.por}</div>
 <span class="text-pb fw-bold small">Lihat resep lengkap <i class="bi bi-arrow-right"></i></span></div></div>`).join('');
document.querySelectorAll('.recipe').forEach(el=>el.onclick=()=>{
  const r=recipes.find(x=>x.id===el.dataset.r);
  $('#mTitle').textContent=r.name;
  $('#mBody').innerHTML=`<div class="recipe-img mb-3" style="height:190px"><span class="emo">${r.emo}</span><img src="${r.img}" alt="${r.name}" onerror="this.remove()"></div>
  <p class="small text-muted"><i class="bi bi-clock"></i> ${r.time} · <i class="bi bi-people"></i> ${r.por}</p>
  <h6 class="fw-bold">Bahan</h6><ul class="small">${r.bahan.map(b=>`<li>${b}</li>`).join('')}</ul>
  <h6 class="fw-bold">Langkah</h6><ol class="small">${r.langkah.map(b=>`<li class="mb-1">${b}</li>`).join('')}</ol>
  <div class="tips small"><b>Tips penyimpanan:</b> ${r.tips}</div>`;
  modal.show();
});

renderRole();renderGrid();
    after?claim(after):modal.hide();
  };
  modal.show();
}
$('#roleBtn').onclick=e=>{e.preventDefault();roleForm()};

/* ===== Katalog ===== */
function renderGrid(){
  const q=$('#q').value.toLowerCase(),t=$('#fType').value,c=$('#fCat').value,a=$('#fArea').value;
  const list=items.filter(i=>(!q||(i.name+i.vendor).toLowerCase().includes(q))&&(!t||i.type===t)&&(!c||i.cat===c)&&(!a||i.area===a));
  $('#empty').classList.toggle('d-none',list.length>0);
  $('#grid').innerHTML=list.map(i=>{
    const g=i.type==='gratis', lock=g&&(!user||user.role!=='panti');
    return `<div class="col-md-6 col-lg-4"><div class="food">
      <div class="img" style="background:${i.bg}"><span>${i.emo}</span>${i.img?`<img src="${i.img}" alt="${i.name}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onload="this.previousElementSibling.style.display='none'" onerror="this.remove()">`:``}<span class="badge-pb ${g?'g':'d'}">${g?'100% Gratis (Panti)':'Diskon '+Math.round((1-i.price/i.orig)*100)+'%'}</span><span class="timer"><i class="bi bi-clock"></i> Sisa ${i.hrs} jam</span></div>
      <div class="body"><small class="text-muted">${i.cat} · ${i.area}</small><h6 class="fw-bold my-1">${i.name}</h6><small class="text-muted"><i class="bi bi-shop"></i> ${i.vendor}</small>
      <div class="d-flex justify-content-between align-items-center mt-auto pt-3"><div>${g?'<b>Rp0</b> <small class="text-muted">(Donasi)</small>':`<span class="old d-block">${rp(i.orig)}</span><b>${rp(i.price)}</b>`}</div>
      <button class="btn ${lock?'btn-outline-pb':'btn-pb'} btn-sm" data-id="${i.id}">${g?(lock?'<i class="bi bi-lock"></i> Klaim':'Klaim Donasi'):'Reservasi'}</button></div></div></div></div>`}).join('');
  document.querySelectorAll('#grid button').forEach(b=>b.onclick=()=>claim(+b.dataset.id));
}
['#q','#fType','#fCat','#fArea'].forEach(s=>$(s).addEventListener('input',renderGrid));

function claim(id){
  const i=items.find(x=>x.id===id);
  if(!user){roleForm(id);return}
  if(i.type==='gratis'&&user.role!=='panti'){
    $('#mTitle').textContent='Khusus panti terverifikasi';
    $('#mBody').innerHTML=`<p>Donasi gratis hanya untuk panti, dapur umum, dan lembaga sosial yang sudah diverifikasi admin, agar tepat sasaran.</p><p class="small text-muted">Kamu masuk sebagai warga umum. Coba pilih makanan berdiskon atau ganti identitas.</p><button class="btn btn-pb w-100 mb-2" id="toDisc">Lihat makanan diskon</button><button class="btn btn-outline-pb w-100" id="sw">Saya dari panti/lembaga</button>`;
    $('#toDisc').onclick=()=>{modal.hide();$('#fType').value='diskon';renderGrid();location.hash='#makanan'};
    $('#sw').onclick=()=>roleForm(id);modal.show();return;
  }
  const code='PB-'+Math.random().toString(36).slice(2,8).toUpperCase();
  const pick=new Date(Date.now()+3600e3).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  $('#mTitle').textContent='Tiket QR kamu';
  $('#mBody').innerHTML=`<div class="ticket"><b>${i.name}</b><br><small class="text-muted">${i.vendor}</small><div class="ticket-qr" id="qr"></div>
  <div class="fw-bold">${code}</div><small class="text-muted">Jemput sebelum ${pick} WIB · a.n. ${user.name}</small></div>
  <p class="small text-muted mt-3 mb-0"><i class="bi bi-shield-check"></i> Tunjukkan QR ini ke mitra. ${user.role==='panti'?'Bawa surat tugas lembaga.':'Bawa identitas diri.'} Mitra memindai QR untuk memvalidasi.</p>`;
  new QRCode($('#qr'),{text:JSON.stringify({code,item:i.id,role:user.role}),width:160,height:160});
  modal.show();
}

/* ===== Peta Leaflet ===== */
const map=L.map('map').setView([-6.2800,106.8200],10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
const dot=c=>L.divIcon({className:'',html:`<div style="width:22px;height:22px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${c};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>`,iconSize:[22,22],iconAnchor:[11,22]});
items.forEach(i=>L.marker([i.lat,i.lng],{icon:dot('#16a34a')}).addTo(map).bindPopup(`<b>${i.name}</b><br>${i.vendor}<br>${i.type==='gratis'?'Gratis (panti)':rp(i.price)}`));
const markers=pos.map(p=>L.marker([p.lat,p.lng],{icon:dot('#f97316')}).addTo(map).bindPopup(`<b>${p.name}</b><br>PJ: ${p.pj}<br>${p.jam} WIB`));
$('#posList').innerHTML=pos.map((p,k)=>`<div class="pos" data-k="${k}"><b class="small">${p.name}</b><br><small class="text-muted">${p.st} · ${p.jam}</small></div>`).join('');
document.querySelectorAll('.pos').forEach(el=>el.onclick=()=>{const p=pos[el.dataset.k];map.flyTo([p.lat,p.lng],15);markers[el.dataset.k].openPopup()});
$('#locate').onclick=()=>navigator.geolocation?navigator.geolocation.getCurrentPosition(p=>{map.flyTo([p.coords.latitude,p.coords.longitude],14);L.circleMarker([p.coords.latitude,p.coords.longitude],{color:'#2563eb'}).addTo(map).bindPopup('Lokasimu').openPopup()},()=>toast('Izin lokasi ditolak.')):toast('Browser tidak mendukung lokasi.');

/* ===== Newsletter footer ===== */
$('#footerNews').onsubmit=e=>{e.preventDefault();const v=$('#footerEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){toast('Masukkan email yang valid.');return}
  toast('Terima kasih sudah bergabung! (demo)');e.target.reset()};

/* ===== Misi relawan ===== */
$('#missions').innerHTML=missions.map((m,k)=>`<div class="col-md-6"><div class="mission"><div class="d-flex justify-content-between"><span class="badge text-bg-success">Terbuka</span><small class="text-muted">${m.km} km</small></div><h6 class="fw-bold mt-2">${m.t}</h6><small class="d-block"><i class="bi bi-box-arrow-up text-pb"></i> ${m.from}</small><small class="d-block mb-3"><i class="bi bi-box-arrow-in-down text-pb"></i> ${m.to}</small><button class="btn btn-pb btn-sm w-100" data-m="${k}">Ambil misi</button></div></div>`).join('');
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{b.textContent='Misi diambil ✓';b.disabled=true;toast('Misi diambil. Detail dikirim ke WhatsApp.')});

/* ===== Form mitra & relawan ===== */
$('#postForm').addEventListener('change',()=>{const d=postForm.scheme.value==='diskon';$('#priceBox').classList.toggle('d-none',!d);$('#priceBox2').classList.toggle('d-none',!d)});
$('#postForm').onsubmit=e=>{e.preventDefault();const f=e.target;
  const ok=f.vendor.value&&f.name.value&&f.qty.value&&f.exp.value&&[...f.querySelectorAll('.chk')].every(c=>c.checked);
  if(!ok){toast('Lengkapi form dan centang semua checklist keamanan.');return}
  toast('Surplus berhasil diposting (demo).');f.reset()};
$('#volForm').onsubmit=e=>{e.preventDefault();toast('Terima kasih! Tim kami akan menghubungi lewat WhatsApp.');e.target.reset()};

/* ===== Kalkulator dampak ===== */
$('#calc').onclick=()=>{const kg=+$('#kg').value;if(!kg)return;
  $('#calcOut').innerHTML=`<b>${kg} kg</b> makanan ≈ <b>${Math.round(kg*2.5)} porsi</b> dan mencegah sekitar <b>${(kg*2.5).toFixed(1)} kg CO₂e</b> (estimasi sederhana).`};

/* ===== Edukasi resep ===== */
const recipes=[
 {id:'puding',emo:'🍞',img:'images/Puding Roti Tawar Karamel.jpg',tag:'Roti sisa',name:'Puding Roti Tawar Karamel',desc:'Roti tawar keras jadi puding lembut dengan susu dan telur.',time:'60 menit',por:'6 porsi',
  bahan:['6 lembar roti tawar yang mulai keras (±200 g)','500 ml susu cair','3 butir telur','80 g gula pasir','1 sdt vanila','Sejumput garam','Karamel: 3 sdm gula pasir + 2 sdm air'],
  langkah:['Buat karamel: panaskan gula dan air di api kecil tanpa diaduk sampai kecokelatan, lalu tuang ke dasar loyang.','Sobek roti menjadi potongan kecil dan susun di atas karamel.','Kocok susu, telur, gula, vanila, dan garam sampai gula larut.','Tuang adonan ke roti dan diamkan 10 menit supaya roti meresap.','Kukus 35–40 menit (atau panggang au bain-marie 170°C selama 35–40 menit) sampai set dan tusuk gigi bersih.','Dinginkan, balik ke piring, dan sajikan hangat atau dingin.'],
  tips:'Simpan di kulkas maksimal 2–3 hari. Roti yang sudah berjamur jangan dipakai.'},
 {id:'bolu',emo:'🍌',img:'images/Bolu Pisang dari Pisang Sisa.jpg',tag:'Pisang sangat matang',name:'Bolu Pisang dari Pisang Sisa',desc:'Pisang berkulit menghitam justru paling manis untuk bolu.',time:'70 menit',por:'8 potong',
  bahan:['3 pisang sangat matang (±300 g), lumatkan','2 butir telur','100 g gula (boleh dikurangi karena pisang sudah manis)','100 ml minyak sayur','200 g tepung terigu','1 sdt baking powder','1/2 sdt soda kue','Sejumput garam'],
  langkah:['Panaskan oven 175°C dan olesi loyang dengan sedikit minyak.','Kocok telur dan gula sampai agak pucat, lalu masukkan minyak.','Tambahkan pisang lumat dan aduk rata.','Ayak tepung, baking powder, soda kue, dan garam; masukkan bertahap sambil diaduk lipat.','Tuang ke loyang dan panggang 40–45 menit sampai tusuk gigi bersih.','Dinginkan 15 menit sebelum dikeluarkan dan dipotong.'],
  tips:'Pisang beku juga bisa dipakai. Simpan di wadah tertutup suhu ruang maksimal 2 hari atau kulkas 5 hari.'},
 {id:'kaldu',emo:'🥕',img:'images/Kaldu Sayur dari Sisa Dapur.jpg',tag:'Batang sayur',name:'Kaldu Sayur dari Sisa Dapur',desc:'Rebus batang wortel dan seledri jadi kaldu gurih alami.',time:'55 menit',por:'±1,5 liter',
  bahan:['2 gelas potongan sisa sayur bersih (batang wortel, seledri, daun bawang, kulit bawang bombay, bonggol brokoli)','2 liter air','1 sdt garam','5 butir lada','1 lembar daun salam'],
  langkah:['Cuci semua sisa sayur sampai bersih.','Masukkan sayur, lada, dan daun salam ke panci bersama air.','Didihkan, lalu kecilkan api dan rebus 45 menit tanpa ditutup rapat.','Saring kaldu, lalu beri garam secukupnya.','Gunakan untuk sup, tumisan, atau masak nasi.'],
  tips:'Hindari kulit kentang kehijauan dan sayur yang sudah busuk. Simpan di kulkas 4 hari atau beku sampai 3 bulan.'}
];
$('#recipes').innerHTML=recipes.map(r=>`<div class="col-md-4"><div class="recipe" data-r="${r.id}" role="button">
 <div class="recipe-img"><span class="emo">${r.emo}</span><img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.remove()"></div>
 <small class="text-pb fw-bold">${r.tag}</small><h6 class="mt-1">${r.name}</h6><p>${r.desc}</p>
 <div class="small text-muted mb-2"><i class="bi bi-clock"></i> ${r.time} · <i class="bi bi-people"></i> ${r.por}</div>
 <span class="text-pb fw-bold small">Lihat resep lengkap <i class="bi bi-arrow-right"></i></span></div></div>`).join('');
document.querySelectorAll('.recipe').forEach(el=>el.onclick=()=>{
  const r=recipes.find(x=>x.id===el.dataset.r);
  $('#mTitle').textContent=r.name;
  $('#mBody').innerHTML=`<div class="recipe-img mb-3" style="height:190px"><span class="emo">${r.emo}</span><img src="${r.img}" alt="${r.name}" onerror="this.remove()"></div>
  <p class="small text-muted"><i class="bi bi-clock"></i> ${r.time} · <i class="bi bi-people"></i> ${r.por}</p>
  <h6 class="fw-bold">Bahan</h6><ul class="small">${r.bahan.map(b=>`<li>${b}</li>`).join('')}</ul>
  <h6 class="fw-bold">Langkah</h6><ol class="small">${r.langkah.map(b=>`<li class="mb-1">${b}</li>`).join('')}</ol>
  <div class="tips small"><b>Tips penyimpanan:</b> ${r.tips}</div>`;
  modal.show();
});

renderRole();renderGrid();