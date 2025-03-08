// 1) Bir sayı al ve bunun pozitif mi, negatif mi, yoksa sıfır mı olduğunu ekrana yazdır.
function kontrolEt(num) {
    if (num > 0) {
        console.log("".concat(num, " say\u0131s\u0131 pozitiftir."));
    }
    else if (num < 0) {
        console.log("".concat(num, " say\u0131s\u0131 negatiftir"));
    }
    else {
        console.log("".concat(num, " say\u0131s\u0131 S\u0131f\u0131rd\u0131r..."));
    }
}
kontrolEt(5);
kontrolEt(-7);
kontrolEt(0);
