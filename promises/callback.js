const operation = (numero1,numero2, op)=>{
  return op(numero1,numero2);
}


console.log(operation(1,2,(a,b)=>a+b));
console.log(operation(1,2,(a,b)=>a-b));
console.log(operation(1,2,(a,b)=>a*b));
