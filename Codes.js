// // Obje destructuring
// const users= {
//     name: "Mustafa",
//     surname:"Gözcü",
//     age:"24"
// }

// //buradaki değerlere normalde 
// console.log(users.age) // şeklinde ulaşabiliriz fakat destructuring ile aşağıdaki şekilde ulaşabiliriz
// const {surname} = users
// console.log(surname)


// // OBJE OLUŞTURMA YÖNTEMLERİ
// // let names = {
// //     name1="Mustafa"
// //     name2="Ilgın"
// // }

// // let names = new Object();
// // names.name1="Mustafa"
// // names.name2="Ilgın"


// // let names = Object.create({ name1="Mustafa" name2="Ilgın"})


// // let name1 = "Mustafa"
// // let name2= "Ilgın"
// // let names ={name1 , name2}

// // let names = Object.assign({},{name1="Mustafa",name2="Ilgın"})

// // let names = {"name1":"Mustafa","name2":"Ilgın"}
// // let newNames = JSON.parse(names);


//soru17 obje oluşturma
// let names = {name1:"Mustafa", name2:"Ilgın"}
// let namNew = {}
// for (let x in names){
//     namNew[x] = names[x].length;
// }
// console.log(namNew)


// const oldObject= {
//     key1:"value1",
//     key2:"value123445679"
// }
// const newObject = {};
// Object.keys(oldObject).forEach((key) => {
//     const value = oldObject[key]
//     const length = value.length
//     newObject[key]=length;
// })
// console.log(newObject)