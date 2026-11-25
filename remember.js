function cekForm() {
    var nama = document.getElementById("nama").value;
    var hp = document.getElementById("hp").value;
    var email = document.getElementById("email").value;
    var menu = document.getElementById("menu").value;
    var tipe = document.getElementById("tipe").value;

    if (nama == "" || hp == "" || email == "" || menu == "" || tipe == "") {
        alert("Semua data wajib diisi!");
        return false;
    }
    return true;
}
