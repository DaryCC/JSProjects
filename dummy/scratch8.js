//iterators and generators
let getCountdownIterator = function *() {
  //Write your Code here
  count = 10;
  for(let i=0;i<10;i++) {
    console.log(count);
    yield count=count-1;
    console.log(count);

  }

}
//console.log( [ ...getCountdownIterator() ] );

console.log( [ ...getCountdownIterator() ] );