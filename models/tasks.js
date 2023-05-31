import { Task } from "./task.js";
import colors from "colors";

class Tasks {
    _list = {};

    get listArray() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            list.push( this._list[key] );
        });

        return list;
    }

    constructor() {
        
        this._list = {};
    }

    createTask( desc = '' ) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    loadTasksFromArray( loadedTaks = [] ) {
        
        loadedTaks.forEach( item => {
            this._list[item.id] = item;
        });
    }

    showFullTasks() {
        Object.keys(this._list).forEach( (key, i) => {
            const numberTask = `${i + 1}`.green;
            console.log(`${numberTask.green} ${this._list[key].description} :: ${this._list[key].doneDate ? 'Completa'.green : 'Pendiente'.red}`)
        });
    }

    listDone( done = true ) {
        Object.keys(this._list).forEach( (key, i) => {
            const numberTask = `${i + 1}`.green;
            // !xor -> ( true true ) => true
            // !xor -> ( false false ) => true
            if( !((done || this._list[key].doneDate) && !(done && this._list[key].doneDate)) ) {
                console.log(`${numberTask.green} ${this._list[key].description} :: ${this._list[key].doneDate ? 'Completa'.green : 'Pendiente'.red}`)
            }
        });
    }

    deleteTask( id = '' ) {
        console.log(this._list[id], id);
        if( this._list[id] ) {
            console.log(id);
            delete this._list[id];
        }
    }
}

export {
    Tasks
}