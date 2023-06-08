import colors from "colors";
import { inquirerMenu, pause, readInput, deleteListTaks, confirmation } from "./helpers/inquirer.js";
import { Tasks } from "./models/tasks.js";
import { saveDB, readDB } from "./helpers/saveFile.js";

console.clear();

const main = async () => {
  let opt = "";

  const myTaks = new Tasks();
  const tasksRead = readDB();

  if ( tasksRead ) { // cargar tareas
    myTaks.loadTasksFromArray( tasksRead );
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput('Description:');
        myTaks.createTask(desc);
        break;

      case "2":
        myTaks.showFullTasks();
        break;

      case "3":
        myTaks.listDone(true);
        break;

      case "4":
        myTaks.listDone(false);
        break;

      case "6":
        const deleteId = await deleteListTaks(myTaks.listArray);
        const okay = await confirmation('Are you sure?');
        if( okay && deleteId !== 0 ) {
          myTaks.deleteTask(deleteId);
          console.log('Task was deleted');
        }
        break;
    }
    
    saveDB(myTaks.listArray);

    await pause();
  } while (opt !== "0");
};

main();
