function tampilkan(kategori) {
    document.getElementById("kopi").style.display = "block";
    document.getElementById("dessert").style.display = "block";

    if (kategori == "kopi") {
        document.getElementById("dessert").style.display = "none";
    }
    if (kategori == "dessert") {
        document.getElementById("kopi").style.display = "none";
    }
}
