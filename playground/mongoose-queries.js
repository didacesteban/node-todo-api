const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5a6d9c2def802e600a3c67ef111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('TODOS', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((err) => console.log(err));


// USER

let idUser = '5a57bf2541238fa70370e87d';

if (!ObjectID.isValid(idUser)) {
  return console.log('ID not valid');
}

User.findById(idUser).then((user) => {
  if (!user) {return console.log('User does not exist')};
  console.log(user);
}).catch((err) => {
  console.log(err);
});
