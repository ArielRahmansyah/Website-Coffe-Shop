var data = new URLSearchParams(window.location.search);
var nama = data.get("nama");
var hp = data.get("hp");
var email = data.get("email");
var menu = data.get("menu");
var tipe = data.get("tipe");

if (nama == null) {
    window.location.href = "member.html";
}

var diskon = "5%";
if (tipe == "Gold") {
    diskon = "10%";
}

document.getElementById("hasilNama").textContent = nama;
document.getElementById("hasilHp").textContent = hp;
document.getElementById("hasilEmail").textContent = email;
document.getElementById("hasilMenu").textContent = menu;
document.getElementById("hasilTipe").textContent = tipe;
document.getElementById("hasilDiskon").textContent = diskon;

var daftar = JSON.parse(localStorage.getItem("daftarMember")) || [];
var info = performance.getEntriesByType("navigation")[0];
var caraBuka = info ? info.type : "navigate";

if (nama != null && caraBuka == "navigate") {
    daftar.push({ nama: nama, hp: hp, email: email, menu: menu, tipe: tipe });
    localStorage.setItem("daftarMember", JSON.stringify(daftar));
}

document.getElementById("totalMember").textContent = daftar.length;

var tabel = document.getElementById("isiTabel");

for (var i = 0; i < daftar.length; i++) {
    var baris = tabel.insertRow();
    baris.insertCell().textContent = i + 1;
    baris.insertCell().textContent = daftar[i].nama;
    baris.insertCell().textContent = daftar[i].hp;
    baris.insertCell().textContent = daftar[i].email;
    baris.insertCell().textContent = daftar[i].menu;
    baris.insertCell().textContent = daftar[i].tipe;
}

function hapusSemua() {
    localStorage.removeItem("daftarMember");
    location.reload();
}
