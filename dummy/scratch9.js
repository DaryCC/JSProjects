//make the following object iterable
let todoList = {
    todoItems: [],
    addItem( description ) {
        this.todoItems.push( { description, done: false } );
        return this;
    },
    crossOutItem( index ) {
        if ( index < this.todoItems.length ) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};

//todoList.addItem( 'task 1' ).addItem( 'task 2' );
//console.log(todoList);
todoList.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 ).crossOutItem(1);
// console.log(todoList);

// Write your code below
/*
let iterableTodoList = /// ???;

for ( let item of iterableTodoList ) {
    console.log( item );
}
*/
let iterableTodoList= function * (){
    yield todoList.todoItems;
}
//iterableTodoList.next;
console.log("----------------------------------------->");
let prueba=[...iterableTodoList()];
console.log(prueba);