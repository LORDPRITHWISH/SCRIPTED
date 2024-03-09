

// function Car(make,model,year,color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function(name){ console.log(`you ${name} drive the ${this.model}`)}
// }

// const car1 = new Car("ford","mustang",2024,"red");
// const car2 = new Car("Camaro","lamborgini",2030,"blur");
// const car3 = new Car("Tesla","Cyber_Truck",2026,"Ultra-marine");


// // console.log(car1.make)
// // console.log(car1.model)
// // console.log(car1.year)
// // console.log(car1.color)


// // console.log(car2.make)
// // console.log(car2.model)
// // console.log(car2.year)
// // console.log(car2.color)


// // console.log(car3.make)
// // console.log(car3.model)
// // console.log(car3.year)
// // console.log(car3.color)

// car3.drive('darklord')
// car1.drive('dawndead')
// car2.drive('cookiemonster')



// class Product{
//     constructor(pro,pri)
//     {
//         this.product=pro
//         this.price=pri
//     }

//     show(nam)
//     {
//         console.log(`${nam} you are looking at the ${this.product} priced at ${this.price}`)
//     }

// }

// const prox= new Product('cyber_truck',400000)

// prox.show(`ronie`)


// class rect{
//     constructor(w,h){
//         this.width=w
//         this.height=h
//     }

//     show(){
//         console.log(this.width)
//         console.log(this.height)
//     }
//     set width(val){
//         if(val>10){
//             this._width=val
//         }
//         else{
//             console.error(`what the fuck is ${val}`)
//         }
//     }
//     set height(val){
//         if(val>10){
//             this._height=val
//         }
//         else{
//             console.error(`what the fuck is "${val}"`)
//         }
//     }

//     get width(){
//         return this._width
//     }
//     get height(){
//         return this._height
//     }
// }






// const rec = new rect(100,200)

// rec.show()

// console.log(rect._width)

// class Pokemon{
//     constructor(a,b,c,d,e,f){
//         this.aanum=a
//         this.bbstr=b
//         this.ccpro=c
//         this.ddpro=d
//         this.eepro=e
//         this.ffpro=f
//     }

//     show(){
//         console.log(    this.aanum,
//                         this.bbstr,
//                         this.ccpro,
//                         this.ddpro,
//                         this.eepro,
//                         this.ffpro)
//     }
// }

// const poke=[new Pokemon(12,"pichu",74.43,44.98,28.5),new Pokemon(12,"pikachu",54.43,65.78,55.98),new Pokemon(12,"raichu",14.43,89.99,98.5)]

// // poke[1].show()

// const maxcc= poke.reduce((a,b)=> a.ccpro>b.ccpro?a:b)
// // const maxcc= poke.reduce((a,b)=> a>b?a:b)

// console.log(maxcc)






// let a=["pritw","ronie","dawn","dead","dark","lord"]

// let c='lolpod'
// let b='lolpoa'

// x=b.localeCompare(c)

// console.log(x)

// // a.sort()
// a.sort()

// console.log(a)

// const date = new Date()
// const day0 = new Date(0)
// const daymax = new Date(8640000000000000)

// console.log(date)
// console.log(day0)
// console.log(daymax)


function outer(){
    c=0;
    console.error(`it is ${c}`)
}

outer()

console.log(outer.c)