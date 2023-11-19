# ÖDEV-1


### 1. JavaScript nedir ve tarihsel gelişiminden bahsedin
Javascript bir programlama dilidir. Html , css ile birlikte web sayfalarının etkileşimli hale getirilimesinde kullanılır. Web tarayıcılarında kullanılır. Tarayıcı tarafında çalışan bir dildir.
Js'in tarihçesine gelecek olursak;
1995'te başladı. Brendan Eich adlı bir kişi, Netscape adlı şirkette çalışırken JavaScript'i yarattı. İlk başlarda dilin adı "Mocha"ydı, sonra "LiveScript" oldu, ama sonra biraz Java'nın popüler olduğunu fark edince adını "JavaScript" olarak değiştirdiler. İlginç bir şekilde, Java ile çok az ortak noktası var.

Sonra, 1996'da Netscape, JavaScript'i tarayıcılar arasında bir standart haline getirmek için bir kuruluşa sundu. İşte burada, dilin adı resmi olarak "ECMAScript" oldu. Bu, dilin kurallarını belirleyen bir dizi standart ve kılavuz içeren bir şey.

Sonrasında, 2000'lerin başlarında tarayıcı savaşları vardı, Internet Explorer ve Netscape birbirine uyumsuzdu. Ama sonra Firefox gibi tarayıcılar ve Web Standards Project gibi şeylerle düzeltmeye çalıştılar.

Hızlı bir sıçrayalım 2009'a: Google, Chrome tarayıcısıyla birlikte V8 JavaScript motorunu tanıttı, bu da JavaScript'in hızını artırdı.

Sonuç olarak, şimdi JavaScript tarayıcılar arasında uyumlu bir şekilde çalışıyor ve Node.js gibi şeylerle sadece tarayıcılarda değil, aynı zamanda sunucu taraflı işlerde de kullanılıyor.


### 2. Java ile javascript arasındaki fark nedir
İlk olarak, Java genellikle büyük ve karmaşık uygulamalarda kullanılır. Mesela, büyük iş uygulamaları veya oyunlar gibi. Ama JavaScript daha çok web tarayıcılarında iş yapmak için kullanılır. Yani, web sayfalarını daha etkileşimli ve havalı hale getirmek için.

İkinci fark, Java'nın nesne tabanlı bir dil olması. Yani, her şey nesnelerle ilişkilendirilir. JavaScript ise tarayıcıda çalışan bir betik dili. Yani, daha çok web tarayıcılarına özel ve daha hafif bir dil.

Sonuç olarak, Java genellikle büyük uygulamalarda kullanılırken, JavaScript daha çok web tarayıcılarında çalışan işlerde kullanılır. İkisi de farklı amaçlara hizmet ediyorlar.

### 3. Javascript teki veri tipleri nelerdir açıklayınız
Bunu açıklamadan önce , veri tipi nedir onu açıklamak istiyorum. Veri tipleri, programlama dillerinde tanımladığımız  değişkenlerin içinde saklanacak verinin türününe göre sınıflandırma işlemidir diyebiliriz. Bu işlemde verinin türünü önceden belirtiriz bu şekilde bilgisayar verinin saklanacağı bellek alanını buna göre ayırır.  Javascripte iki farklı veri tipi vardır.
1) İlkel veri tipi (primitive)
2) İlkel olmayan(non-primitive veya Referans , Obje , Nesne)
#### soruda detay istemediğinden hepsini tek tek anlatma gereği duymadım.

####  İlkel veri tipi (primitive)
Bu veri tipinde olanlar boolean,number,string,null,undefined,symbol, bir değişken bu veri tiplerinden biri ile tanımlanırsa bu bellekte bir yer tutar ve bu alan içerisindeki değer değiştirilemez işte buna immutable yani değiştirilemez veri türleri diyoruz. Bu veri tipleri değerleri tutarlar.
#### İlkel olmayan veri tipleri
Bu veri tiplerine objects de diyebiliriz. yukarıda yazdığım tüm veri tipleri dışındakiler bu veri tipine girer yani Array,Function,Objects vs...
Bu veri tipinde değişkenin bellekte tuttuğu alan içerisinde ki değerler değiştirilebilir.


### 4. null ile undefined arasıdaki fark nedir açıklayınız
Önce benzerliğinden bahsedeyim :) İkiside primitive veri türlerindendir.
Nul = Şöyle diyebilirim , tanımladığımız bir değişkene null değeri atadığımızda bu değişkene bellete bir alan tahsis edilir ancak içerisinde bir değer yoktur diyebilirim. 
Undefined = Bir değişkene değer atanmazsa, bir değişkenin değeri yoksa buna undefined diyebiliriz.

### 5. NaN nedir açıklayınız
Açılımı not a number demek. Matematiksel işlemlerde sonuç sayı değilse bu hatayı alırız. Örnek vermek gerekirse.
```javascript
var result = "hello" * 5;
console.log(result); // NaN
```
### 6. Javascript’te yorum satırı eklemenin kaç farklı yolu vardır
* İki farklı yolu vardır.
* // ve /* */

### 7. Global değişken ne demektir açıklayınız
Global değişken , programın herhangi bir yerinden erişilebilen bir değişkendir diyebilirim. Bu global değişkenler programın genelde en üst düzeyinde tanımlanır.
Örnek olarak; 2 ayrı isimde tanımlanmış bir fonksiyon düşünelim ve bu fonksiyonların dışında en yukarıda bir değişken tanımarsak, bu değişkene bu iki fonksiyondan da ulaşabiliriz. 

### 8. Javascript’te this anahtar kelimesi nedir açıklayınız
js'de this bir anahtar kelimedir. Bunun direk olak bir cevabı yoktur diyebilirim çünkü kullanıldığı bağlama göre anlamı değişkenlik gösterebilir. Genelde bir sınıf tanımladıktan sonra sınıfın içinde çokça kullanırız. Sınıf içinde kullandığımızda sınıfın örneğini temsil eder diyebiliriz ayrıca sınıfın içindeki metotlar ve özellikler bu anahtar kelime kullanılarak çalıştırılır. 

### 9. == ile === farkını örnekler ile açıklayınız
İkiside karşılaştırma operatörüdür.
* == operatörü sadece değerleri karşılaştırır.
* Dğerler eşitse true, yanlış ise false döner. 

* === operatörü ise hem değerleri hemde veri tiplerini karşılaştırır.
* Değerler ve türler her ikside eşitse true döner.
#### not: === operatörünü kullanmak daha güvenlidir. 

### 10. let var const farkını tablo yapınız
|         | Kapsam (Scope)          | Yeniden tanımlama | Değiştirilebilirlik | İlk Değer Atama            |
|---------|-------------------------|-------------------|---------------------|----------------------------|
| let     | Blok                    | İzin verir        | İzin verir          | Atanabilir veya atanmaz   |
| var     | Global ve Function      | İzin verir        | İzin verir          | undefined                  |
| const   | Blok                    | İzin vermez       | İzin vermez         | Zorunlu                    |

### 11. Arrow fonksiyonun normal fonksiyondan farkları nelerdir
* Arrow fonksiyonlar daha kısa söz dizimine sahiptirler , normal fonksiyonlara göre
* Arrow fonksiyonlar consturactor olarak kullanılamazlar yani new anahtar kelimesi ile oluşturamayız.

### 12. swich bloğu içinde hatasız nasıl değişken tanımlanır


### 13. Pure fonksiyon ne demektir açıklayınız
Pure fonksiyon demek fonksiyonun davranış girdilere bağlıdır ve başka faktörlerden etkilenmeden içinde tanımlanan işlemleri yaparlar. Ayn girdiler ile çağrıldığında her zaman aynı çıktıyı üretirler. 

### 14. Rest operatör nedir örnekle açıklayınız
Rest operatörü üç nokta ile gösterilir. Bu operatörü hem dizilerde hemde fonksiyonlada kullanabiliriz. Fonksiyonlarda kullanınca , fonksiyonun parametrelerini toplu şekilde almak için , dizilerde kullanılıncada dizinin sahip olduğu tüm elamanları toplu almak için kullanılır.  


### 15. Object destructuring nedir örnekle açıklayınız
Ben önce destructuring kavramını açıklamak istiyorum.
Destructuring = dizileri ve nesneleri paketinden çıkarmanın ve farklı bir değişkene atamanın yoldur diyebilirim. 
* Objelerde örnek vermek gerekirse 
* mesela bir objemiz olsun.
```javascript
// Obje destructuring
const users= {
    name: "Mustafa",
    surname:"Gözcü",
    age:"24"
}

//buradaki değerlere normalde 
console.log(users.age) // şeklinde ulaşabiliriz fakat destructuring ile aşağıdaki şekilde ulaşabiliriz
const {surname} = users
console.log(surname)
```

### 16. 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz
Bu sorudan anladığım obje oluşturma çeşitleri istenmekte. Obje oluşturmak için birden fazla yol var JavaScript'de
#### 1
```javascript
let names = {
    name1="Mustafa"
    name2="Ilgın"
}
```
#### 2
```javascript
let names = new Object();
names.name1="Mustafa"
names.name2="Ilgın"
```
#### 3
```javascript
let names = Object.create({ name1="Mustafa" name2="Ilgın"})
```
#### 4
```javascript
let name1 = "Mustafa"
let name2= "Ilgın"
let names ={name1 , name2}
```
#### 5
```javascript
let names = Object.assign({},{name1="Mustafa",name2="Ilgın"})
```
#### 6 (Bu obje oluşturmaya girer mi bilmiyorum ama json dosylarını js objesine çevirirken kullandığımız parse metodu yani;)
```javascript
let names = {"name1":"Mustafa","name2":"Ilgın"}
let newNames = JSON.parse(names);
```

### 17. 2 elemanlı bir objenin key ve value değerlerinin karakter sayısı ile 2 farklı döngü methodu kullanarak yeni bir obje oluşturunuz
```javascript
let names = {name1:"Mustafa", name2:"Ilgın"}
let namNew = {}
for (let x in names){
    namNew[x] = names[x].length;
}
console.log(namNew)

//2.yöntem
const oldObject= {
    key1:"value1",
    key2:"value123445679"
}
const newObject = {};
Object.keys(oldObject).forEach((key) => {
    const value = oldObject[key]
    const length = value.length
    newObject[key]=length;
})
console.log(newObject)
```

### 18. Cookie, local storage ve session storage farkını tablo yapınız
| Özellik               | Cookie                           | Local Storage                    | Session Storage                  |
|-----------------------|----------------------------------|----------------------------------|----------------------------------|
| **Saklama Süresi**    | Genellikle uzun süreli (ayarlanabilir) | Kalıcıdır (browser kapatılsa bile kalır) | Browser oturumu boyunca sürer   |
| **Veri Boyutu**        | Küçük (4KB'e kadar)               | Genellikle büyük (5MB'e kadar)   | Genellikle büyük (5MB'e kadar)   |
| **Veri Saklama Yeri**  | Tarayıcı ve sunucu arasında değişim | Tarayıcıda kalır                  | Tarayıcıda kalır                  |
| **Veri Erişimi**       | Server ve client tarafında okunabilir | Sadece client tarafında okunabilir | Sadece client tarafında okunabilir |
| **Kullanım Amacı**     | Oturum bilgileri, tercihler vb.    | Kalıcı veri depolama             | Oturum boyunca geçici veri depolama |

### 19. asenkron ve senkron işlem farkı nedir
Bu kavramlar her programlama dili için geçerlidir. 
Senkron işlemler sırayla ve adım adım çalışan işlemlerdir yani bir işlem tamamlanmadan diğer işleme geçilmez.
Asenkron işlemlerde ise herhangi bir sıra yoktur, işlemler birbirini beklemeden devam eder.

### 20. promise nedir ve neden ihtiyaç duyarız
Promise Js'de asenkron programlamayı daha etkili hale getirmek için kullanılan bir nesnedir. Promisler asenkron işlemleri daha yönetilebilir bir hale getirmeyi amaçlar.
* Promise'nin 3 temel durumu vardır. 1) Pending 2)Fullfilled 3)Rejected

### Array soruları

```javascript
// 1. dolap arrayindeki son elemanı silip consola yazdırın
let removeElement = dolap.pop();
console.log(dolap)
console.log(removeElement)
```
```javascript
// 2. dolap arrayindeki ilk elamanı silip yerine “Hat” elemanını gönderip consola yazdırın
let removeFirstElement=dolap.shift()
console.log(dolap)
let addFirstElement = dolap.unshift("Hat")
console.log(dolap)

```
```javascript
// 3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin
const type = Array.isArray(dolap)
console.log(type)
```
```javascript
// 4. dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin
let find = dolap.find((element)=> element === Pant)
console.log(find);

find = dolap.indexOf("Pant")
console.log(find)

find = dolap.includes("Pant")

```
```javascript
// 5. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek
// fonksiyonu yazın

function elementLengthsFind (array) {
    const elementLengths = array.map(a => a.length);
    const totalElementLength = elementLengths.reduce((total,elementLengths) => total + elementLengths,0);
    return totalElementLength;
}
const sonuc = elementLengthsFind(dolap)
console.log(sonuc)
```
```javascript
// 6. dolap arrayindki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın
let yeniDolap1 = [];
for (let i = 0; i < dolap.length; i++) {
    yeniDolap1.push(dolap[i].toUpperCase());
}
console.log(yeniDolap1);
let yeniDolap2 = dolap.map(item => item.toUpperCase());
console.log(yeniDolap2);
let yeniDolap3 = [];
dolap.forEach(item => {
    yeniDolap3.push(item.toUpperCase());
});
console.log(yeniDolap3);
```
```javascript
// 7. dolap arrayini index sayıları key olacak şekilde objeye çeviriniz
let dolapObjesi = {};
dolap.forEach((item,index)=>{
   dolapObjesi[index] = item;
})
console.log(dolapObjesi)

```
8. slice ile splice farkı nedir

slice metodu, bir diziden belirli bir alt diziyi alarak yeni bir dizi oluşturur ve orijinal diziyi değiştirmez. Öte yandan, splice metodu, bir dizide belirli bir konumdan başlayarak öğeleri ekleyebilir, silebilir veya değiştirebilir, bu nedenle orijinal diziyi değiştirir.

```javascript
const arr = [1,2,3,4,5,6,7,7,8,6,10];
// 1. arrayindeki yinelenen sayıları bulun
function yinelenenSayiBul(arr){
    return arr.filter((value,index,arr) => {
        return arr.indexOf(value) != index;
    })
}
let yinelenenler = yinelenenSayiBul(arr);
console.log(yinelenenler)
```
```javascript
// 2. arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun
const uniqueArr1 = [...new Set(arr)];
console.log(uniqueArr1);

const uniqueArr2 = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr2);
```
```javascript
// 3. arrayindeki en yüksek ve en düşük değeri 2 farklı methodla bulun
const max1 = Math.max(...arr);
const min1 = Math.min(...arr);
console.log("En Yüksek Değer (max1):", max1);
console.log("En Düşük Değer (min1):", min1);

```

* Kod Sorusu-1 Bu kodun çıktısı nedir neden ?
Kodun çıktısı rejected durumu olacak çünkü reject fonksiyonu kullanılarak bu promise başarısızlık durumuna geçmiş. ilk then bloğu çalışmaz çünkü işlem başarsız durum oldu fakat then.catch zinciri olduğundan dolayı ilk catch çalışacak ama ondan sonraki then de çalışacak.

* Kod Sorusu-2 
Kod, başta başarıyla çalışan bir işlemi simgeliyor, sonra bir hata ('Defeat') oluyor ve  başka bir hata daha ('error') ortaya çıkıyor. Sonuç olarak, çıktı "success", "Defeat" ve "error" sırasıyla ekrana yazdırılıyor.
success
Defeat
error



