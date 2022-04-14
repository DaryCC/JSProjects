let proto = {
    whoami() { console.log('I am proto'); } 
};

let obj = { 
    whoami() { 
        super.whoami();
        console.log('I am obj'); 
    } 
};

console.log("this is prototype of");
console.log( Object.getPrototypeOf( obj ) );
//{}
Object.setPrototypeOf( obj, proto );

console.log("this is whoami");
obj.whoami();
// I am proto
// I am obj