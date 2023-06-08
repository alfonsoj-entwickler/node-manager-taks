import inquirer from "inquirer";
import colors from "colors";

const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "Select a option",
    choices: [
      { value: "1", name: `${'1.'.white} Create task` },
      { value: "2", name: `${'2.'.white} List tasks` },
      { value: "3", name: `${'3.'.white} List complete tasks` },
      { value: "4", name: `${'4.'.white} List pending tasks` },
      { value: "5", name: `${'5.'.white} Finish task(s)` },
      { value: "6", name: `${'6.'.white} Delete tasks(s)` },
      { value: "0", name: `${'0.'.white} End` },
    ],
  },
];

const pauseOpts = [
  {
    type: "input",
    name: "key",
    message: `Press ${'ENTER'.green} to continue`,
  },
];

const menuDeleteTaks = [
  {
    type: "list",
    name: "option",
    message: "Select a task to delete",
    choices: [
      { value: "1", name: `${'1.'.white} Create task` },
      { value: "2", name: `${'2.'.white} List Tasks` }, 
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Select a option".white);
  console.log("===========================\n".green);

  const { option } = await inquirer.prompt(menuOpts);

  return option;
};

const pause = async () => {
  const { option } = await inquirer.prompt(pauseOpts);

  return option;
};

const readInput = async( message ) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if( value.length === 0 ){
          return 'Please enter a value'
        }
        else {
          return true;
        }
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
}

const deleteListTaks = async( tasks = [] ) => {
 
  const choices = tasks.map( (item, i) => {
    const idx = `${i+1}`.green;
    return {
      value: item.id,
      name: `${idx}. ${item.description}`,
    }
  });
  choices.unshift({
      value: 0,
      name: '0.'.green + ' Cancel',
  });
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices
    }
  ]
  const { id } = await inquirer.prompt(questions);
  return id;
}

const confirmation = async ( message ) => {
  const question = [
    {
      type: 'confirm',
      name: 'okay',
      message
    }
  ];

  const { okay } = await inquirer.prompt(question);

  return okay;
}

export { inquirerMenu, pause, readInput, deleteListTaks, confirmation };
