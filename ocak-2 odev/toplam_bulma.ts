  
  //

  const diziToplam = (dizi: number[]): number => {
    return dizi.reduce((toplam, eleman) => toplam + eleman, 0);
};

console.log(diziToplam([1, 2, 3, 4, 5]));  // 15

// bak buna 




// function toplamBulma(a:number,b:number):number{
//     return a+b;
 
// }

//  console.log(toplamBulma(5,10));



 const toplamBulma=(a:number, b:number):number =>a+b;

 console.log(toplamBulma(5,12));

