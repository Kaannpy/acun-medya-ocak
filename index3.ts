
 // 3) Kullanıcıdan alınan bir sayının asal olup olmadığını kontrol eden bir fonksiyon yaz.



 function asalMı(num:number):void{
    if (num < 2) {
        console.log(`${num} bir asal sayı değildir.`);
        return;
    }

    for(let i=2;i<num;i++){

        if(num%i==0){

            console.log(`${num} bir asal sayi değildir.`)
                return;
        } 
         
         

    }

    console.log(`${num} bir asal sayidir`);


 }
   asalMı(4);
   asalMı(5);
   asalMı(1);

