import { Todo } from "./todo.class";


export class TodoList {

    constructor () {

        //this.todos =[];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter(  todo => todo.id != id ) ;
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {
            for( const todo of this.todos ){
                console.log(id, todo.id);
                if( todo.id = id ) {

                    todo.completado = !todo.completado;
                    this.guardarLocalStorage();
                    break;

                }
            }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(  todo => todo.completado != true ) ;
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    };

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo'))? JSON.parse( localStorage.getItem('todo') ) :  [] ;
        
        //console.log('cargarLocal: ', this.todos);

        //this.todos = this.todos.map( obj => Todo.fromJson ( obj ) );
        // Nuevamente eliminamos para cuando es un solo argumento
        this.todos = this.todos.map( Todo.fromJson );

    };

}