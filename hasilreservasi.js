// Mengambil data dari sessionStorage
document.getElementById("nama").textContent =
    sessionStorage.getItem("nama");

document.getElementById("whatsapp").textContent =
    sessionStorage.getItem("whatsapp");

document.getElementById("tanggal").textContent =
    sessionStorage.getItem("tanggal");

document.getElementById("jam").textContent =
    sessionStorage.getItem("jam");

document.getElementById("orang").textContent =
    sessionStorage.getItem("orang");

document.getElementById("catatan").textContent =
    sessionStorage.getItem("catatan") || "-";

document.getElementById("bukti").textContent =
    sessionStorage.getItem("bukti");
