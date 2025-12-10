const mongoose=require('mongoose')


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URL)
  // useNewUrlParser:true,useCreateIndex:true
// const me=new User({
//   name:'Wall-E',
//   age:31,
//   password:'password'
// })

// me.save().then((result)=>{console.log('User saved successfully:',result)}).catch((error)=>{
//   console.log('An error has occured!:',error)
// })
// me.save().then((result)=>{console.log(result)}).catch((error)=>{
//   console.log('Error!',error)
// })


// const task=mongoose.model('Task',{
//   task:
//   {type:String,
//     required:true,
//     trim:true

// },
// status:
// {type:String,
//   default:false
// }
// })
// const me=new task({
//   task:'Doing laundry',
//   status:'completed'
// })
// me.save().then((result)=>{console.log(result)}).catch((error)=>{
//   console.log('Error that has occurred:',error)
// })