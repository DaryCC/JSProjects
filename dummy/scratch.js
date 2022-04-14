
// var language = 'Markdown';
// var extension = 'md';
// var fileName = 'Destructuring';

// var file = {
//     language: language,
//     extension: extension,
//     fileName: fileName
// };
// console.log(file);

//  var file2= { language, extension, fileName };
//  console.log(file2);

let user = {
    name        : 'Ashley',
    email       : 'ashley@ilovees2015.net',
    lessonsSeen : [ 2, 5, 6, 7, 9 ],
    nextLesson  : 10
};
let {
    email: email,
    nextLesson: nextLesson
} = user;

console.log(user);
console.log("------------------------>")
let user2 = {email,nextLesson}=user;
// user2 es igual  que user?
console.log(user2 === user,user2.name);
console.log(email,nextLesson);
console.log("Esto va aquí------------------------>")
let {name}=user;
console.log(name);
// console.log("------------------------>")
// console.log({email,nextLesson});
// console.log("------------------------>")
// console.log(email,nextLesson);
// console.log("------------------------>")
// console.log(email);
// console.log(nextLesson);
// console.log("------------------------>")
let spreadingStrings = 'Spreading Strings';
let charArray = [ ...spreadingStrings ];
console.log(charArray);




console.log("Esto va aquí------------------------>")


maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) =>
{ 
  console.log(head1+'---'+head2);
  if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' )
  {
    return len;
  }
  if ( head1 === head2 )
    return maxCommon( tail1, tail2, len+1 );
  
  let firstBranch = maxCommon( tail1, [head2, ...tail2], 0 );
  let secondBranch = maxCommon([head1,...tail1], tail2, 0 );
  return Math.max( ...[len, firstBranch, secondBranch ] );
}

console.log(maxCommon('coso','roso')); 