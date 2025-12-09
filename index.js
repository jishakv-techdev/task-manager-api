const express=require('express')
require('./src/database/mongoose')

const Router=require('./src/routers/user')
const router=require('./src/routers/task')


const app=express()
const port=process.env.PORT
 



app.use(express.json())
app.use(Router)
app.use(router)



app.listen(port,()=>{
  console.log('Server is up on '+port)
})
