// let dolap = ["Shirt", "Pant","TShirt"];

// // 1. dolap arrayindeki son elemanı silip consola yazdırın
// // let removeElement = dolap.pop();
// // console.log(dolap)
// // console.log(removeElement)

// // // 2. dolap arrayindeki ilk elamanı silip yerine “Hat” elemanını gönderip consola yazdırın
// // let removeFirstElement=dolap.shift()
// // console.log(dolap)
// // let addFirstElement = dolap.unshift("Hat")
// // console.log(dolap)

// // // 3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin
// // const type = Array.isArray(dolap)
// // console.log(type)

// // 4. dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin
// // let find = dolap.find((element)=> element === Pant)
// // console.log(find);

// // find = dolap.indexOf("Pant")
// // console.log(find)

// // find = dolap.includes("Pant")

// // // 5. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek
// // // fonksiyonu yazın

// // function elementLengthsFind (array) {
// //     const elementLengths = array.map(a => a.length);
// //     const totalElementLength = elementLengths.reduce((total,elementLengths) => total + elementLengths,0);
// //     return totalElementLength;
// // }
// // const sonuc = elementLengthsFind(dolap)
// // console.log(sonuc)

// // 6. dolap arrayindki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın
// let yeniDolap1 = [];
// for (let i = 0; i < dolap.length; i++) {
//     yeniDolap1.push(dolap[i].toUpperCase());
// }
// console.log(yeniDolap1);
// let yeniDolap2 = dolap.map(item => item.toUpperCase());
// console.log(yeniDolap2);
// let yeniDolap3 = [];
// dolap.forEach(item => {
//     yeniDolap3.push(item.toUpperCase());
// });
// console.log(yeniDolap3);

// // 7. dolap arrayini index sayıları key olacak şekilde objeye çeviriniz
// let dolapObjesi = {};
// dolap.forEach((item,index)=>{
//    dolapObjesi[index] = item;
// })
// console.log(dolapObjesi)

// 8. slice ile splice farkı nedir

// slice metodu, bir diziden belirli bir alt diziyi alarak yeni bir dizi oluşturur ve orijinal diziyi değiştirmez. Öte yandan, splice metodu, bir dizide belirli bir konumdan başlayarak öğeleri ekleyebilir, silebilir veya değiştirebilir, bu nedenle orijinal diziyi değiştirir.


// const arr = [1,2,3,4,5,6,7,7,8,6,10];
// // 1. arrayindeki yinelenen sayıları bulun
// function yinelenenSayiBul(arr){
//     return arr.filter((value,index,arr) => {
//         return arr.indexOf(value) != index;
//     })
// }
// let yinelenenler = yinelenenSayiBul(arr);
// console.log(yinelenenler)

// 2. arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun
const uniqueArr1 = [...new Set(arr)];
console.log(uniqueArr1);

const uniqueArr2 = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr2);

// 3. arrayindeki en yüksek ve en düşük değeri 2 farklı methodla bulun
const max1 = Math.max(...arr);
const min1 = Math.min(...arr);
console.log("En Yüksek Değer (max1):", max1);
console.log("En Düşük Değer (min1):", min1);


