//string and template literals
let prefix = '1F6';
let digits4 = '01234';
let digits5 = '01234567890ABCDEF';

let rows = `${ [...digits4].map( d4 => `
<tr>
<th>${d4}</th>
${ [...digits5].map( d5 => `
<td>${ String.fromCodePoint(
'0x' + prefix + d4 + d5 ) }</td>
`).join( '' ) }
</tr>
` ).join( '' ) }
`;


let template = `<table>
<tr>
<th></th>
${ [...digits5].map( header => `<th>${header}</th>` ).join( '' ) }
</tr>
${ rows }
</table>`;


console.log(template);