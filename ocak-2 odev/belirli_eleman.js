var dizi = ['A', 'B', 'C', 'D', 'E', 'K'];
var aranan_elaman = 'K';
var bulunduMu = false;
for (var i = 0; i < dizi.length; i++) {
    if (dizi[i] == aranan_elaman) {
        bulunduMu = true;
    }
}
if (bulunduMu) {
    console.log("Arad\u0131g\u0131n\u0131z harf olan".concat(aranan_elaman, " \"  \"  bulundu"));
}
else {
    console.log('aradıgınız harf bulunamadı');
}
