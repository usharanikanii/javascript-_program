let a = "kani";
let b = "nan";
 
console.log(`before swap a= ${a}`);
console.log(`before swap a= ${b}`);
 
[b, a] = [a, b];
 
console.log(`after swap a= ${a}`);
console.log(`after swap a= ${b}`);
