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