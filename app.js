const add = require('./add')
const read = require('./read')
//const write = require('./write')

// get user input 
const cmd = process.argv

//write(cmd)

var note = {}

if(cmd[2] == 'add') {

  note = {
    id: cmd[3],
    title: cmd[4],
    body: cmd[5]
  }

  var oldNote = read()

  add(note, oldNote)
}