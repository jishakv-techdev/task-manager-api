// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

const {MongoClient,ObjectId}=require('mongodb')

const connectionURL=process.env.MONGODB_URL
const databaseName='task-manager'

// const id=new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
  if(error){
    return console.log('Unable to connect to database')
  }

  const db=client.db(databaseName)

  // db.collection('users').insertOne({
  //   name:'Jass',
  //   age:31
  // },

  // (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert user');
  //     }

  //     console.log(result.ops);
  //     client.close(); 
  //   }
    
  // )


//   db.collection('tasks').insertMany([{
//     task:'grocery-shopping',
//     status:'completed'
//   },
//   {
//     task:'Payment of electricity bill',
//     status:'pending'
//   },
//   {
//     task:'Hitting gym',
//     status:'completed'
//   }],(error,result)=>{

//         if (error) {
//         return console.log('Unable to insert tasks');
//       }
//    db.collection('tasks')
//      .find({})
//      .toArray((error,docs)=>{
//           if(error){
//       return console.log('Unable to fetch data from database')
//     }
//     console.log('All data:')
// console.log(docs)
//  client.close();

//      })

    
    
//   }
// )


// db.collection('tasks').findOne({task:'Hitting gym'}).then((docs)=>
// {
//   if(!docs)
//   { return console.log('No documents found')}
//    console.log('Required document:')
//   console.log(docs)
// }).catch((error)=>{
//   console.log('There  was some error:',error)
// })



// db.collection('tasks').find({status:'pending'}).toArray((error,docs)=>
// {
//   if(error)
//   { return console.log('No documents found')}
//   console.log('Pending tasks:')
//   console.log(docs)
// })
    

//updation of the tasks
// db.collection('tasks').updateMany({status:'pending'},
//   {$set:{status:'completed'}}).then((docs)=>{
//     if(!docs){
//       return console.log('No documents found.')
//     }
//     console.log('All completed tasks:')
//     console.log(docs)
//   }).catch((error)=>{
//     console.log('Some error has occured')
//     client.close();
//   })

  //Deletion of tasks
  db.collection('tasks').deleteOne({task:'Payment of electricity bill'}).then((docs)=>console.log(docs)).catch((error)=>console.log(error))




}





)