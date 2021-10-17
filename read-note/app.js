const yargs = require('yargs');
const notes = require('./notes.js');
yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);        
    }
})
yargs.command({
    command : 'read',
    describe: "Reading a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);		
    }
})


yargs.parse();