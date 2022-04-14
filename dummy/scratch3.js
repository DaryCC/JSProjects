//string and template literals
let price = 5999.9;
let currencySymbol = '€';
let productName = 'Titanium Toothbrush';

let formatCurrency = function( currency, amount ) {
    return amount.toFixed(2) + currency;
}

let format = (textArray, ...substitutions) => {
    let template = textArray[0];
    console.log(textArray[1]);
    console.log(textArray[2]);
    console.log(textArray[3]);
    console.log(substitutions[0]);
    console.log(substitutions[1]);
    console.log(substitutions[2]);
    template += substitutions[0];
    template += textArray[1];
    template += formatCurrency( substitutions[1], substitutions[2] );
    template += textArray[3];

    return template;
};
