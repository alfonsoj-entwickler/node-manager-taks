import { v4 as uuidv4 } from 'uuid';


class Task {
    id = '';
    description = '';
    doneDate = null;

    constructor( description ) {
        this.id = uuidv4();
        this.description = description;
        this.doneDate = null;
    }
}


export {
    Task
}