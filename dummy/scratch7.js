let colors = new Set( [ 'red', 'yellow', 'green' ] );
let horses = new Map( [
    [5, 'QuickBucks'], 
    [8, 'Chocolate'], 
    [3, 'Filippone']
] );
// console.log(colors);
// console.log(horses);
console.log( colors.entries() );
//> SetIterator {["red", "red"], ["yellow", "yellow"], ["green", "green"]}

console.log('\n')
console.log( colors.keys() );
//> SetIterator {"red", "yellow", "green"}

console.log( colors.values() );
//> SetIterator {"red", "yellow", "green"}

console.log( horses.entries() );
//> MapIterator {[5, "QuickBucks"], [8, "Chocolate"], [3, "Filippone"]}

console.log( horses.keys() );
//> MapIterator {5, 8, 3}

console.log( horses.values() );
//> MapIterator {"QuickBucks", "Chocolate", "Filippone"}