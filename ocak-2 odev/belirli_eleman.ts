

let dizi:string[]=['A','B','C','D','E','K'];

let aranan_elaman='K';
let bulunduMu=false;

for(let i=0;i<dizi.length;i++){

  if(dizi[i]==aranan_elaman){

    bulunduMu=true;
  }

 
}  

if (bulunduMu){

    console.log(`Aradıgınız harf olan ${aranan_elaman}  bulundu`)
}else{
    console.log('aradıgınız harf bulunamadı');

}
