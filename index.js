// let app = require('./app')
// // var a = 20;
// // let b = '20';
// // if(a==b){
// //     "=== it checks the type"
// //     "== it checks the value"
// //     console.log("matched")
// // }

// console.log(app.arc)
const arr=[2,3,3,4,4,55,6]

let a = arr.filter((item) => {
    // return item===3
    return item>=4
    // console.log(item)
})
console.log(a)