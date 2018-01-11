var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: 'didac@didac.com'
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
},(err) => {
  console.log(err)
});

// var otherTodo = new Todo({
//   text: 'Watch football match',
//   completed: false,
//   completedAt: 1515696896
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Saved: ', doc);
// }, (e) =>{
//   console.log(e);
// });
