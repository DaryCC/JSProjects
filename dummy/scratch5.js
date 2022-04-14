//string and template literals
let upper = (textArray, ...substitutions) => {
	let fullText=``;
    for (let i=0;i< substitutions.length;i++) {
        fullText+=textArray[i];
        fullText+=typeof(substitutions[i]) ==='string'?substitutions[i].toUpperCase():substitutions[i];
        // console.log(substitutions[1].toUpperCase());
        // console.log(typeof(substitutions[1])); 

        
    }  
    return fullText;
    
};

let a = 1, b = 'ab', c = 'DeF';
console.log(upper`x ${a} x ${b} x ${c} x`);