// //global scope
let a=20;
const b=30;
function global(){
    let c=40;
    var d=50;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
global()


// //functional scope
// function local_scope(){
//     let a1="hello"
//     let b1="hii"
//     console.log(a1)
// }
// local_scope()
// console.log(b1)    


//block scope

// let a2=30
// {
//     let b2=10
//     let c2=19
//     console.log(a2)
//     console.log(b2)
//     console.log(c2)
// }
// console.log(c2)


//lexical scope
// var aa="hi"
// var aa1=20
// function parent(){
//     function child(){
//         let bb="hello"
//         let bb1=30
//         function subchild(){
//             let cc="welcome"
//             let cc1=100
//             console.log(aa)
//             console.log(bb)
//             console.log(cc)
//             console.log(aa1+bb1+cc1)
//         }
//         subchild()
//     }
//     child()
// }
// parent()