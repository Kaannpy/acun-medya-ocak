

let dizi:number[]=[5,6,7,8,9,10,17];

// let dizi: Array<number> = [5, 6, 7, 8, 1, 0, 11, 17];


let max_value=dizi[0];
for(let i=1;i<dizi.length;i++){
    
    if(dizi[i]>max_value){
        max_value=dizi[i];
        
    }

}
console.log(max_value);