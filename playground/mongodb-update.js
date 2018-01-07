//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server: ', err);
  }
  console.log('Connected to MongoDB server');

  //findoneandupdate

  // db.collection('Todos')
  // .findOneAndUpdate(
  //   {
  //     _id: new ObjectID('5a510bfb1bcb03832441c2ad')
  //   },
  //   {
  //     $set:{
  //       completed : true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   })
  //   .then((res) => {
  //   console.log(res);
  // });

  db.collection('Users')
  .findOneAndUpdate({
      _id: new ObjectID('5a4bbf96475b4c06d45c5628')
    },{
      $set: {
        name: 'Didac'
      },
      $inc: {
        age: 1
      }
    },{
      returnOriginal: false
    })
  .then((res) => {
    console.log(res);
  });

  //db.close();
});
