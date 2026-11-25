function ubahTeks() {

    document.getElementById("judul").innerText =
        "Selamat Datang di Kopi Senja";

    document.getElementById("deskripsi").innerText =
        "Kopi Senja merupakan kedai kopi yang menyediakan berbagai pilihan makanan dan minuman dengan suasana nyaman untuk bersantai, belajar, dan berkumpul bersama teman maupun keluarga.";

}


const informasi = [

    {
        judul: "🏠 Tentang Kopi Senja",
        deskripsi: "Tempat nyaman untuk menikmati kopi bersama teman dan keluarga."
    },

    {
        judul: "📍 Lokasi Kopi Senja",
        deskripsi: "Jl. Pendidikan No. 10, Mataram, Nusa Tenggara Barat."
    },

    {
        judul: "🕘 Jam Operasional",
        deskripsi: "Senin - Jumat: 09.00 - 22.00. Sabtu dan Minggu: Libur."
    }

];



const daftar = document.getElementById("daftarInformasi");

informasi.forEach(function(item) {

    daftar.innerHTML += `
        <div>
            <h3>${item.judul}</h3>
            <p>${item.deskripsi}</p>
        </div>
    `;

});


document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let meja = document.getElementById("meja").value;
    let makanan = document.getElementById("makananSelect").value;
    let minuman = document.getElementById("minumanSelect").value;
    let jumlah = document.getElementById("jumlah").value;
    let catatan = document.getElementById("catatan").value;

    let jenis = document.querySelector(
        'input[name="pesanan"]:checked'
    ).value;


    const data = {
        nama: nama,
        meja: meja,
        makanan: makanan,
        minuman: minuman,
        jumlah: jumlah,
        jenis: jenis,
        catatan: catatan
    };

    localStorage.setItem("pesanan", JSON.stringify(data));


    document.getElementById("hasil").innerHTML = `
        <p>Nama Pelanggan: ${nama}</p>
        <p>Nomor Meja: ${meja}</p>
        <p>Makanan: ${makanan}</p>
        <p>Minuman: ${minuman}</p>
        <p>Jumlah Pesanan: ${jumlah}</p>
        <p>Jenis Pesanan: ${jenis}</p>
        <p>Catatan: ${catatan || "-"}</p>
    `;

    document.querySelectorAll("section").forEach(function(s) {
        s.style.display = "none";
    });

    document.getElementById("halamanHasil").style.display = "block";

});



function kembali() {

    document.querySelectorAll("section").forEach(function(s) {
        s.style.display = "block";
    });

    document.getElementById("halamanHasil").style.display = "none";

    document.getElementById("orderForm").reset();

}
