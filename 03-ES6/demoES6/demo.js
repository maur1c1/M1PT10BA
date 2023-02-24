// function suma(){
//     let x=5;
//     const z = [];
//     const obj = {
//         a: 3
//     }
//     if(true){
//         x = 'PT-11b';
//         z.push(10);
//         obj.b = 4;
//     }

//     console.log(z);
// }

// var crearFuncion = function(){
//     var arreglo = []; //[fn(){...}, fn(){...}, fn(){...}] con var agarra el ultimo valor
//     for(let i=0; i<3; i++){
//         arreglo.push(
//             function(){
//                 console.log(i);// 0,1,2 con let se guarda por bloque
//             }
//         )
//     }
//     return arreglo;
// }

// var arr = crearFuncion();
// arr[0](); // 0
// arr[1](); // 1
// arr[2]();  // 2

// let nums = [1,5,5,2,3,4,5];
// let cincos=[];

// nums.forEach(function(elemento){
//     if(elemento === 5){
//         cincos.push(elemento)
//     }
// })

// //version arrow function

// // nums.forEach((elemento)=>{
// //     if(elemento === 5){
// //         cincos.push(elemento)
// //     }
// // })

// // //con ternarios
// // nums.forEach((elemento)=> elemento===5 ? cincos.push(elemento):'');

// // //con filter
// // let numCont = nums.filter((num)=> num === 5);

// // 

// function object(name, age, a, b){
//     let cohorte = "PT-11B"
//     let obj = {
//         name,
//         age,
//         cohorte,
//         [a+b] : 'hola'
//     }

//     console.log(obj); //{name: 'Dai', age: 25}
// }

// object('Dai', 25, 5,2);

// function saludar(saludo){
//     let name = 'Mati';
//     console.log(`${saludo} ${name}`);
// }

// saludar('Hola');

// let [a,b,c] = [1,2,3];

// let objs={
//     nomme: 'PT-11b',
//     eta:'3 weeks'
// }

// let {eta}=objs;

// console.log(eta);

// function ciao(salute='buongiorno'){
//     console.log(salute);
// }
// console.log('buonanotte');

// function arrays(x, ...y){ // 
//     console.log(y);//  [2,3,4,5,6]
//     console.log(x + y.length); //1+4 =5


// }

// arrays(1,2,3,4,5);
//spread operator
function arr(){
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let arr3 = ['Arrivederci', {a:25}];

    console.log([...arr1, ...arr2, ...arr3]); // [1,2,3,4,5,6,'Arrivederci',{a:25}]
}

arr();



