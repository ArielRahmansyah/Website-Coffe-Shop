// ==================================
// FITUR 1: PERUBAHAN TEKS
// ==================================

function ubahTeks() {

    document.getElementById("judul").innerText =
        "Nikmati Kopi Terbaik Bersama Kopi Senja";

    document.getElementById("deskripsi").innerText =
        "Kopi Senja hadir memberikan pengalaman menikmati kopi berkualitas dengan suasana nyaman dan menyenangkan.";

}


// ==================================
// FITUR 2: MENAMPILKAN ARRAY
// ==================================

// Membuat array keunggulan kedai
const keunggulan = [

    {
        judul: "☕ Kopi Berkualitas",
        deskripsi: "Menggunakan bahan kopi pilihan dengan cita rasa yang nikmat."
    },

    {
        judul: "🏠 Suasana Nyaman",
        deskripsi: "Tempat yang nyaman untuk bersantai, belajar, atau berkumpul."
    },

    {
        judul: "💰 Harga Terjangkau",
        deskripsi: "Menawarkan minuman dan makanan dengan harga yang ramah di kantong."
    }

];


// Mengambil elemen HTML
const daftar = document.getElementById("daftarKeunggulan");


// Menampilkan data array ke halaman HTML
keunggulan.forEach(function(item) {

    daftar.innerHTML += `
        <div>
            <h3>${item.judul}</h3>
            <p>${item.deskripsi}</p>
        </div>
    `;

});


// ==================================
// FITUR 3: FORMULIR RESERVASI
// ==================================

const form = document.getElementById("formReservasi");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mengambil data dari formulir
    const nama = document.getElementById("nama").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;
    const orang = document.getElementById("orang").value;
    const catatan = document.getElementById("catatan").value;
    const bukti = document.getElementById("bukti").files[0];


    // Menyimpan data ke sessionStorage
    sessionStorage.setItem("nama", nama);
    sessionStorage.setItem("whatsapp", whatsapp);
    sessionStorage.setItem("tanggal", tanggal);
    sessionStorage.setItem("jam", jam);
    sessionStorage.setItem("orang", orang);
    sessionStorage.setItem("catatan", catatan);
    sessionStorage.setItem("bukti", bukti ? bukti.name : "Tidak ada file");


    // Berpindah ke halaman hasil reservasi
    window.location.href = "hasilreservasi.html";

});
