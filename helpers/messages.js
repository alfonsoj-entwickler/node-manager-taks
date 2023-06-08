import colors from 'colors';

const showMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('############################'.blue);
        console.log('  Select a option  '.blue);
        console.log('############################'.blue);

        console.log(`${'1.'.red} Option 1`);
        console.log(`${'2.'.red} Option 2`);
        console.log(`${'3.'.red} Option 3`);
        console.log(`${'4.'.red} Option 4`);
        console.log(`${'5.'.red} Option 5`);
        console.log(`${'6.'.red} Option 6`);
        console.log(`${'7.'.red} Option 7`);
        console.log(`${'0.'.red} Exit`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select a option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

const pause = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Press ${'Enter'.red} to continue: `, (opt) => {
            readline.close();
            resolve();
        });
    })
    
}

export {
    showMenu,
    pause
}