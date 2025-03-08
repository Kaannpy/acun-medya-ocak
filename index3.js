// 3) Kullanıcıdan alınan bir sayının asal olup olmadığını kontrol eden bir fonksiyon yaz.
function asalMı(num) {
    if (num < 2) {
        console.log("".concat(num, " bir asal say\u0131 de\u011Fildir."));
        return;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("".concat(num, " bir asal sayi de\u011Fildir."));
            return;
        }
    }
    console.log("".concat(num, " bir asal sayidir"));
}
asalMı(4);
asalMı(5);
asalMı(1);
