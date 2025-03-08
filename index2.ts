
// 1) Bir sayı al ve bunun pozitif mi, negatif mi, yoksa sıfır mı olduğunu ekrana yazdır.




function kontrolEt(num:number){

    if(num>0){
        console.log(`${num} sayısı pozitiftir.`);
    }
    else if(num<0){
        console.log(`${num} sayısı negatiftir`);
    }
    else{
        console.log(`${num} sayısı Sıfırdır...`);
    }
}

kontrolEt(5);
kontrolEt(-7);
kontrolEt(0);