// primitive 

// let name = "Atal";     // string
// let age = 22;         // number
// let isOk = true;      // boolean
// let x;                // undefined
// let y = null;         // null
// let big = 123n;       // bigint
// let sym = Symbol();   // symbol
//Symbol → uniqueness
// BigInt → precision limit
// console.log(name,age,isOk,x,y,big,sym)

//non-primitive or refernce

// let obj = { name: "Atal" }; // object
// let arr = [1, 2, 3];        // array
// let fun = function() {};    // function
// console.log(obj,arr,fun)

// "Primitive types are immutable and stored by value,
//  while non-primitive types are mutable and stored by reference."

//----------------------------Heap and Stack---------------------------------------------


// stack[primivite]

// let a=10
// let b=a
// b=20// independent 
// agar b change hua to a change nhi hoga kyu store by value
// console.log(a)//10
// console.log(b)// 20

// heap[non-primitive ]

//  let obj={
//     name:"allen"
//  }
//  let b=obj// copy by reference
//  b.name="king"
// ager b change hoga to obj bhi change ho jayega kyu ki ye store by reference[share]
//  console.log(obj)// king
//  console.log(b)// king