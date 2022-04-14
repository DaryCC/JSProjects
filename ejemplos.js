// 'use strict';
const sacha={
    nombrea: 'Dary',
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombrea}!`);
        console.log(this);
    }
};

const saludar=sacha.saludar.call({nombrea:"Dary"});