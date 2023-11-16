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


